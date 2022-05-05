<template>
  <head>
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
  </head>
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
  <div class="filter-container">
    <p class="filter-txt">Filter</p>
    <div class="filter-input">
      <div class="checkbox-container">
        <p>Genres:</p>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="drama"
            value="Drama"
            v-model="checkedGenres"
          />
          <label for="drama"> Drama </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="action"
            value="Action"
            v-model="checkedGenres"
          />
          <label for="action"> Action </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="crime"
            value="Crime"
            v-model="checkedGenres"
          />
          <label for="crime"> Crime </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="horror"
            value="Horror"
            v-model="checkedGenres"
          />
          <label for="horror"> Horror </label>
        </div>
      </div>
      <div class="checkbox-container">
        <p>Type:</p>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="tvMovie"
            value="tvMovie"
            v-model="checkedTypes"
          />
          <label for="tvMovie"> TV Movie </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="video"
            value="video"
            v-model="checkedTypes"
          />
          <label for="video"> Video </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="short"
            value="short"
            v-model="checkedTypes"
          />
          <label for="video"> Short film </label>
        </div>
        <div class="checkbox-group">
          <input
            class="checkbox"
            type="checkbox"
            id="videogame"
            value="videogame"
            v-model="checkedTypes"
          />
          <label for="videogame"> Videogame </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import createStore from "@/store";

export default defineComponent({
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

.filter-container {
  background: #82b9a1;
  height: 30px;
  border-radius: 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  margin: 20px;
}
.checkbox-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 10px 20px;
}

.filter-container:hover > .filter-input {
  visibility: visible;
  width: fit-content;
  height: fit-content;
  display: flex;
}

.filter-container:hover {
  height: fit-content;
}

.filter-container .filter-input {
  background: transparent;
  border: none;
  outline: none;
  visibility: hidden;
  width: 0;
  height: 0;
  font-weight: 500;
  font-size: 20px;
  color: #ffffff;
}

.filter-container .filter-txt {
  color: #1d3536;
  font-weight: bold;
  font-size: 22px;
}

.checkbox {
  size: 30px;
  border: solid white 2px;
  accent-color: #132425;
}
</style>
