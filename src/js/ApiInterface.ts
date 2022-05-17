import { removeCamelCase } from "@/js/utils";
import { getOmdbAPIKey } from "@/js/secretsLocker";

const baseSearchUrl = "http://localhost:8080/api/search";

//---------- MAIN INTERFACE METHODS ----------

/*
Request films from the search API meeting the criteria required in the state parameter
 */
export async function requestFilms(state: any) {
  return await fetch(`${baseSearchUrl}${getFilters(state)}`).then((response) =>
    response.json()
  );
}

async function getSuggestions(id: string, genres: any[]) {
  const params = {
    genres: genres.map((genre) => ({ value: genre })),
    types: [],
    pageSize: 6,
    currentPage: 1,
    text: "",
  };
  const suggestions = await requestFilms(params);
  console.log(id);
  return suggestions.filter((film: any) => film.id !== id).slice(0, 5);
}

/*
Request data of a film from the search API given the film's IMDb id
 */
export async function requestFilmDetails(filmId: string) {
  /*
  const filmDetail = await fetch(`${baseSearchUrl}?id=${filmId}`).then((response) => response.json());
   */
  const filmDetail: any = {
    id: "tt6372392",
    primaryTitle: "Turtle Power half shell Squad",
    titleType: "tvSeries",
    genres: ["Comedy", "Short"],
    language: "English",
    startYear: 2019,
    runtimeMinutes: 0,
    averageRating: 0.0,
    directors: ["Ryan Murphy"],
    crew: ["Meryl Streep (Pepa)", "Mario Casas (Pepe)"],

    //Para serie
    seasonnum: 5,
    episodesnum: 100,
    //Para episodio
    seasonNumber: 1,
    episodeNumber: 1,
    parentTconst: "tt9536914",
  };
  filmDetail.suggestions = await getSuggestions(
    filmDetail.id,
    filmDetail.genres
  );
  console.log(filmDetail);
  return filmDetail;
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
      .filter((elem: any) => elem.key != "\\N")
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
