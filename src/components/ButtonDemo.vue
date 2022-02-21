<template>
  <div>2组件</div>
  <Button />
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
  setup() {},
});
</script>
