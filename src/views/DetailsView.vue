<template>
  <div class="details">
    <DetailsContainer :filmId="this.$route.query.id" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IDBMSearch from "@/components/IDBMSearch.vue";
import FilmContainer from "@/components/FilmContainer.vue";
import DetailsContainer from "@/components/DetailsContainer.vue";

@Options({
  components: { DetailsContainer },
  mounted() {
    window.scrollTo(0, 0);
  },
})
export default class HomeView extends Vue {}
</script>
<style scoped lang="scss">
h1 {
  margin-top: 100px;
  font-size: 48px;
  text-shadow: 0 0 15px #1d3536, 0 0 20px #265254, 0 0 25px #1d3536;
}
.details {
  margin-top: 80px;
}
</style>
