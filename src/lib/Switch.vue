<template>
  <button
    @click="toggle"
    :class="{ 'yui-checked': checked }"
    class="yui-switch"
  >
    <slot />
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
  },
};
</script>

<style lang="scss" >
.yui-switch {
  height: 20px;
  width: 70px;
  border: none;
  background: #bfbfbf;
  position: relative;
  box-shadow: inset 0px 3px 5px rgb(59, 59, 59);
  > span {
    position: absolute;
    top: 3px;
    left: 4px;
    height: 14px;
    width: 30px;
    background: white;
    box-shadow: 0px 1px 3px rgb(71, 71, 71);
    transition: all 250ms;
  }
  &.yui-checked {
    background: #0075a8;
    > span {
      left: calc(100% - 30px - 4px);
    }
  }
  &:focus {
    outline: none;
  }
}
</style>