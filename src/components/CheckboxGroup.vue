<template>
  <div class="checkbox-group">
    <input
      class="checkbox"
      type="checkbox"
      :id="value.value"
      :value="value.value"
      ref="checkbox"
      @click="sendChange(value)"
    />
    <label
      class="checkbox-lbl"
      :for="value.value"
      @click.prevent="sendChange(value)"
    >
      {{ text }}
    </label>
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
      this.$refs.checkbox.checked = this.selected;
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
  margin-bottom: 25px;
}
.checkbox {
  size: 30px;
  border: solid white 2px;
  accent-color: #132425;
}

.checkbox-lbl {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(139, 139, 139, 0.3);
  color: #5f8586;
  border-radius: 25px;
  margin: 3px 3px;
  transition: all 0.2s;
  padding: 8px 12px;
}

.checkbox-lbl::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 12px;
  padding: 2px 6px 2px 2px;
  content: "\f067";
  transition: transform 0.3s ease-in-out;
}

.checkbox:checked + .checkbox-lbl::before {
  content: "\f00c";
  transform: rotate(-360deg);
  transition: transform 0.3s ease-in-out;
}

.checkbox:checked + .checkbox-lbl {
  border: 2px solid #00d376;
  background-color: #42b983;
  color: #fff;
  transition: all 0.2s;
}
.checkbox {
  position: absolute;
  opacity: 0;
}
</style>
