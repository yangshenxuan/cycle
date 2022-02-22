<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Y-UI</h1>
        <h2>属于YOUNG的UI框架</h2>
        <p class="actions">
          <router-link to="/doc" class="start">开始</router-link>
          <a href="https://github.com/yangshenxuan" class="github">
            <svg>
              <use xlink:href="#icon-github"></use></svg
          ></a>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于Vue3</h3>
          <p>骄傲地使用了Vue Composition Api</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-scss"></use>
          </svg>
          <h3>基于Sass</h3>
          <p>样式布局使用Sass</p>
        </li>
      </ul>
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
  clip-path: ellipse(70% 60% at 50% 40%);
}
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 100px 0;
  color: #1e1f1c;
  > h1 {
    margin-bottom: 20px;
  }
  > h1,
  h2 {
    letter-spacing: 1px;
  }
  > .actions {
    padding: 30px 0 0 0;
    display: flex;
    .github {
      margin: 0 8px;
      background: #bdbdbd;
      display: inline-block;
      padding: 0 10px;
      border-radius: 20px;
      > svg {
        margin-top: 3px;
        width: 24px;
        height: 24px;
      }
    }
    .start {
      margin: 0 8px 0 80px;
      color: #2f2822;
      border: 1px solid #2f2822;
      display: inline-block;
      padding: 4px 25px;
      border-radius: 20px;
    }
  }
}
.features {
  margin: 64px auto;
  width: 400px;
  @media (min-width: 800px) {
    width: 800px;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      padding-left: 30px;
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 58px;
        height: 58px;
      }
      > h3 {
        grid-area: title;
        font-size: 25px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
</style>