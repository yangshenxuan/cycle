<template>
  <div>2组件</div>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
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
