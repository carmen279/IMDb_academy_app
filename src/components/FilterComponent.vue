<template>
  <div class="filter-container">
    <p class="filter-txt">Filter</p>
    <div class="filter-input">
      <div class="checkbox-container">
        <p>Genres:</p>
        <div class="checkboxes">
          <CheckboxGroup
            v-for="genre of initialGenres"
            :key="genre.value"
            :value="genre"
            :text="genre.name"
            model="genres"
            v-on:modelChange="changeGenres($event)"
          />
        </div>
      </div>
      <div class="checkbox-container">
        <p>Types:</p>
        <div class="checkboxes">
          <CheckboxGroup
            v-for="type of initialTypes"
            :key="type.value"
            :value="type"
            :text="type.name"
            model="types"
            v-on:modelChange="changeTypes($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, toRaw } from "vue";
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
      return createStore.state.initialGenres;
    },
    initialTypes() {
      return createStore.state.initialTypes;
    },
  },
  methods: {
    sendSearch(genres, types) {
      this.$emit("filterChange", { genres: genres, types: types });
    },
    changeGenres(genreChange) {
      if (genreChange.selected) {
        this.checkedGenres = [...toRaw(this.checkedGenres), genreChange.value];
      } else {
        this.checkedGenres = toRaw(this.checkedGenres).filter(
          (genre) => genre.value != genreChange.value.value
        );
      }
      this.sendSearch(this.checkedGenres, this.checkedTypes);
    },
    changeTypes(typeChange) {
      if (typeChange.selected) {
        this.checkedTypes = [...toRaw(this.checkedTypes), typeChange.value];
      } else {
        this.checkedTypes = toRaw(this.checkedTypes).filter(
          (type) => type.value != typeChange.value.value
        );
      }
      this.sendSearch(this.checkedGenres, this.checkedTypes);
    },
  },
  async mounted() {
    await createStore.dispatch("initializeFilters");
    this.sendSearch(this.checkedGenres, this.checkedTypes);
  },
});
</script>

<style scoped>
p {
  font-size: 22px;
}

.filter-container {
  background: #081010;
  border: solid 2px #42b983;
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
  flex-direction: column;
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
  color: #42b983;
  font-weight: bold;
  font-size: 24px;
  padding: 50px;
}

.checkboxes {
  display: flex;
  flex-flow: row wrap;
}
</style>
