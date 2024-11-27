<template>
  <Header></Header>
  <div class="banner">
    <div class="banner-left">
      <div class="banner-tool animate__animated animate__fadeInRight">
        <img src="@/assets/images/home/Intelligent-Tools.png" />
      </div>
      <div class="banner-search animate__animated animate__fadeInLeft">
        <p class="banner-search-title">以图搜图</p>
        <p class="banner-search-text">使用图片进行搜索，在R355图库中查找相似款式和图案，更加针对性查找资料,快速找到想要的内容。</p>
      </div>
      <div class="banner-ai animate__animated animate__fadeInRight">
        <img src="@/assets/images/home/ai-text.png" />
        <p class="banner-ai-text">随着AI技术的不断成熟，设计将更加智能化、定制化。通过训练模型生成图像，推动设计的多元化与创新发展</p>
      </div>
      <div class="banner-light animate__animated animate__fadeInLeft">
        <img src="@/assets/images/home/banner-fire.png" />
      </div>
    </div>
    <div class="banner-right">
      <a-carousel arrows autoplay class="banner-carousel">
        <template #prevArrow>
          <img src="@/assets/images/home/carousel-arrow.png" class="arrow">
        </template>
        <template #nextArrow>
          <img src="@/assets/images/home/carousel-arrow.png" class="arrow rotate">
        </template>
        <img src="@/assets/images/example/carouse-img.png" class="img-item" />
        <img src="@/assets/images/example/carouse-img.png" class="img-item" />
        <img src="@/assets/images/example/carouse-img.png" class="img-item" />
      </a-carousel>
    </div>
  </div>
  <div class="recommend">
    <p class="recommend-title">
      <img src="@/assets/images/home/recommend-icon.png" />热门推荐
    </p>
    <div class="recommend-list">
      <li class="recommend-item" v-for="item in recommendList" :key="item.name">{{ item.name }}</li>
    </div>
  </div>
  <hot-album></hot-album>
  <Popular></Popular>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import HotAlbum from './HotAlbum.vue'
import Popular from './Popular.vue'
import { ref } from 'vue'

const recommendList = ref([
  { name: '休闲多袋裤' },
  { name: '废土风' },
  { name: 'Burberry' },
  { name: '满印夹克' },
  { name: '格子衬衫' },
  { name: '市场夹克' },
  { name: '欧货裤装' },
  { name: '棉衣/羽绒' },
  { name: 'J.Lindeberg' },
  { name: '涂鸦卫衣' },
  { name: '卡通动漫' },
  { name: '复古风格' }
])

</script>

<style lang="less" scoped>
@banner-height: 36vw;
.banner {
  height: @banner-height;
  display: flex;
  &-left {
    width: 32vw;
    height: 100%;
  }
  &-tool {
    height: 5vw;
    background: url('@/assets/images/home/banner-tool.png') center no-repeat;
    background-size: cover;
    .flex(flex-end, center);
    padding-right: 5vw;
  }
  &-light {
    height: 10vw;
    background: url('@/assets/images/home/banner-light.png') center no-repeat;
    background-size: cover;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      bottom: 0;
    }
  }
  &-search {
    height: calc((100% - 15vw) / 2);
    background: url('@/assets/images/home/banner-search.png') center no-repeat;
    background-size: cover;
    cursor: pointer;
    .flex(center, flex-start, column);
    padding-left: 3vw;
    color: #191919;
    transition: all ease-in-out.5s;
    &:hover {
      transform: scale(1.05);
    }
    &-text {
      font-size: 14px;
      width: 250px;
      line-height: 22px;
    }
    &-title {
      font-size: 26px;
      width: 250px;
      margin-bottom: 10px;
    }
  }
  &-ai {
    height: calc((100% - 15vw) / 2);
    background: url('@/assets/images/home/banner-ai.png') center no-repeat;
    background-size: cover;
    cursor: pointer;
    .flex(center, flex-start, column);
    padding-left: 3vw;
    color: #fff;
    transition: all ease-in-out .5s;
    &:hover {
      transform: scale(1.05);
    }
    &-text {
      font-size: 14px;
      width: 236px;
      line-height: 22px;
    }
    img {
      margin-bottom: 10px;
    }
  }
  &-right {
    width: calc(100% - 32vw);
    height: 100%;
  }
  &-carousel {
    position: relative;
    height: 100%;
    overflow-y: hidden;
    .arrow {
      width: 66px;
      height: 66px;
      z-index: 5;
      inset-inline-start: 2vw;
      top: calc(50% - 33px);
      &.rotate {
        transform: rotate(180deg);
        inset-inline-start: unset;
        inset-inline-end: 2vw;
      }
    }
    .img-item {
      width: 100%;
      height: @banner-height;
      object-fit: cover;
    }
  }
}
.recommend {
  margin: 38px 0;
  padding: 0 60px;
  &-title {
    font-size: 20px;
    margin-bottom: 24px;
    padding-left: 10px;
    img {
      margin-right: 5px;
      vertical-align: top;
    }
  }
  &-list {
    .flex(space-between, center);
    flex-wrap: wrap;
    column-gap: 12px;
  }
  &-item {
    width: 7.5vw;
    height: 57px;
    background: url('@/assets/images/home/recommend-bg.png') center no-repeat;
    background-size: 100% 100%;
    color: #717171;
    font-size: 16px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all ease-in-out .5s;
    &:last-child {
      margin-left: 5vw;
    }
    &:hover {
      color: #191919;
      background: url('@/assets/images/home/recommend-bg-selected.png') center no-repeat;
      background-size: 100% 100%;
    }
  }
}
</style>