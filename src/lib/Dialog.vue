<template>
  <template v-if="visible">
    <teleport to="body"
      ><div class="yui-dialog-overlay" @click="closeOnClickOverlay"></div>
      <div class="yui-dialog-wrapper">
        <div class="yui-dialog">
          <header>
            <slot name="title" />
            <span class="yui-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot name="content" />
          </main>
          <footer>
            <Button @click="cancel" class="left">Cancel</Button>
            <Button level="main" @click="ok">OK</Button>
          </footer>
        </div>
      </div></teleport
    >
  </template>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
  props: {
    visible: { type: Boolean, default: false },
    closeOnClickOverlay: { type: Boolean, default: false },
    ok: Function,
    cancel: Function,
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const closeOnClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      context.emit("cancel");
      close();
    };
    return { close, closeOnClickOverlay, ok, cancel };
  },
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.yui-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 11;
    transform: translate(-50%, -50%);
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
    > .left {
      margin-right: 10px;
    }
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>

