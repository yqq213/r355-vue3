<template>
  <div class="footer">
    <img src="@/assets/images/footer/innovative-future.png" class="footer-future" />
    <div class="footer-contact">
      <img src="@/assets/images/footer/wechat-icon.png" />
      <img src="@/assets/images/footer/qq-icon.png" />
      <img src="@/assets/images/footer/phone-icon.png" />
    </div>
    <div class="footer-line"></div>
    <div class="footer-bot">
      <div class="footer-bot-left">
        <div class="footer-bot-navs">
          <li class="nav-item" v-for="item in navList" :key="item.name">{{ item.name }}</li>
        </div>
        <p>Copyright 2007-2024 R355.com， All Rights Reserved 闽 ICP 备 07502261 号-1</p>
      </div>
      <a-image :src="qrcode" width="94" height="94"></a-image>
    </div>
  </div>
</template>

<script setup lang="ts">
import qrcode from '@/assets/images/footer/qrcode.png'
const navList = [
  {
    name: '关于我们',
    link: ''
  },
  {
    name: '联系我们',
    link: ''
  },
  {
    name: '免责声明',
    link: ''
  },
  {
    name: '会员须知',
    link: ''
  },
  {
    name: '收费说明',
    link: ''
  },
  {
    name: '汇款方式',
    link: ''
  },
  {
    name: '办理流程',
    link: ''
  }
]

</script>

<style lang="less" scoped>
.footer {
  background: #2D3E50;
  padding: 70px 60px;
  color: #C5A450;
  &-future {
    display: block;
  }
  &-contact {
    padding-right: 15vw;
    text-align: right;
    img {
      margin: 0 15px;
      cursor: pointer;
      transition: all ease-in-out .3s;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
  &-line {
    width: 100%;
    height: 2px;
    background: radial-gradient(at 0% 0%, #0057FF 0%, #DBFD73 98%, #FFFFFF 100%);
    margin: 20px 0;
  }
  &-bot {
    padding: 0 20px 0 10px;
    .flex(space-between, flex-start);
    &-navs {
      display: flex;
      .nav-item {
        font-size: 18px;
        cursor: pointer;
        margin-right: 40px;
      }
    }
    &-left {
      p {
        font-size: 14px;
        margin-top: 10px;
      }
    }
  }
}
</style>