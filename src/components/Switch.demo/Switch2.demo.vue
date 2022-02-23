<demo>支持disabled</demo>

<template>
  <Switch disabled class="disabled" />
</template>

<script lang="ts">
import Switch from "../../lib/Switch.vue";
export default {
  components: { Switch },
};
</script>
<style lang="scss">
.disabled {
  &:hover {
    cursor: not-allowed;
  }
}
</style>