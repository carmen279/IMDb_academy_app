<template>
  <div class="filmcontainer">
    <FilmCard v-for="film of getFilms" :key="film.id" :film="film" />
  </div>
  <div class="page-index">
    <button v-if="previousPage" @click="this.changePreviousPage()">
      {{ this.currentPage - 1 }}
    </button>
    <p>{{ this.currentPage }}</p>
    <button v-if="nextPage" @click="this.changeNextPage()">
      {{ this.currentPage + 1 }}
    </button>
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import { defineComponent } from "vue";
import createStore from "@/store/index";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  components: {
    FilmCard,
  },
  computed: {
    ...mapGetters(["nextPage", "previousPage", "currentPage"]),
    getFilms() {
      return createStore.state.films.results;
    },
  },
  methods: {
    ...mapActions(["callAllPokemons", "changeNextPage", "changePreviousPage"]),
  },
});
</script>

<style scoped lang="scss">
.filmcontainer {
  display: grid;
  grid-template-columns: minmax(35rem, auto) minmax(35rem, auto) minmax(
      35rem,
      auto
    );
}

@media (max-width: 1600px) {
  .filmcontainer {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 800px) {
  .filmcontainer {
    grid-template-columns: 1fr;
  }
}
</style>
