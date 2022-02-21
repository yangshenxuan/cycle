<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper"></div>
  <header>标题</header>
  <main>
    <p>第一行字</p>
    <p>第二行字</p>
  </main>
  <footer>
    <Button>OK</Button>
    <Button>Cancel</Button>
  </footer>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
  setup() {},
});
</script>

