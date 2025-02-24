<template>
  <div class="trend">
    <sub-menu></sub-menu>
    <div class="shadow">
      <p class="title">主题分析</p>
      <img src="@/assets/images/layout/title-icon.png" alt="">
      <a-select v-model:value="quarter" style="width: 120px; margin-left: 30px;">
        <a-select-option value="1">季度</a-select-option>
      </a-select>
    </div>
    <img-layout1></img-layout1>
    <Pagination v-model:current="currentPage" @change="onChangePage" class="pagination"></Pagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import subMenu from '@/components/Layout/sub-menu/index.vue'
import imgLayout1 from '@/components/Layout/imgLayout1/index.vue'
import Pagination from '@/components/Pagination/index.vue'

const quarter = ref('1')

const currentPage = ref(1)

function onChangePage(pageNumber: number) {
  console.log('Page: ', pageNumber)
}

</script>

<style lang="less" scoped>
.trend {
  padding: 0 100px 100px 100px;
}
.shadow {
  padding: 0 15px;
  height: 42px;
  background: #EEEEEE;
  margin-bottom: 35px;
  .flex(flex-start);
  .title {
    color: #000;
    font-size: 24px;
    margin-right: 10px;
    font-weight: bold;
  }
}
.pagination {
  margin-top: 80px;
}
</style>