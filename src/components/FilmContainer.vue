<template>
  <div class="filmcontainer">
    <FilmCard v-for="film of getFilms" :key="film.id" :film="film" />
  </div>
  <div class="page-index">
    <button
      class="page-button"
      v-if="previousPage"
      @click="this.changePreviousPage()"
    >
      {{ this.currentPage - 1 }}
    </button>
    <p class="page-txt">{{ this.currentPage }}</p>
    <button class="page-button" v-if="nextPage" @click="this.changeNextPage()">
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
    ...mapActions(["searchFilms", "changeNextPage", "changePreviousPage"]),
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

.page-index {
  display: flex;
  justify-content: center;
}

.page-txt {
  margin: 10px;
  font-size: 20px;
  color: #42b983;
}
.page-button {
  padding: 10px;
  font-size: 20px;
  color: white;
  background-color: #1d3536;
  border: none;
}

.page-button:hover {
  background-color: #42b983;
  border-radius: 10px;
  transition: 0.8s;
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
