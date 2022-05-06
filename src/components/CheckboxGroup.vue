<template>
  <div class="checkbox-group">
    <input
      class="checkbox"
      type="checkbox"
      :id="value"
      :value="value"
      v-model="checkedModel"
    />
    <label :for="value"> {{ text }} </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value", "text", "model"],
  data() {
    return {
      checkedModel: this.model,
    };
  },
  methods: {
    sendChange(model) {
      this.$emit("modelChange", model);
    },
  },
  watch: {
    checkedModel(newChecked) {
      this.sendChange(newChecked);
    },
  },
});
</script>

<style scoped>
.checkbox {
  size: 30px;
  border: solid white 2px;
  accent-color: #132425;
}
</style>
