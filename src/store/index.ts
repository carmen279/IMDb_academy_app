import { createStore } from "vuex";

export default createStore({
  state: {
    films: { next: "", previous: "", results: [] as any[] },
    currentPage: 1,
    nameFilter: "",
    genresFilter: [],
    typeFilter: [],
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
  },
  actions: {
    async getFilmsFromAPI(context) {
      const Url = `http://localhost:8080/api/search`;
      console.log(Url);
      const data = await fetch(Url).then((response) => response.json());
      console.log(data);
      context.commit("set", data);
    },
    filterFilms(context, params) {
      context.commit("setParams", params);
      context.dispatch("searchFilms");
    },
    async searchFilms(context) {
      let Url = "http://localhost:8080/api/search?genre=";
      for (const genre of context.state.genresFilter) {
        Url = Url + `${genre},`;
      }
      Url = Url.slice(0, Url.length - 1);
      Url = Url + "&type=";
      for (const type of context.state.typeFilter) {
        Url = Url + `${type},`;
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
