<template>
  <div class="view__header">
    <h1>Welcome to Academy's IMDb!</h1>
    <IDBMSearch />
  </div>
  <FilmContainer />
  <div ref="endOfContainer"></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IDBMSearch from "@/components/IDBMSearch.vue";
import FilmContainer from "@/components/FilmContainer.vue";
import {
  createIntersectionObserver,
  removeIntersectionObserver,
} from "@/js/utils";

@Options({
  components: { FilmContainer, IDBMSearch },
  data() {
    return { observer: {} };
  },
  mounted() {
    this.observer = createIntersectionObserver(this.$refs.endOfContainer);
  },
  beforeUnmount() {
    removeIntersectionObserver(this.observer, this.$refs.endOfContainer);
  },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.view__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-top: 100px;
  font-size: 48px;
  text-shadow: 0 0 15px #1d3536, 0 0 20px #265254, 0 0 25px #1d3536;
}
</style>
