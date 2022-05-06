<template>
  <div class="filter-container">
    <p class="filter-txt">Filter</p>
    <div class="filter-input">
      <div class="checkbox-container">
        <p>Genres:</p>
        <CheckboxGroup
          v-for="genre of initialGenres"
          :key="genre.value"
          :value="genre"
          :text="genre.name"
          :model="checkedGenres"
          v-on:modelChange="changeGenres($event)"
        />
      </div>
      <div class="checkbox-container">
        <p>Type:</p>
        <CheckboxGroup
          v-for="type of initialTypes"
          :key="type.value"
          :value="type"
          :text="type.name"
          :model="checkedTypes"
          v-on:modelChange="changeTypes($event)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CheckboxGroup from "@/components/CheckboxGroup";
import createStore from "@/store";

export default defineComponent({
  components: { CheckboxGroup },
  data() {
    return {
      checkedGenres: [],
      checkedTypes: [],
    };
  },
  computed: {
    initialGenres() {
      return createStore.getters.getInitialGenres;
    },
    initialTypes() {
      return createStore.getters.getInitialTypes;
    },
  },
  methods: {
    sendSearch(genres, types) {
      this.$emit("filterChange", { genres: genres, types: types });
    },
    changeGenres(newGenres) {
      this.checkedGenres = newGenres;
    },
    changeTypes(newTypes) {
      this.checkedTypes = newTypes;
    },
  },
  watch: {
    checkedGenres(newChecked) {
      this.sendSearch(newChecked, this.checkedTypes);
    },
    checkedTypes(newChecked) {
      this.sendSearch(this.checkedGenres, newChecked);
    },
  },
  beforeMount() {
    createStore.dispatch("initializeFilters");
    this.changeGenres(this.initialGenres);
    this.changeTypes(this.initialTypes);
  },
});
</script>

<style scoped>
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
