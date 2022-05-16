import { removeCamelCase } from "@/js/utils";

export async function requestFilms(
  genres: any[],
  types: any[],
  text: string,
  currentPage: number,
  pageSize: number
) {
  let Url = "http://localhost:8080/api/search?genre=";

  for (const genre of genres) {
    Url = Url + `${genre.value},`;
  }
  Url = Url.slice(0, Url.length - 1);
  Url = Url + "&type=";
  for (const type of types) {
    Url = Url + `${type.value},`;
  }
  Url = Url.slice(0, Url.length - 1);
  Url = Url + `&q=${text}`;
  Url = Url + `&from=${(currentPage - 1) * pageSize}&size=${pageSize}`;
  console.log(Url);
  return await fetch(Url).then((response) => response.json());
}

export async function requestFilmDetails(filmId: string) {
  /*
  const Url = `http://localhost:8080/api/search?id=${filmId}`;
  console.log(Url);
  return await fetch(Url).then((response) => response.json());
   */
  const mock = {
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
  return mock;
}

export async function getInitialGenres() {
  const Url = "http://localhost:8080/api/search?agg=genres&from=0&size=20&q=";
  return (await fetch(Url).then((resolve) => resolve.json()))
    .filter((elem: any) => elem.key != "\\N")
    .map((elem: any) => ({ name: elem.key, value: elem.key }));
}

export async function getInitialTypes() {
  const Url = "http://localhost:8080/api/search?agg=titleType&q=";
  return (await fetch(Url).then((resolve) => resolve.json())).map(
    (elem: any) => ({
      name: removeCamelCase(elem.key),
      value: elem.key,
    })
  );
}

export async function getImageLink(filmId: string) {
  const data = await fetch(
    `http://www.omdbapi.com/?i=${filmId}&apikey=ec48547c`
  ).then((response) => response.json());

  if (data.Poster !== "N/A" && data.Poster !== undefined) {
    return data.Poster;
  }

  return "";
}

export async function getImageAndPlot(filmId: string) {
  console.log(`http://www.omdbapi.com/?i=${filmId}&apikey=ec48547c`);

  const data = await fetch(
    `http://www.omdbapi.com/?i=${filmId}&apikey=ec48547c`
  ).then((response) => response.json());

  console.log(data);
  return { poster: data.Poster, plot: data.Plot };
}
