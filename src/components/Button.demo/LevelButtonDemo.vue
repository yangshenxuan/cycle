<demo>支持Level
</demo>

<template>
  <div>
    <div>
      <Button level="main">主要</Button>
      <Button>普通</Button>
      <Button level="danger">危险</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要文字</Button>
      <Button theme="link">普通文字</Button>
      <Button theme="link" level="danger">危险文字</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要链接</Button>
      <Button theme="text">普通链接</Button>
      <Button theme="text" level="danger">危险链接</Button>
    </div>
  </div>
</template>
<script>
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
};
</script>
