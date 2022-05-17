<template>
  <div class="filmcontainer">
    <div class="film-info">
      <img class="film-image" :src="image" />
      <div class="film-attributes">
        <h1>{{ film.primaryTitle }} ({{ film.startYear }})</h1>
        <div class="type-info">
          <p class="film-attribute film-attribute--title">
            {{ cleanCamelCase(film.titleType) }}
          </p>
          <p
            class="conditional-info"
            v-if="
              film.titleType === 'tvSeries' || film.titleType === 'tvMiniSeries'
            "
          >
            - {{ film.seasonnum }} seasons - {{ film.episodesnum }} episodes
          </p>
          <p
            class="conditional-info"
            v-if="
              film.titleType === 'tvEpisode' || film.titleType === 'tvSpecial'
            "
          >
            - Season {{ film.seasonNumber }} - Episode {{ film.episodeNumber }})
          </p>
        </div>
        <div class="parallel-attributes">
          <p class="film-attribute">
            {{ toString(film.genres) }}
          </p>
          <p class="film-attribute">{{ toString(film.language) }}</p>
        </div>
        <div class="parallel-attributes">
          <p class="film-attribute">{{ film.runtimeMinutes }} min</p>
          <p class="film-attribute">
            <i class="fas fa-star"></i>
            {{ film.averageRating }}
          </p>
        </div>
      </div>
    </div>
    <div class="film-details">
      <p class="film-attribute film-plot">{{ plot }}</p>
      <p class="film-attribute film-crew">
        <span class="film-attribute--title">Directed by: </span
        >{{ toString(film.directors) }}
      </p>
      <p class="film-attribute film-crew">
        <span class="film-attribute--title">Cast: </span
        >{{ toString(film.crew) }}
      </p>
    </div>
    <div class="film-suggestions">
      <h1 class="suggestions-title">You may also like...</h1>
      <div class="suggestion-container">
        <FilmCard
          v-for="suggestion of film.suggestions"
          :key="suggestion.id"
          :film="suggestion"
          @click="navigateToFilm(`${suggestion.id}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { getImageAndPlot, requestFilmDetails } from "@/js/ApiInterface";
import { arrayToString, removeCamelCase } from "@/js/utils";
import FilmCard from "@/components/FilmCard";

export default defineComponent({
  props: ["filmId"],
  components: {
    FilmCard,
  },
  data() {
    return {
      film: {},
      image: require("../assets/no-poster-available.jpeg"),
      plot: "No description available",
    };
  },
  methods: {
    toString(array) {
      return arrayToString(array);
    },
    cleanCamelCase(str) {
      return removeCamelCase(str);
    },
    async getImageAndPlot() {
      const img_plot = await getImageAndPlot(this.filmId);
      this.image = img_plot.poster !== "" ? img_plot.poster : this.image;
      this.plot = img_plot.plot !== "" ? img_plot.plot : this.plot;
    },
    async getFilmDetails() {
      this.film = await requestFilmDetails(this.filmId);
    },
    navigateToFilm(filmId) {
      window.scrollTo(0, 0);
      this.$router.push({
        path: "/details",
        query: { id: filmId },
      });
    },
  },
  mounted() {
    this.getFilmDetails();
    this.getImageAndPlot();
  },
});
</script>

<style scoped lang="scss">
.filmcontainer {
  margin: 20px;
  border: 2px solid #42b983;
  border-radius: 20px;
  backdrop-filter: blur(6px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 5%,
    rgba(0, 0, 0, 0.2) 10%,
    rgba(0, 0, 0, 0.7) 20%,
    rgba(0, 0, 0, 0.9) 70%,
    rgba(0, 0, 0, 1) 100%
  );
}
.film-info {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px;
}
.film-attributes {
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 24px;
  width: 100%;
}
.parallel-attributes {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.type-info {
  display: flex;
  font-size: 30px;
  font-weight: bold;
}
.conditional-info {
  padding-left: 5px;
}
.fa-star {
  color: #42b983;
}
.film-details {
  margin-left: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 24px;
}
.film-plot {
  text-align: left;
}
.film-crew {
  color: #82b9a1;
}

.film-attribute--title {
  font-weight: bold;
  font-style: italic;
  padding-right: 20px;
}
.suggestion-container {
  display: flex;
  flex-flow: row wrap;
}
.film-suggestions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px;
}
.suggestions-title {
  margin-left: 50px;
  font-size: 36px;
}
</style>
