import { removeCamelCase } from "@/js/utils";
import { getOmdbAPIKey } from "@/js/secretsLocker";

const baseSearchUrl = "http://localhost:8080/api/search";
const baseSearchByIdUrl = "http://localhost:8080/api/id_search";

//---------- MAIN INTERFACE METHODS ----------

/*
Request films from the search API meeting the criteria required in the state parameter
 */
export async function requestFilms(state: any) {
  const data = { content: [], suggestions: [] as any[] };
  data.content = await fetch(`${baseSearchUrl}${getFilters(state)}`).then(
    (response) => response.json()
  );
  data.suggestions = ["Suggestion 1", "Suggestion 2", "Suggestion 3"];
  return data;
}

/*
Request data of a film from the search API given the film's IMDb id
 */
export async function requestFilmDetails(filmId: string) {
  const filmDetail = (
    await fetch(`${baseSearchByIdUrl}?id=${filmId}`).then((response) =>
      response.json()
    )
  )[0];

  filmDetail.source.suggestions = await getSuggestions(
    filmDetail.id,
    filmDetail.source.genres
  );

  return filmDetail.source;
}

/*
Gets the complete list of genres
 */
export async function getInitialGenres() {
  return fetchAggregation("genres");
}

/*
Gets the complete list of title types
 */
export async function getInitialTypes() {
  return fetchAggregation("titleType");
}

/*
Gets the link to the poster of a film from the OMDb api given the film's IMDb id
 */
export async function getImageLink(filmId: string) {
  const data = await fetchFromOmdb(filmId);
  return data.Poster && data.Poster !== "N/A" ? data.Poster : "";
}

/*
Gets the link to the poster and the plot description of a film from the OMDb api given the film's IMDb id
 */
export async function getImageAndPlot(filmId: string) {
  const data = await fetchFromOmdb(filmId);
  return {
    poster: data.Poster && data.Poster !== "N/A" ? data.Poster : "",
    plot: data.Plot && data.Plot !== "N/A" ? data.Plot : "",
  };
}

//---------- AUXILIARY METHODS ----------

/*
Gives the string formed by all the filters required to get the films: genres, types, query and pagination
 */
function getFilters(state: any) {
  return `${getListFilter(state.genres, "?genre=")}${getListFilter(
    state.types,
    "&type="
  )}&q=${state.text}${getPageFilter(state.currentPage, state.pageSize)}`;
}

/*
Takes and array and creates an string to use as a parameter in an url
 */
function getListFilter(array: any[], initialStr: string) {
  return array
    .reduce((actualstr, elem) => `${actualstr}${elem.value},`, initialStr)
    .slice(0, -1);
}

/*
Gives the string prepared to include pagination in an url
 */
function getPageFilter(currentPage: number, pageSize: number) {
  return `&from=${(currentPage - 1) * pageSize}&size=${pageSize}`;
}

/*
Fetches a list of elements aggregated by the field given from the search api
 */
async function fetchAggregation(field: string) {
  return (
    (
      await fetch(`${baseSearchUrl}?agg=${field}&q=`).then((resolve) =>
        resolve.json()
      )
    )
      //Filters non-valid elements
      .filter((elem: any) => elem.key != "\\N" && elem.key != "Adult")
      //Maps to a response object that includes a beautified version as name
      .map((elem: any) => ({
        name: removeCamelCase(elem.key),
        value: elem.key,
      }))
  );
}

/*
Fetches a film given its IMDb id from the OMDb api
 */
async function fetchFromOmdb(filmId: string) {
  return await fetch(
    `http://www.omdbapi.com/?i=${filmId}&apikey=${getOmdbAPIKey()}`
  ).then((response) => response.json());
}

/*
Finds the IMDb elements suggested for another one depending on its genres
 */
async function getSuggestions(id: string, genres: any[]) {
  const params = {
    genres: genres.map((genre) => ({ value: genre })),
    types: [],
    pageSize: 6,
    currentPage: 1,
    text: "",
  };
  const suggestions = await requestFilms(params);
  return suggestions.content.filter((film: any) => film.id !== id).slice(0, 5);
}
