<template>
  <div class="sub-menu">
    <li class="menu-item" v-for="(item, index) in list" :key="index" :class="{'active': $route.path == item.link}" @click="$router.push(item.link)">
      <div class="menu-inner">
        <img :src="item.subIcon" />
        <div class="menu-item-right">
          <p class="title">
            <span>{{ item.name }}</span>
            <span class="iconfont icon-arrow"></span>
          </p>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getSubMenu } from '@/utils/menu'

const list = ref(getSubMenu())

</script>

<style lang="less" scoped>
.sub-menu {
  height: 120px;
  .flex(flex-start);
  .menu-item {
    width: 176px;
    height: 65px;
    border-radius: 9px;
    border: 1px solid #B2B2B2;
    margin-right: 27px;
    color: #000;
    cursor: pointer;
    img {
      margin-right: 10px;
    }
    .title {
      font-size: 18px;
      .iconfont {
        margin-left: 5px;
        font-size: 14px;
      }
    }
    .desc {
      color: #A6A6A6;
      font-size: 14px;
      margin-top: 3px;
    }
  }
  .menu-inner {
    .flex();
    height: 100%;
    background: #fff;
    border-radius: 7px;
  }
  .active {
    border-radius: 9px;
    background: linear-gradient(to right, #10ADD3, #EF05FA);
    padding: 2px;
    border: 0;
  }
}
</style>