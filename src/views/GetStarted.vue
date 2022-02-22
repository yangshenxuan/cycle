<template>
  <article class="markdown-body" v-html="md"></article>
</template>
<script lang='ts'>
import md from "../markdown/getStarted.md";
export default {
  setup() {
    return { md };
  },
};
</script>