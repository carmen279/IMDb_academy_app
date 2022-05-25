import { createStore } from "vuex";
import {
  requestFilms,
  getInitialGenres,
  getInitialTypes,
} from "@/js/ApiInterface";

export default createStore({
  state: {
    films: [] as any[],
    textsuggestions: [] as string[],
    currentPage: 0,
    pageSize: 12,
    nameFilter: "",
    genresFilter: [] as { name: string; value: string }[],
    typeFilter: [] as { name: string; value: string }[],
    initialGenres: [] as { name: string; value: string }[],
    initialTypes: [] as { name: string; value: string }[],
  },
  getters: {
    getActualFilters(state) {
      return {
        genres: state.genresFilter,
        types: state.typeFilter,
        text: state.nameFilter,
        currentPage: state.currentPage,
        pageSize: state.pageSize,
      };
    },
  },
  mutations: {
    setFilms(state, elems) {
      state.films = elems;
    },
    setSuggestions(state, elems) {
      state.textsuggestions = elems;
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
      context.state.currentPage = 1;
      const response = await requestFilms(context.getters.getActualFilters);
      context.commit("setSuggestions", response.suggestions);
      context.commit("setFilms", response.content);
    },
    async getMoreFilms(context) {
      context.state.currentPage++;
      context.commit("setFilms", [
        ...context.state.films,
        ...(await requestFilms(context.getters.getActualFilters)).content,
      ]);
    },
    initializePageCounter(context) {
      context.state.currentPage = 0;
    },
  },
  modules: {},
});
