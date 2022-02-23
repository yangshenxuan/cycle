<template>
  <div class="text-switch-layout">
    <div class="switch-wrapper">
      <Switch class="onOff">
        <div class="text">
          <div>开</div>
          <div>关</div>
        </div>
      </Switch>
      <Switch class="onOff">
        <div class="text">
          <div>1</div>
          <div>0</div>
        </div>
      </Switch>
      <Switch class="onOff">
        <div class="text">
          <div>√</div>
          <div>×</div>
        </div>
      </Switch>
    </div>
  </div>
</template>

<script lang='ts'>
import Switch from "./Switch.vue";
export default {
  components: {
    Switch,
  },
};
</script>

<style lang="scss">
.text-switch-layout {
  border: 1px solid #f0f0f07e;
  display: flex;
  flex-direction: column;
  max-width: 250px;
  border-radius: 6px;
  > .switch-wrapper {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0f0f07e;
    > .onOff {
      margin: 5px 0px;
      > .text {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        color: white;
        letter-spacing: 1px;
        font-size: 10px;
      }
    }
  }
}
</style>