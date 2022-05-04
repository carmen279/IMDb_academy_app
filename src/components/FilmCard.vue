<template>
  <head>
    <link
      href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
      rel="stylesheet"
    />
  </head>
  <div class="film-card">
    <img class="film-image" src="../assets/provisionalposter.png" />
    <div class="film-attributes">
      <p class="film-attribute film-attribute--title">
        {{ film.source.primaryTitle }}
      </p>
      <p class="film-attribute">
        {{ film.source.runtimeMinutes }} min |
        {{ getGenres(film.source.genres) }}
      </p>
      <p class="film-attribute">
        <i class="fas fa-star"></i>
        {{ film.source.averageRating }}
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["film"],
  methods: {
    getGenres(genres) {
      let genrestr = "";
      for (let genre of genres) {
        if (genre !== "\\N") {
          genrestr = genrestr + genre + ", ";
        } else {
          genrestr = genrestr + "Unknown" + ", ";
        }
      }
      genrestr = genrestr.slice(0, genrestr.length - 2);
      return genrestr;
    },
  },
});
</script>

<style scoped>
.film-card {
  margin: 20px;
  border: 2px solid #42b983;
  border-radius: 20px;
  font-size: 18px;
}

.film-image {
  max-width: 500px;
  margin-top: 30px;
}

.film-attribute--title {
  font-size: 28px;
  font-weight: bold;
}

.fa-star {
  color: #42b983;
}
</style>
