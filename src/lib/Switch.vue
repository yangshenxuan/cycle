<template>
  <button @click="toggle" :class="{ checked }">
    <span></span>
  </button>
</template>

<script lang='ts'>
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
      console.log(checked.value);
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  border-radius: $h/2;
  background: #bfbfbf;
  position: relative;
  span {
    position: absolute;
    height: $h2;
    width: $h2;
    background: white;
    top: 2px;
    left: 2px;
    border-radius: $h2/2;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>