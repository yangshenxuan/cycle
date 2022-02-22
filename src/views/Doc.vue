<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/getStarted">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const cancelAside = () => {
      menuVisible.value = false;
    };
    return { menuVisible, cancelAside };
  },
};
</script>
<style lang="scss" >
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: linear-gradient(
    135deg,
    rgba(186, 204, 220, 1) 0%,
    rgba(210, 218, 227, 1) 20%,
    rgba(241, 239, 240, 1) 42%,
    rgba(251, 248, 242, 1) 70%,
    rgba(253, 246, 233, 1) 100%
  );
  width: 150px;
  padding: 16px 0;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  height: 100%;
  padding-top: 70px;
  box-shadow: 2px 1px 3px rgb(185, 185, 185);
  font-weight: 300;
  > h2 {
    margin-bottom: 4px;
    padding: 0 4px;
    font-size: 20px;
    margin-top: 7px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 13px;
      }
      .router-link-active {
        background: white;
      }
    }
  }
  @media (max-width: 500px) {
    top: 0;
    left: 0;
    position: fixed;
    padding-top: 70px;
  }
}
main {
  overflow: auto;
}
</style>