<template>
  <div class="card">
    <div
      class="card-background"
      :style="{ backgroundImage: `url(${image})` }"
    ></div>
    <div class="film-card">
      <img class="film-image" :src="image" />
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
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { arrayToString } from "@/js/utils";
import { getImageLink } from "@/js/ApiInterface";

export default defineComponent({
  props: ["film"],
  data() {
    return {
      image: require("../assets/no-poster-available.jpeg"),
    };
  },
  methods: {
    getGenres(genres) {
      return arrayToString(genres);
    },
    async getImageLink() {
      const imgLink = await getImageLink(this.film.id);

      if (imgLink !== "") {
        this.image = imgLink;
      }
    },
  },
  mounted() {
    this.getImageLink();
  },
});
</script>

<style scoped>
.card {
  margin: 20px;
  border: 2px solid #42b983;
  border-radius: 20px;
}

.film-card,
.card-background {
  font-size: 18px;
  position: relative;
  left: 0;
}

.film-card {
  z-index: 1;
  top: -100%;
  height: 100%;
  border-radius: 20px;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.9) 80%,
    rgba(0, 0, 0, 1) 100%
  );
}

.card-background {
  filter: blur(8px);
  top: 0;
  width: 100%;
  height: 100%;
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
