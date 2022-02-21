<template>
  <div>2组件</div>
  <Button @click="onClick">你好</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
  setup() {
    const onClick = () => {
      console.log(123);
    };
    return { onClick };
  },
});
</script>
