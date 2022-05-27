<template>
  <div
    class="search-container"
    tabIndex="0"
    @focus="inputFocus = true"
    @blur="inputFocus = false"
  >
    <div class="searchinput-container">
      <input
        class="search-input"
        type="text"
        v-model="text"
        placeholder="Search for a film"
        @focus="inputFocus = true"
        @blur="inputFocus = false"
      />
      <a href="#" class="search-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <ul class="suggestions-container">
      <il
        class="suggestion-element"
        v-for="suggestion of getSearchSuggestions"
        :key="suggestion"
        @click="this.text = suggestion"
      >
        {{ suggestion }}
      </il>
    </ul>
  </div>
  <FilterComponent
    v-on:filterChange="
      searchFilms(text, $event.genres, $event.types, $event.minRating)
    "
  />
</template>

<script>
import { defineComponent } from "vue";
import createStore from "@/store";
import FilterComponent from "@/components/FilterComponent";
import debounce from "lodash/debounce";

export default defineComponent({
  components: { FilterComponent },
  data() {
    return {
      text: "",
      checkedGenres: [],
      checkedTypes: [],
      inputFocus: false,
    };
  },
  computed: {
    getSearchSuggestions() {
      return this.inputFocus ? createStore.state.textsuggestions : [];
    },
  },
  methods: {
    searchFilms(name, genres, types, minRating) {
      this.checkedGenres = genres;
      this.checkedTypes = types;
      createStore.dispatch("filterFilms", {
        name: name,
        genres: genres,
        types: types,
        minRating: minRating,
      });
    },
    debounceMethod: debounce((fn, newText, genres, types) => {
      fn(newText, genres, types);
    }, 1000),
  },
  watch: {
    text(newText) {
      this.debounceMethod(
        this.searchFilms,
        newText,
        this.checkedGenres,
        this.checkedTypes,
        this.minRating
      );
    },
  },
});
</script>

<style scoped>
.search-container {
  background: #fff;
  border-radius: 30px;
  padding-right: 50px;
  margin-bottom: 50px;
}

.searchinput-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  padding: 10px 20px;
  width: 400px;
}

.search-input {
  background: transparent;
  border: none;
  outline: none;
  padding: 30px;
  font-size: 24px;
}

.suggestions-container {
  color: #081010;
  display: flex;
  flex-direction: column;
  margin: 0;
}

.suggestion-element {
  padding: 10px;
  border-top: solid 1px #82b9a1;
  font-size: 20px;
  text-align: left;
  color: grey;
}

.suggestion-element:hover {
  color: #00d376;
  font-weight: bold;
}

.search-container .search-btn .fas {
  color: #42b983;
}

::placeholder {
  color: #586464f9;
}
</style>
