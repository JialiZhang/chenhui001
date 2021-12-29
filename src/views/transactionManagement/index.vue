<template>
  <div class="page">
    <div class="earnings-info">
      <div
        class="earnings-info-item"
        v-for="(item, index) in earningsData"
        :key="index"
      >{{item.name}}：<span>{{item.value}}</span></div>
    </div>
    <Tabs v-model="curTab">
      <TabPane name="forSale" :label="`待出售（${forSaleList.length}）`">
        <forSaleList v-if="curTab === 'forSale'" :listData="forSaleList"></forSaleList>
      </TabPane>
      <TabPane name="onSale" :label="`挂单（${onSaleList.length}）`">
        <onSaleList v-if="curTab === 'onSale'" :listData="onSaleList"></onSaleList>
      </TabPane>
      <TabPane name="beSold" :label="`已成交（${beSoldList.length}）`">
        <beSoldList v-if="curTab === 'beSold'" :listData="beSoldList"></beSoldList>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import forSaleList from './children/forSaleList'
import onSaleList from './children/onSaleList'
import beSoldList from './children/beSoldList'
import httpService from './api'

export default {
  name: 'TransactionManagement',
  components: {
    forSaleList,
    onSaleList,
    beSoldList,
  },
  data() {
    return {
      curTab: 'forSale',
      earningsData: [],
      forSaleList: [],
      onSaleList: [],
      beSoldList: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      httpService.fetchData().then(rst => {
        this.earningsData = rst.earningsData
        this.forSaleList = rst.forSaleList
        this.onSaleList = rst.onSaleList
        this.beSoldList = rst.beSoldList
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.page{
  min-height: 100%;
  padding: 16px;
  background: #fff;
  .earnings-info{
    margin-bottom: 24px;
    height: 48px;
    display: flex;
    align-items: center;
    background: #ccc;
    &-item{
      padding: 0 16px;
      line-height: 24px;
      font-size: 16px;
      span{
        font-size: 20px;
        font-weight: bold;
      }
    }
  }
}
</style>