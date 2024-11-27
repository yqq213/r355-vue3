<template>
  <div class="popular">
    <img src="@/assets/images/home/popular-title.png" class="popular-title">
    <p class="popular-text">随着男装设计的多元化发展，图案设计成为表达个性与风格的重要元素。根据图案的视觉效果及应用场景将其分类。</p>
    <div class="popular-category">
      <img src="@/assets/images/home/popular-btn1.png" />
      <img src="@/assets/images/home/popular-btn2.png" />
      <img src="@/assets/images/home/popular-btn3.png" />
    </div>
    <div class="popular-btns">
      <div class="popular-btns-line"></div>
      <li class="popular-btns-item" v-for="item in btnList" :key="item" v-waves>{{ item }}</li>
    </div>
    <div class="popular-wall">
      <li class="popular-wall-item" v-for="(item, index) in imgList" :key="index">
        <a-image :src="item" width="100%" height="100%" :fallback="fallback" :preview="false" class="img"></a-image>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import img1 from '@/assets/images/example/popular-img1.png'
import img2 from '@/assets/images/example/popular-img2.png'
import img3 from '@/assets/images/example/popular-img3.png'
import fallback from '@/assets/images/fallback.png'

const btnList = ref(['动物图案', '几何元素', '生活元素', '字母文字', '运动风格', '卡通动漫', '植物花卉', '交通工具', '人物图案', '贴章图标'])

const imgList = ref([img1, img2, img3, img1, img2, img3, img1, img2, img3, img1, img2, img3])

</script>

<style lang="less" scoped>
.popular {
  background: #DBFD73;
  padding: 76px 60px 100px 60px;
  &-title {
    display: block;
    margin: 0 auto;
  }
  &-text {
    font-size: 18px;
    line-height: 30px;
    width: 590px;
    margin: 0 auto;
    text-align: center;
    color: #2D3E50;
    padding: 30px 0 48px 0;
  }
  &-category {
    margin-bottom: 50px;
    cursor: pointer;
    .flex();
    img {
      margin: 0 20px;
    }
  }
  &-btns {
    .flex(flex-start, center);
    position: relative;
    margin-bottom: 40px;
    &-item {
      border-radius: 5px;
      border: 1px solid #747474;
      width: 100px;
      height: 40px;
      font-size: 16px;
      color: #2D3E50;
      cursor: pointer;
      .flex();
      margin-right: 25px;
      position: relative;
      background: #DBFD73;
      &:last-child {
        margin-right: 0;
      }
    }
    &-line {
      position: absolute;
      width: 100%;
      height: 2px;
      background: url('@/assets/images/home/popular-line.png') center no-repeat;
    }
  }
  &-wall {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 20px;
    &-item {
      transition: all ease-in-out .4s;
      &:hover {
        transform: translateY(-7px);
      }
    }
  }
}
</style>