<template>
  <h1>Dialog组件示例</h1>
  <Demo :component="NormalDialogDemo" />
  <Demo :component="TsDialogDemo" />
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import NormalDialogDemo from "./Dialog.demo/NormalDialogDemo.vue";
import TsDialogDemo from "./Dialog.demo/TsDialogDemo.vue";

export default {
  components: { Demo },
  setup() {
    return { NormalDialogDemo, TsDialogDemo };
  },
};
</script>