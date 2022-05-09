import { createStore } from "vuex";
import {
  requestFilms,
  getInitialGenres,
  getInitialTypes,
} from "@/js/ApiInterface";

export default createStore({
  state: {
    films: { next: 2, previous: 0, results: [] as any[] },
    currentPage: 1,
    pageSize: 12,
    nameFilter: "",
    genresFilter: [] as { name: string; value: string }[],
    typeFilter: [] as { name: string; value: string }[],
    initialGenres: [] as { name: string; value: string }[],
    initialTypes: [] as { name: string; value: string }[],
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
    initializeFilters(state, params) {
      state.initialGenres = params.genres;
      state.initialTypes = params.types;
      state.genresFilter = params.genres;
      state.typeFilter = params.types;
    },
  },
  actions: {
    async initializeFilters(context) {
      context.commit("initializeFilters", {
        genres: await getInitialGenres(),
        types: await getInitialTypes(),
      });
    },
    filterFilms(context, params) {
      context.commit("setParams", params);
      context.dispatch("searchFilms");
    },
    async searchFilms(context) {
      console.log(context.state.initialGenres);

      context.commit(
        "set",
        await requestFilms(
          context.state.genresFilter,
          context.state.typeFilter,
          context.state.nameFilter,
          context.state.currentPage,
          context.state.pageSize
        )
      );
    },
    changePreviousPage(context) {
      context.state.films.previous++;
    },
    changeNextPage(context) {
      context.state.films.next++;
    },
  },
  modules: {},
});
