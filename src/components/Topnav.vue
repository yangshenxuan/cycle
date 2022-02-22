<template>
  <div class="topnav">
    <router-link to="/" class="fm">
      <img src="https://futuremadestudio.com/img/logo5.png" alt=""
    /></router-link>

    <ul class="menu">
      <li><router-link to="/doc">文档</router-link></li>
    </ul>
    <span v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu"
      ><svg>
        <use xlink:href="#icon-menu"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>

<style lang="scss" >
img {
  max-width: 50px;
  transform: rotate(120deg);
}

.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: space-between;
  align-items: center;
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    display: inline-block;
    position: absolute;
    left: 16px;
    top: 20px;
    > svg {
      width: 30px;
      height: 30px;
    }
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .toggleAside {
      display: inline-block;
    }
    > .fm {
      margin: 0 auto;
      transform: scale(70%);
    }
  }
}
</style>