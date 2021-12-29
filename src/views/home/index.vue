<template>
  <div class="page">
    <div class="price-panel">
      <div class="price-item" v-for="(item, index) in priceData" :key="index">
        <div class="price-item-content">
          <h3>{{item.value}}</h3>
          <p>{{item.name}}</p>
        </div>
      </div>
    </div>
    <div class="data-statistics">
      <div class="data-group">
        <h3 class="data-group-title">卖盘分析</h3>
        <ul>
          <li v-for="(item, index) in analysisData">
            <div class="item-main">
              <span class="name">{{item.name}}</span>
              <span class="value">{{item.value}}</span>
            </div>
            <p v-if="item.extra">（{{item.extra}}）</p>
          </li>
        </ul>
      </div>
      <div class="data-group">
        <h3 class="data-group-title">成交数据</h3>
        <ul>
          <li v-for="(item, index) in clinchData">
            <div class="item-main">
              <span class="name">{{item.name}}</span>
              <span class="value">{{item.value}}</span>
            </div>
            <p v-if="item.extra">（{{item.extra}}）</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import httpService from './api'

export default {
  name: 'Home',
  data() {
    return {
      priceData: [],
      analysisData: [],
      clinchData: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      httpService.fetchData().then(rst => {
        this.priceData = rst.priceData
        this.analysisData = rst.analysisData
        this.clinchData = rst.clinchData
        setTimeout(() => {
          this.fetchData()
        }, 5000)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page{
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .price-panel{
    flex: none;
    height: 80px;
    display: flex;
    justify-content: center;
    background: #ccc;
    .price-item{
      flex: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 8px;
      margin-right: 24px;
      &:last-child{
        margin-right: 0;
      }
      &-content{
        text-align: center;
        h3{
          font-size: 24px;
        }
        p{
          font-size: 16px;
        }
      }
    }
  }
  .data-statistics{
    flex: 1 0 auto;
    margin-top: 24px;
    display: flex;
    .data-group{
      flex: none;
      width: calc(33.33% - 16px);
      margin-right: 24px;
      padding: 16px;
      box-sizing: border-box;
      background: #ccc;
      &:last-child{
        margin-right: 0;
      }
      &-title{
        line-height: 32px;
        text-align: center;
      }
      ul{
        li{
          padding: 8px 0;
          .item-main{
            display: flex;
            justify-content: space-between;
            line-height: 24px;
            span{
              flex: none;
              &.value{
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}
</style>