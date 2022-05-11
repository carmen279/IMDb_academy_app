<template>
  <div class="checkbox-group">
    <input
      class="checkbox"
      type="checkbox"
      :id="value"
      :value="value"
      @click.stop="sendChange(value)"
      checked
    />
    <label :for="value"> {{ text }} </label>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["value", "text"],
  data() {
    return {
      selected: true,
    };
  },
  methods: {
    sendChange(value) {
      this.selected = !this.selected;
      this.$emit("modelChange", {
        value: value,
        selected: this.selected,
      });
    },
  },
});
</script>

<style scoped>
.checkbox-group {
  font-size: 22px;
}
.checkbox {
  size: 30px;
  border: solid white 2px;
  accent-color: #132425;
}
</style>
