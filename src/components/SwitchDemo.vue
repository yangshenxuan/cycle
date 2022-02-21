<template>
  <div class="switchLayout">
    <Switch />
    <Switch class="onOff"
      ><div class="text">
        <div class="on">开启</div>
        <div class="off">关闭</div>
      </div>
    </Switch>
  </div>
</template>
<script lang="ts">
import Switch from "../lib/Switch.vue";
export default {
  components: { Switch },
};
</script>
<style lang="scss" scoped>
.switchLayout {
  border: 1px solid red;
  display: flex;
  justify-content: space-around;

  > .onOff {
    position: relative;
    > .text {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      color: white;
      letter-spacing: 1px;
    }
  }
}
</style>