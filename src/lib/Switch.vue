<template>
  <button @click="toggle" :class="{ checked }" class="">
    <slot />
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
  height: 27px;
  width: 82px;
  border: none;
  background: #bfbfbf;
  position: relative;
  box-shadow: inset 0px 1px 3px rgb(71, 71, 71);
  > span {
    position: absolute;
    top: 3px;
    left: 4px;
    height: 21px;
    width: 34px;
    background: white;
    box-shadow: 0px 1px 4px rgb(71, 71, 71);
    transition: all 250ms;
  }
  &.checked {
    background: #1890ff;
    > span {
      left: calc(100% - 36px - 2px);
    }
  }
}
</style>