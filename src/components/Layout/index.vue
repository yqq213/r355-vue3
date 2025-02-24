<template>
  <Header></Header>
  <div class="layout">
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
</script>

<style lang="less" scoped>
.layout {
  position: relative;
}
</style>