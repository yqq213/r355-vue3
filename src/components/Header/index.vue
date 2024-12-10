<template>
  <div class="header">
    <img src="@/assets/images/logo.png" class="header-logo">
    <div class="header-first">
      <div class="search">
        <div class="search-icon">
          <svg-icon name="search" size="21"></svg-icon>
        </div>
        <a-input placeholder="请输入关键词" class="search-input"></a-input>
        <div class="search-camera">
          <img src="@/assets/images/header/camera-icon.png" />
        </div>
        <div class="search-btn" v-waves>全站搜</div>
      </div>
      <div class="header-first-right">
        <div class="header-first-exe"><img src="@/assets/images/header/exe-icon.png" />桌面客户端</div>
        <div class="header-first-login" v-waves>注册/登录</div>
      </div>
    </div>
    <!-- 导航菜单 -->
    <div class="navs">
      <li
        class="navs-item"
        v-for="(item, index) in MenuList"
        :key="index"
        @mouseenter="mouseEnterNav($event, item)"
        @mouseleave="navModalVisible = false"
      >
        <img :src="item.icon" v-if="item.icon" />
        <span v-if="item.name">{{ item.name }}</span>
      </li>
       <!-- 导航菜单箭头 -->
      <span
        id="navArrow"
        class="iconfont icon-a-xingzhuang12"
        :style="{color: currentNav.backgroundTop, transform: navModalVisible ? 'translate3D(0, -40%, 0)' : 'translate3D(0, 0, 0)'}"
        @mouseenter="navModalVisible = true"
        @mouseleave="navModalVisible = false"
      >
      </span>
    </div>
    <!-- 导航菜单下拉项 -->
    <div class="nav-modal-wrap">
      <div
        class="navs-modal"
        ref="navModal"
        :style="{background: currentNav.background, transform: navModalVisible ? 'translate3D(0, 0, 0)' : 'translate3D(0, -100%, 0)'}"
        :class="currentNav.class"
        
        @mouseenter="navModalVisible = true"
        @mouseleave="navModalVisible = false"
      >
        <div class="navs-modal-top" :style="{background: currentNav.backgroundTop}">
          <span class="circle" :style="{background: currentNav.backgroundTop}"></span>
        </div>
        <div class="navs-modal-content">
          <div class="navs-modal-content-left">
            <div class="category" v-for="(item, index) in currentNav.children" :key="index">
              <div class="section">
                <div class="icon-wrap">
                  <img :src="item.icon" />
                </div>
                <p class="label">{{ item.name }}</p>
              </div>
              <div class="wrap-nav">
                <li class="sub-nav" v-for="(child, index) in item.subMenu" :key="index">{{ child.name }}</li>
              </div>
              <div class="desc" v-if="item.desc">{{ item.desc }}</div>
            </div>
          </div>
          <div class="navs-modal-content-right" v-if="currentNav.category_intro">
            <div>
              <p class="intro-title">
                <svg-icon name="link" size="12" class="link"></svg-icon>栏目介绍
              </p>
              <p class="intro-text">{{ currentNav.category_intro }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MenuList from '@/utils/menu'

const currentNav = ref({})

const hoverFontColor = computed(() => currentNav.value.backgroundTop)

const navModalVisible = ref(false)

const navModal = ref<HTMLDivElement>()

// 鼠标移动到菜单
function mouseEnterNav (e, item) {  
  currentNav.value = item
  if (item.children) navModalVisible.value = true
  let navArrowDom: HTMLDivElement | null = document.querySelector('#navArrow')
  navArrowDom!.style.left = (e.target.offsetLeft + 20 * (window.innerWidth / 1920)) + 'px'
}

</script>

<style lang="less" scoped>
.header {
  height: @header-height;
  padding-top: 30px;
  position: relative;
  &-logo {
    width: 250px;
    position: absolute;
    left: 30px;
    top: 8px;
  }
  &-first {
    .flex(space-between, flex-end);
    padding-right: 60px;
    padding-left: 19vw;
    .search {
      width: 45vw;
      height: 45px;
      border-radius: 5px;
      border: 1px solid #141F43;
      .flex(flex-start, center);
      &-icon {
        width: 70px;
        height: 100%;
        .flex();
      }
      &-input {
        border: 0;
        box-shadow: unset;
        padding: 0;
      }
      &-camera {
        width: 70px;
        height: 100%;
        border-right: 1px solid #72798E;
        cursor: pointer;
        .flex();
      }
      &-btn {
        width: 80px;
        height: 100%;
        border-radius: 5px;
        background: #DBFD73;
        font-size: 14px;
        cursor: pointer;
        .flex();
      }
    }
    &-right {
      .flex();
    }
    &-exe {
      width: 120px;
      height: 37px;
      border-radius: 3px;
      border: 1px solid;
      font-size: 12px;
      cursor: pointer;
      .flex();
      border-image: radial-gradient(circle, rgba(16, 173, 211, 1), rgba(50, 125, 222, 1), rgba(78, 89, 229, 1), rgba(120, 41, 234, 1), rgba(247, 3, 251, 1)) 1 1;
      img {
        margin-right: 10px;
      }
    }
    &-login {
      .btn-circle(#0057FF, 120px);
      margin-left: 20px;
    }
  }
  .navs {
    .flex();
    line-height: 95px;
    overflow: hidden;
    position: relative;
    &-item {
      font-size: 16px;
      padding: 0 1.5vw;
      text-align: center;
      position: relative;
      font-weight: 500;
      cursor: pointer;
      &:nth-child(1) {
        margin-right: 30px;
        &::after {
          content: '';
          position: absolute;
          right: -15px;
          width: 1px;
          height: 16px;
          background: #999;
        }
      }
      &:nth-child(8) {
        margin-right: 30px;
        &::after {
          content: '';
          position: absolute;
          right: -15px;
          width: 1px;
          height: 16px;
          background: #999;
        }
      }
      .flex();
      img {
        margin-right: 10px;
      }
      span {
        flex-shrink: 0;
      }
    }
    #navArrow {
      font-size: 60px;
      position: absolute;
      top: 100%;
      transition: all ease .3s;
      z-index: 9;
    }
  }
  .nav-modal-wrap {
    width: 90%;
    height: 600px;
    position: absolute;
    top: 100%;
    left: 5%;
    overflow: hidden;
  }
  .navs-modal {
    border-radius: 36px;
    z-index: 999;
    position: relative;
    transform: translate3d(0, -100%, 0);
    transition: all ease .3s;
    &-top {
      height: 47px;
      border-radius: 36px 36px 0 0;
      position: relative;
      .circle {
        position: absolute;
        width: 100px;
        height: 40px;
        border-radius: 50%;
        bottom: -12px;
        right: 10vw;
      }
    }
    &-content {
      padding: 60px 0;
      display: flex;
      align-items: flex-end;
      &-left {
        flex: 1;
        padding: 0 6vw;
        .flex(space-evenly, flex-end);
        .category {
          .flex(center, center, column);
          cursor: pointer;
          .section {
            .flex(center, center, column);
            .icon-wrap {
              width: 50px;
              height: 50px;
              .flex();
            }
          }
          .label {
            font-size: 28px;
            color: #fff;
            font-weight: 500;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          .wrap-nav {
            .flex(flex-start, flex-start);
            flex-direction: column;
          }
          .sub-nav {
            font-size: 16px;
            color: #fff;
            line-height: 40px;
            cursor: pointer;
            &:hover {
              color: v-bind(hoverFontColor);
            }
          }
          .desc {
            font-family: SimSun;
            font-size: 12px;
            color: #E6E6E6;
            line-height: 23px;
            width: 230px;
            height: 60px;
            margin-top: 25px;
          }
        }
      }
      &-right {
        width: 20vw;
        height: 100%;
        .flex(flex-start, flex-end);
        .intro-title {
          font-size: 16px;
          color: #fff;
          margin-bottom: 10px;
          .link {
            margin-right: 5px;
            vertical-align: baseline;
          }
        }
        .intro-text {
          font-size: 12px;
          color: #E6E6E6;
          line-height: 23px;
          width: 223px;
          font-family: SimSun;
        }
      }
    }
  }
  // 品牌图库自定义样式
  .brand {
    .navs-modal-content-left {
      justify-content: space-around;
      align-items: flex-start;
    }
    .navs-modal-content-right {
      width: 15vw;
    }
    .wrap-nav {
      height: 300px;
      flex-wrap: wrap;
      .sub-nav {
        padding: 0 10px;
      }
    }
  }
  // 市场款式自定义样式
  .market {
    .category {
      flex-direction: row;
      .section {
        margin-right: 5vw;
      }
      .wrap-nav {
        height: 250px;
        flex-wrap: wrap;
        justify-content: center;
        .sub-nav {
          padding: 0 50px;
          &:nth-child(13) {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .header {
    .navs-modal-content-left .category .label {
      font-size: 20px;
    }
    .brand .navs-modal-content-right {
      width: 18vw;
    }
    &-logo {
      width: 210px;
      top: 22px;
    }
  }

}
</style>