import { createStore } from "vuex";

export default createStore({
  state: {
    films: { next: "", previous: "", results: [] as any[] },
    currentPage: 1,
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
  },
  actions: {
    async getFilmsFromAPI(context) {
      const Url = `http://localhost:8080/api/search`;
      console.log(Url);
      const data = await fetch(Url).then((response) => response.json());
      console.log(data);
      context.commit("set", data);
    },

    async searchFilms(context, params) {
      const filmname = params.name;
      if (filmname !== "") {
        const Url = `http://localhost:8080/api/search?q=${filmname}`;
        console.log(Url);
        const data = await fetch(Url).then((response) => response.json());
        console.log(data);
        context.commit("set", data);
      } else {
        context.dispatch("getFilmsFromAPI");
      }
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
