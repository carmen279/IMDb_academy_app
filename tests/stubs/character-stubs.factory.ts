function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getFilmStubs(amount = 5) {
  return Array.from({ length: amount }, () => createFilmStub(amount));
}

export function createFilmStub(amount: number) {
  const typeEnum = ["movie", "short", "video", "tvSeries"];
  const genreEnum = ["Comedy", "Action", "Horror", "Sci-fi"];
  const languageEnum = ["English", "Spanish", "German", "Japanese"];
  return {
    id: randomIntFromInterval(1, amount * 100),
    source: {
      primaryTitle: `Title ${randomIntFromInterval(1, amount * 100)}`,
      startYear: randomIntFromInterval(1990, 2022),
      titleType: typeEnum[randomIntFromInterval(0, 3)],
      genres: genreEnum[randomIntFromInterval(0, 3)],
      language: languageEnum[randomIntFromInterval(0, 3)],
      runtimeMinutes: randomIntFromInterval(1, 300),
      averageRating: randomIntFromInterval(0, 10),
      directors: ["Director 1", "Director 2"],
      crew: ["Actor 1", "Actor 2"],
      suggestions: [
        {
          id: randomIntFromInterval(1, amount * 100),
          source: {
            primaryTitle: `Title ${randomIntFromInterval(1, amount * 100)}`,
            startYear: randomIntFromInterval(1990, 2022),
            titleType: typeEnum[randomIntFromInterval(0, 3)],
            genres: genreEnum[randomIntFromInterval(0, 3)],
            language: languageEnum[randomIntFromInterval(0, 3)],
            runtimeMinutes: randomIntFromInterval(1, 300),
            averageRating: randomIntFromInterval(0, 10),
            directors: ["Director 1", "Director 2"],
            crew: ["Actor 1", "Actor 2"],
          },
        },
        {
          id: randomIntFromInterval(1, amount * 100),
          source: {
            primaryTitle: `Title ${randomIntFromInterval(1, amount * 100)}`,
            startYear: randomIntFromInterval(1990, 2022),
            titleType: typeEnum[randomIntFromInterval(0, 3)],
            genres: genreEnum[randomIntFromInterval(0, 3)],
            language: languageEnum[randomIntFromInterval(0, 3)],
            runtimeMinutes: randomIntFromInterval(1, 300),
            averageRating: randomIntFromInterval(0, 10),
            directors: ["Director 1", "Director 2"],
            crew: ["Actor 1", "Actor 2"],
          },
        },
      ],
    },
  };
}
