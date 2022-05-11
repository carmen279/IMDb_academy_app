<template>
  <div class="insights">
    <h1>This is the details page for film {{ this.$route.query.id }}</h1>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import IDBMSearch from "@/components/IDBMSearch.vue";
import FilmContainer from "@/components/FilmContainer.vue";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>
<style scoped lang="scss">
h1 {
  font-size: 48px;
  text-shadow: 0 0 15px #1d3536, 0 0 20px #265254, 0 0 25px #1d3536;
}
</style>
