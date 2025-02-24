<template>
  <div class="img-layout">
    <li class="img-item" v-for="item in 20" :key="item" @click="$router.push('/trend-analyse/detail/1')">
      <div class="img-wrap">
        <a-image :src="img1" width="100%" height="100%" :preview="false" class="img" :fallback="fallback"></a-image>
      </div>
      <div class="intro">
        <p class="intro-p">2025/26秋冬中国关键色预警：樱桃红漆色2025/26秋冬中国关键色预警</p>
      </div>
    </li>
  </div>
</template>

<script setup lang="ts">
import img1 from '@/assets/images/example/popular-img1.png'
import fallback from '@/assets/images/fallback.png'

</script>

<style lang="less" scoped>
.img-layout {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px 20px; 
  min-height: 300px;
  .img-item {
    .img-wrap {
      width: 100%;
      overflow: hidden;
      margin-bottom: 10px;
      cursor: pointer;
      :deep(img) {
        transition: all ease-in-out .5s;
        object-fit: cover;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
    .intro {
      .lineClamp(2);
      .intro-p {
        cursor: pointer;
        line-height: 20px;
        transition: all ease .5s;
        &:hover {
          color: @primary-color;
        }
      }
    }
  }
}
</style>