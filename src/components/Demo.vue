<template>
  <div class="demoWrapper">
    <div class="demoWrapper-demo">
      <h2>{{ component.__sourceCodeTitle }}</h2>
      <div class="demoWrapper-demo-component">
        <component :is="component"></component>
      </div>
      <div class="demoWrapper-demo-actions">
        <Button @click="codeVisible = !codeVisible">查看代码</Button>
      </div>
      <div class="demoWrapper-demo-code" v-if="codeVisible">
        <pre>{{ component.__sourceCode }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import Button from "../lib/Button.vue";

export default {
  props: {
    component: Object,
  },
  components: {
    Button,
  },
  setup() {
    const width = document.documentElement.clientWidth;
    const codeVisible = ref(width > 500 ? true : false);
    return { codeVisible };
  },
};
</script>
<style lang="scss" scoped>
$border-color: #d9d9d9;
.demoWrapper {
  @media (min-width: 500px) {
    display: inline-flex;
    > .demoWrapper-demo {
      width: 400px;
      margin-right: 100px;
    }
  }
  &-demo {
    border: 1px solid $border-color;
    max-width: 400px;
    margin: 16px 0 32px;
    border-radius: 6px;

    > h2 {
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    &-component {
      padding: 16px;
      > .disabled {
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      overflow: auto;
      > pre {
        line-height: 1.3;
        font-family: Consolas, "Courier New", Courier, monospace;
        margin: 0;
      }
    }
  }
}
</style>