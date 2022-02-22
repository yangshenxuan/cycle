<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Y-UI</h1>
        <h2>属于YOUNG的UI框架</h2>
        <p class="actions">
          <a href="https://github.com/yangshenxuan">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <svg class="icon">
        <use xlink:href="#icon-Vue"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-ts"></use>
      </svg>
      <svg class="icon">
        <use xlink:href="#icon-scss"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" >
.topnavAndBanner {
  background: linear-gradient(
    135deg,
    rgba(186, 204, 220, 1) 0%,
    rgba(210, 218, 227, 1) 20%,
    rgba(241, 239, 240, 1) 42%,
    rgba(251, 248, 242, 1) 70%,
    rgba(253, 246, 233, 1) 100%
  );
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  color: #1e1f1c;
  > h1 {
    margin-bottom: 10px;
  }
  > h1,
  h2 {
    letter-spacing: 1px;
  }
  > .actions {
    padding: 10px 0;
    a {
      margin: 0 8px;
      color: #cccecf;
      background: #2f2822;
      display: inline-block;
      padding: 8px 24px;
      border-radius: 4px;
    }
  }
}
</style>