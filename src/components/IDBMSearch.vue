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

export default defineComponent({
  components: { FilterComponent },
  data() {
    return {
      text: "",
      checkedGenres: ["Drama", "Crime", "Horror", "Action"],
      checkedTypes: ["tvMovie", "short", "videogame", "video"],
    };
  },
  methods: {
    searchFilms(name, genres, types) {
      createStore.dispatch("filterFilms", {
        name: name,
        genres: genres,
        types: types,
      });
    },
  },
  watch: {
    text(newText) {
      this.searchFilms(newText, this.checkedGenres, this.checkedTypes);
    },
    checkedGenres(newChecked) {
      this.searchFilms(this.text, newChecked, this.checkedTypes);
    },
    checkedTypes(newChecked) {
      this.searchFilms(this.text, this.checkedGenres, newChecked);
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
