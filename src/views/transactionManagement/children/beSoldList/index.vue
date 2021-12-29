<template>
  <div class="goods_wrapper">
    <div class="goods-list">
      <div class="goods-list-item" v-for="item in listData" :key="item.id">
        <div class="img-box">
          <img src="../../../../assets/img/gift-box.jpg" />
        </div>
        <div class="goods-info">
          <p>成交价：<span>{{item.transactionPrice}}</span></p>
          <p>成交时间：<span>{{item.transactionTime}}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import httpService from './api'

export default {
  name: 'BeSoldList',
  props: {
    listData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.goods_wrapper{
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    &-item{
      flex: none;
      position: relative;
      margin: 0 24px 24px 0;
      width: 240px;
      height: 304px;
      box-sizing: content-box;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      overflow: hidden;
      .img-box{
        width: 100%;
        height: 240px;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      .goods-info{
        padding: 8px;
        p{
          line-height: 24px;
        }
      }
    }
  }
}
</style>