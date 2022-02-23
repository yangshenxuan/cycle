<demo>使用TypeScript打开Dialog</demo>
<template>
  <Button @click="showDialog">显示2</Button>
</template>

<script>
import Button from "../../lib/Button.vue";
import Dialog from "../../lib/Dialog.vue";
import { openDialog } from "../../lib/openDialog";

export default {
  components: { Button, Dialog },
  setup() {
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
      });
    };
    return { showDialog };
  },
};
</script>
