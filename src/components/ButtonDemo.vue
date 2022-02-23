<template>
  <h1>Button组件示例</h1>
  <Demo :component="NormalButtonDemo" />
  <Demo :component="DiffButtonDemo" />
  <Demo :component="LevelButtonDemo" />
  <Demo :component="DisabledButtonDemo" />
  <Demo :component="LoadingButtonDemo" />
</template>

<script lang="ts">
import Demo from "./Demo.vue";
import NormalButtonDemo from "./Button.demo/NormalButtonDemo.vue";
import DiffButtonDemo from "./Button.demo/DiffButtonDemo.vue";
import LevelButtonDemo from "./Button.demo/LevelButtonDemo.vue";
import DisabledButtonDemo from "./Button.demo/DisabledButtonDemo.vue";
import LoadingButtonDemo from "./Button.demo/LoadingButtonDemo.vue";
export default {
  components: {
    Demo,
  },
  setup() {
    return {
      NormalButtonDemo,
      DiffButtonDemo,
      LevelButtonDemo,
      DisabledButtonDemo,
      LoadingButtonDemo,
    };
  },
};
</script>
