export async function requestFilms(
  genres: any[],
  types: any[],
  text: string,
  currentPage: number,
  pageSize: number
) {
  /*
  return [
    {
      id: "8SsNb4ABxNbQpLn4cdeX",
      source: {
        titleType: "tvMovie",
        primaryTitle: "Illusionen",
        originalTitle: "Illusionen",
        isAdult: true,
        startYear: 1957,
        endYear: 0,
        runtimeMinutes: 82,
        genres: ["\\N"],
        averageRating: 10.0,
        numVotes: 13,
      },
    },
    {
      id: "uCsNb4ABxNbQpLn4nO5q",
      source: {
        titleType: "tvMovie",
        primaryTitle: "Stück für Stück",
        originalTitle: "Stück für Stück",
        isAdult: true,
        startYear: 1962,
        endYear: 0,
        runtimeMinutes: 66,
        genres: ["Drama"],
        averageRating: 10.0,
        numVotes: 13,
      },
    },
    {
      id: "ASwNb4ABxNbQpLn4nAN-",
      source: {
        titleType: "tvMovie",
        primaryTitle: "Der Kaktusgarten",
        originalTitle: "Der Kaktusgarten",
        isAdult: true,
        startYear: 1967,
        endYear: 0,
        runtimeMinutes: 90,
        genres: ["\\N"],
        averageRating: 10.0,
        numVotes: 10,
      },
    },
    {
      id: "8ywNb4ABxNbQpLn4074F",
      source: {
        titleType: "short",
        primaryTitle: "Spiral Tribe",
        originalTitle: "Spiral Tribe",
        isAdult: true,
        startYear: 1994,
        endYear: 0,
        runtimeMinutes: 6,
        genres: ["Short"],
        averageRating: 10.0,
        numVotes: 7,
      },
    },
    {
      id: "LCwNb4ABxNbQpLn409EL",
      source: {
        titleType: "short",
        primaryTitle: "Desert",
        originalTitle: "Desert",
        isAdult: true,
        startYear: 1996,
        endYear: 0,
        runtimeMinutes: 0,
        genres: ["Short"],
        averageRating: 10.0,
        numVotes: 46,
      },
    },
    {
      id: "vi0Ob4ABxNbQpLn4AQ2G",
      source: {
        titleType: "tvMovie",
        primaryTitle: "Verkündigung",
        originalTitle: "Verkündigung",
        isAdult: true,
        startYear: 1963,
        endYear: 0,
        runtimeMinutes: 100,
        genres: ["\\N"],
        averageRating: 10.0,
        numVotes: 12,
      },
    },
    {
      id: "Ni0Ob4ABxNbQpLn4ASmN",
      source: {
        titleType: "tvMovie",
        primaryTitle: "Das Gold von Bayern",
        originalTitle: "Das Gold von Bayern",
        isAdult: true,
        startYear: 1967,
        endYear: 0,
        runtimeMinutes: 105,
        genres: ["Comedy"],
        averageRating: 10.0,
        numVotes: 19,
      },
    },
    {
      id: "ey0Ob4ABxNbQpLn4MHSq",
      source: {
        titleType: "movie",
        primaryTitle: "Girls Loving Girls",
        originalTitle: "Girls Loving Girls",
        isAdult: false,
        startYear: 1996,
        endYear: 0,
        runtimeMinutes: 60,
        genres: ["Adult"],
        averageRating: 10.0,
        numVotes: 14,
      },
    },
    {
      id: "tC0Ob4ABxNbQpLn4MK7h",
      source: {
        titleType: "short",
        primaryTitle: "The Touch",
        originalTitle: "The Touch",
        isAdult: true,
        startYear: 1997,
        endYear: 0,
        runtimeMinutes: 10,
        genres: ["Short"],
        averageRating: 10.0,
        numVotes: 6,
      },
    },
    {
      id: "Mi0Ob4ABxNbQpLn4b-yj",
      source: {
        titleType: "video",
        primaryTitle: "Execu-Comp #169 - Classic Super Sex",
        originalTitle: "Execu-Comp #169 - Classic Super Sex",
        isAdult: false,
        startYear: 1991,
        endYear: 0,
        runtimeMinutes: 0,
        genres: ["Adult"],
        averageRating: 10.0,
        numVotes: 6,
      },
    },
  ];


   */

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
  if (text !== "") Url = Url + `&q=${text}`;
  Url = Url + `&from=${(currentPage - 1) * pageSize}&size=${pageSize}`;
  console.log(Url);
  return await fetch(Url).then((response) => response.json());
}

export async function getInitialGenres() {
  const Url = "http://localhost:8080/api/search?agg=genres&q=";
  return (await fetch(Url).then((resolve) => resolve.json())).map(
    (elem: any) => ({ name: elem.key, value: elem.key })
  );
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

function removeCamelCase(str: string) {
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      // uppercase the first character
      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}
