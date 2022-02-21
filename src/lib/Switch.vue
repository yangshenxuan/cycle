<template>
  <button @click="toggle" :class="{ checked }">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: Boolean,
  },
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss" scoped>
button {
  height: 22px;
  width: 22px * 2;
  border: none;
  background: #bfbfbf;
  border-radius: 11px;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background: white;
    border-radius: 9px;
    transition: all 250ms;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - 18px - 2px);
    }
  }
}
</style>