<template>
  <AppComponent />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppComponent from "@/components/AppComponent.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    AppComponent,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #ffffff;
}

html,
body {
  height: 100%;
  width: 100%;
  background-color: #1d3536;
  background-image: url("~@/assets/img.png");
}
</style>
