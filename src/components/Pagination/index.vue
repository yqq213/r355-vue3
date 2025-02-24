<template>
  <a-pagination show-quick-jumper :total="500" hideOnSinglePage :showSizeChanger="false" />
</template>

<script setup lang="ts">

</script>

<style lang="less">
.ant-pagination {
  text-align: center;
  .ant-pagination-item {
    border: 1px solid #999;
    border-radius: 0;
    width: 42px;
    height: 40px;
    line-height: 40px;
    &:hover {
      background: #000 !important;
      a {
        color: #fff;
      }
    }
    a {
      color: #666;
    }
  }
  .ant-pagination-item-active {
    background: #000;
    border-color: #000 !important;
    a {
      color: #fff;
    }
  }
  .ant-pagination-options-quick-jumper {
    height: 40px;
    line-height: 40px;
    input {
      border: 1px solid #999;
      border-radius: 0;
      width: 50px;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>