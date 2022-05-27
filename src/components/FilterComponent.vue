<template>
  <div class="filter-container">
    <p class="filter-txt">Filter</p>
    <div class="filter-input">
      <div class="checkbox-container">
        <p>Minimum rating:</p>
        <div class="num-block skin-2">
          <div ref="spinnerContainer" class="num-in">
            <span class="minus" @click="spinnerMinusClick"></span>
            <input
              ref="spinnerInput"
              type="number"
              class="in-num"
              v-model="minRating"
            />
            <span class="plus" @click="spinnerPlusClick"></span>
          </div>
        </div>
      </div>
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
      minRating: 1,
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
  watch: {
    minRating() {
      if (this.minRating > 10) this.minRating = 10;
      else if (this.minRating < 0) this.minRating = 0;
      else
        this.sendSearch(this.checkedGenres, this.checkedTypes, this.minRating);
    },
  },
  methods: {
    spinnerPlusClick() {
      if (this.minRating < 10) this.minRating++;
    },
    spinnerMinusClick() {
      if (this.minRating > 0) this.minRating--;
    },
    sendSearch(genres, types, minRating) {
      this.$emit("filterChange", {
        genres: genres,
        types: types,
        minRating: minRating,
      });
    },
    changeGenres(genreChange) {
      if (genreChange.selected) {
        this.checkedGenres = [...toRaw(this.checkedGenres), genreChange.value];
      } else {
        this.checkedGenres = toRaw(this.checkedGenres).filter(
          (genre) => genre.value != genreChange.value.value
        );
      }
      this.sendSearch(this.checkedGenres, this.checkedTypes, this.minRating);
    },
    changeTypes(typeChange) {
      if (typeChange.selected) {
        this.checkedTypes = [...toRaw(this.checkedTypes), typeChange.value];
      } else {
        this.checkedTypes = toRaw(this.checkedTypes).filter(
          (type) => type.value != typeChange.value.value
        );
      }
      this.sendSearch(this.checkedGenres, this.checkedTypes, this.minRating);
    },
  },
  async mounted() {
    await createStore.dispatch("initializeFilters");
    this.sendSearch(this.checkedGenres, this.checkedTypes, this.minRating);
  },
});
</script>

<style scoped>
p {
  font-size: 22px;
}

.checked {
  color: #42b983;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
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
  margin-top: 0px;
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

.num-in {
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 25px;
  height: 45px;
  width: 110px;
  float: left;
}

span {
  width: 40%;
  display: block;
  height: 40px;
  float: left;
  position: relative;
}

span:before,
span:after {
  content: "";
  position: absolute;
  background-color: #00d376;
  height: 2px;
  width: 10px;
  margin-top: -1px;
  margin-left: -5px;
}
span.minus:before,
span.minus:after {
  top: 55%;
  left: 50%;
}

span.plus:before,
span.plus:after {
  top: -50%;
  left: 200%;
}

span.plus:after {
  transform: rotate(90deg);
}

.num-in input {
  float: left;
  width: 20%;
  height: 40px;
  border: none;
  text-align: center;
}
</style>
