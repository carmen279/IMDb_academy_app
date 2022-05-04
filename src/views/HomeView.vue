<template>
  <div class="view__header">
    <h1>Welcome to Academy's IMDB!</h1>
    <IDBMSearch />
  </div>
  <FilmContainer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IDBMSearch from "@/components/IDBMSearch.vue";
import FilmContainer from "@/components/FilmContainer.vue";

@Options({
  components: { FilmContainer, IDBMSearch },
})
export default class HomeView extends Vue {}
</script>

<style scoped lang="scss">
.view__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
