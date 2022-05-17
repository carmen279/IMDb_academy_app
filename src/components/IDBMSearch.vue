<template>
  <div class="search-container">
    <input
      class="search-input"
      type="text"
      v-model="text"
      placeholder="Search for a film"
    />
    <a href="#" class="search-btn">
      <i class="fas fa-search"></i>
    </a>
  </div>
  <FilterComponent
    v-on:filterChange="searchFilms(text, $event.genres, $event.types)"
  />
</template>

<script>
import { defineComponent } from "vue";
import createStore from "@/store";
import FilterComponent from "@/components/FilterComponent";
import _ from "lodash";

export default defineComponent({
  components: { FilterComponent },
  data() {
    return {
      text: "",
      checkedGenres: [],
      checkedTypes: [],
    };
  },
  methods: {
    searchFilms(name, genres, types) {
      this.checkedGenres = genres;
      this.checkedTypes = types;
      createStore.dispatch("filterFilms", {
        name: name,
        genres: genres,
        types: types,
      });
    },
    debounceMethod: _.debounce((fn, newText, genres, types) => {
      fn(newText, genres, types);
    }, 1000),
  },
  watch: {
    text(newText) {
      this.debounceMethod(
        this.searchFilms,
        newText,
        this.checkedGenres,
        this.checkedTypes
      );
    },
  },
});
</script>

<style scoped>
.search-container {
  background: #fff;
  height: 30px;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  padding: 15px;
  font-size: 24px;
}

.search-container .search-btn .fas {
  color: #42b983;
}

::placeholder {
  color: #586464f9;
}
</style>
