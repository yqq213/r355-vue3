<template>
  <div class="detail">
    <div class="detail-inner">
      <div class="card bread">
        <a-breadcrumb>
          <a-breadcrumb-item><router-link to="/">首页</router-link></a-breadcrumb-item>
          <a-breadcrumb-item><router-link to="/trend-analyse/index/1">主题分析</router-link></a-breadcrumb-item>
          <a-breadcrumb-item>详情</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="card suffix">
        <p>季度：2025春夏</p>
        <p>时间：2025年01月04日</p>
      </div>
      <div class="card title">2025/26春夏关键图案：宠物俱乐部</div>
      <div class="card content">
        富文本内容展示
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="less" scoped>
.detail {
  background: #f0f0f0;
  .detail-inner {
    width: 1200px;
    margin: 0 auto;
    padding: 30px 0 80px 0;
  }
  .card {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.03),0 1px 6px -1px rgba(0, 0, 0, 0.02),0 2px 4px 0 rgba(0, 0, 0, 0.02);
    border: 1px solid #e9e9e9;
  }
  .bread {
    height: 50px;
    padding: 0 20px;
    .flex(flex-start);
  }
  .suffix {
    height: 50px;
    margin: 10px 0;
    .flex();
    p {
      padding: 0 30px;
      color: #666;
      font-size: 14px;
    }
  }
  .title {
    height: 60px;
    background: #D8B056;
    font-size: 30px;
    color: #fff;
    .flex();
  }
  .content {
    padding: 30px;
    margin-top: 40px;
  }
}
</style>