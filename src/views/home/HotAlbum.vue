<template>
  <div class="album">
    <img src="@/assets/images/home/title-album.png" class="title">
    <p class="sub-title">集单品、实拍、面料、图案、风格、细节等各方面的图片内容，整理成热门主题图册</p>
    <div class="btn-more" v-waves>查看更多</div>
    <div class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="img-wrap">
          <a-image :src="item.img" width="100%" height="100%" :fallback="fallback" :preview="false" class="img"></a-image>
        </div>
        <div class="intro">
          <p :title="item.title">{{ item.title }}</p>
          <p>{{ item.num }}张</p>
        </div>
      </li>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Album1 from '@/assets/images/example/album-img1.png'
import Album2 from '@/assets/images/example/album-img2.png'
import fallback from '@/assets/images/fallback.png'
import { preview } from 'vite';

const list = ref([
  {
    img: Album1,
    title: '2024春夏男装极简主义设计',
    num: 102
  },
  {
    img: Album2,
    title: '2025春夏男装中式国潮风',
    num: 65
  },
  {
    img: Album1,
    title: '2025春夏男装口袋细节集锦',
    num: 80
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  },
  {
    img: Album1,
    title: '2024春夏男装极简主义设计',
    num: 102
  },
  {
    img: Album2,
    title: '2025春夏男装中式国潮风',
    num: 65
  },
  {
    img: Album1,
    title: '2025春夏男装口袋细节集锦',
    num: 80
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  },
  {
    img: Album1,
    title: '2024春夏男装极简主义设计',
    num: 102
  },
  {
    img: Album2,
    title: '2025春夏男装中式国潮风',
    num: 65
  },
  {
    img: Album1,
    title: '2025春夏男装口袋细节集锦',
    num: 80
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  },
  {
    img: Album2,
    title: '2024/25秋冬男装废土风',
    num: 112
  }
])

</script>

<style lang="less" scoped>
.album {
  padding: 0 60px;
  .title {
    display: block;
    margin: 0 auto;
  }
  .sub-title {
    margin: 30px 0 48px 0;
    text-align: center;
    font-size: 18px;
    color: #2D3E50;
  }
  .btn-more {
    .btn-circle(#0057FF, 140px);
    margin: 0 auto;
  }
  .list {
    margin-top: 70px;
    .flex(space-between, center);
    flex-wrap: wrap;
    .item {
      width: 20%;
      padding-right: 10px;
      margin-bottom: 50px;
      cursor: pointer;
      &:nth-child(5n) {
        padding-right: 0;
      }
      .img-wrap {
        width: 100%;
        height: 12vw;
        overflow: hidden;
        margin-bottom: 15px;
        :deep(img) {
          transition: all ease-in-out .5s;
          object-fit: cover;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
      .intro {
        padding: 0 5px;
        .flex(space-between, center);
        p {
          font-size: 18px;
          &:nth-child(1) {
            flex: 1;
            margin-right: 10px;
            .textOverflow;
          }
          &:nth-child(2) {
            flex-shrink: 0;
          }
        }
      }
    }
  }
}
</style>