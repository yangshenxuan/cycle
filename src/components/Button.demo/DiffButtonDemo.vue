<demo>支持不同类型
</demo>

<template>
  <div>
    <Button size="big">大大</Button>
    <Button>普通</Button>
    <Button size="small">小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大</Button>
    <Button theme="link">普通</Button>
    <Button theme="link" size="small">小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大</Button>
    <Button theme="text">普通</Button>
    <Button theme="text" size="small">小小</Button>
  </div>
</template>
<script>
import Button from "../../lib/Button.vue";
export default {
  components: { Button },
};
</script>