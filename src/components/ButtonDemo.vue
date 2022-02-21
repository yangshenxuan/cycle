<template>
  <h2>示例1</h2>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">你好</Button>
  <Button theme="text">你好</Button>
  <h2>示例2</h2>
  <Button size="big">大大</Button>
  <Button>普通</Button>
  <Button size="small">小小</Button>
  <Button theme="link" size="big">大大</Button>
  <Button theme="link">普通</Button>
  <Button theme="link" size="small">小小</Button>
  <Button theme="text" size="big">大大</Button>
  <Button theme="text">普通</Button>
  <Button theme="text" size="small">小小</Button>
  <h1>示例3</h1>
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
    <h1>示例4</h1>
    <Button disabled>禁用按钮</Button>
    <Button theme="link" disabled>禁用链接</Button>
    <Button theme="text" disabled>禁用文字</Button>
    <h1>示例5</h1>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完成</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Button },
  setup() {},
});
</script>
