<template>
  <div class="filmcontainer">
    <FilmCard
      v-for="film of getFilms"
      :key="film.id"
      :film="film"
      @click="$router.push({ path: '/details', query: { id: `${film.id}` } })"
    />
  </div>
</template>

<script>
import FilmCard from "@/components/FilmCard";
import { defineComponent } from "vue";
import createStore from "@/store/index";

export default defineComponent({
  components: {
    FilmCard,
  },
  computed: {
    getFilms() {
      return createStore.state.films.results;
    },
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
