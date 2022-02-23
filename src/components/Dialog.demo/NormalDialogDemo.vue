<demo>常规用法</demo>
<template>
  <Button @click="toggle">对话框</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>h1</strong>
      <div>h2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
</template>
<script>
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import { ref } from "vue";

export default {
  components: { Dialog, Button },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};

    return { x, toggle, f1, f2 };
  },
};
</script>
