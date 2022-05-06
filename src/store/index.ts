import { createStore } from "vuex";

export default createStore({
  state: {
    films: { next: "", previous: "", results: [] as any[] },
    currentPage: 1,
    nameFilter: "",
    genresFilter: [] as { name: string; value: string }[],
    typeFilter: [] as { name: string; value: string }[],
  },
  getters: {
    currentPage(state) {
      return state.currentPage;
    },
    nextPage(state) {
      return state.films.next;
    },
    previousPage(state) {
      return state.films.previous;
    },
    getInitialGenres(state) {
      return [
        { name: "Drama", value: "Drama" },
        { name: "Crime", value: "Crime" },
        { name: "Horror", value: "Horror" },
        { name: "Action", value: "Action" },
      ];
    },
    getInitialTypes(state) {
      return [
        { name: "TV Movie", value: "tvMovie" },
        { name: "Short", value: "short" },
        { name: "Videogame", value: "videogame" },
        { name: "Video", value: "video" },
      ];
    },
  },
  mutations: {
    set(state, elems) {
      state.films.results = elems;
    },
    setPage(state, newPage) {
      state.currentPage = newPage;
    },
    setParams(state, params) {
      state.nameFilter = params.name;
      state.genresFilter = params.genres;
      state.typeFilter = params.types;
    },
    initializeFilters(state, params) {
      state.genresFilter = params.genres;
      state.typeFilter = params.types;
    },
  },
  actions: {
    initializeFilters(context) {
      context.commit("initializeFilters", {
        genres: context.getters.getInitialGenres,
        types: context.getters.getInitialTypes,
      });
    },
    filterFilms(context, params) {
      context.commit("setParams", params);
      context.dispatch("searchFilms");
    },
    async searchFilms(context) {
      let Url = "http://localhost:8080/api/search?genre=";
      for (const genre of context.state.genresFilter) {
        Url = Url + `${genre.value},`;
      }
      Url = Url.slice(0, Url.length - 1);
      Url = Url + "&type=";
      for (const type of context.state.typeFilter) {
        Url = Url + `${type.value},`;
      }
      Url = Url.slice(0, Url.length - 1);
      if (context.state.nameFilter !== "") {
        Url = Url + `&q=${context.state.nameFilter}`;
      }

      console.log(Url);
      const data = await fetch(Url).then((response) => response.json());
      console.log(data);
      context.commit("set", data);
    },
    changePreviousPage(context) {
      return fetch(context.state.films.previous)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setPokemons", data);
        })
        .then((data) =>
          context.commit("setPage", context.state.currentPage - 1)
        )
        .catch((err) => console.log(err));
    },
    changeNextPage(context) {
      return fetch(context.state.films.next)
        .then((response) => response.json())
        .then((data) => context.commit("setPokemons", data))
        .then((data) =>
          context.commit("setPage", context.state.currentPage + 1)
        )
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
