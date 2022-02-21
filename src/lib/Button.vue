<template>
  <button class="yui-button" :class="classes">
    <span v-if="loading" class="yui-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "normal",
    },
    level: {
      type: String,
      default: "normal",
    },
    disable: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size, level, disable, loading } = props;
    const classes = computed(() => {
      return {
        [`yui-theme-${theme}`]: theme,
        [`yui-size-${size}`]: size,
        [`yui-level-${level}`]: level,
        [`yui-level-${disable}`]: disable,
        [`yui-level-${loading}`]: loading,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss" >
$blue: #0075a8;
$red: red;
.yui-button {
  box-sizing: border-box;
  width: 70px;
  height: 27px;
  border: 1px solid white;
  background: #626262;
  color: black;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  &:hover,
  &:focus {
    color: darken(white, 2%);
    border: 1.25px solid $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.yui-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    background: transparent;
    &:hover,
    &:focus {
      color: lighten($blue, 30%);
    }
  }
  &.yui-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    background: transparent;
    &:hover,
    &:focus {
      background: #dadada49;
      border-radius: 10px;
    }
  }
  &.yui-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.yui-size-small {
    font-size: 10px;
    height: 20px;
    padding: 0 4px;
  }
  &.yui-theme-button {
    &.yui-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.yui-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.yui-theme-link {
    &.yui-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: light($blue, 50%);
      }
    }
    &.yui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.yui-theme-text {
    &.yui-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: light($blue, 50%);
      }
    }
    &.yui-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.yui-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: gray;
      &:hover {
        border-color: #626262;
      }
    }
  }
  &.yui-theme-link,
  &.yui-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: gray;
    }
  }
  > .yui-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: yui-spin 1s infinite linear;
  }
}
@keyframes yui-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

