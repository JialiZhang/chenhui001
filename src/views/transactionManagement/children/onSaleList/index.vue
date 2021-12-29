<template>
  <div class="goods_wrapper">
    <div class="btn-bar">
      <Button @click="cancelSale('selections')">下架选中</Button>
      <Button @click="cancelSale">全部下架</Button>
    </div>
    <div class="goods-list">
      <div class="goods-list-item" v-for="(item, index) in listData" :key="item.id">
        <div class="img-box">
          <img src="../../../../assets/img/gift-box.jpg" />
        </div>
        <div class="goods-info">
          <p>售价：<span>{{item.sellingPrice}}</span></p>
          <p>结束时间：<span>{{item.endTime}}</span></p>
        </div>
        <Checkbox :value="item._checked" @on-change="bool => {checkHandler(bool, index)}"></Checkbox>
      </div>
    </div>
  </div>
</template>

<script>
// import httpService from './api'

export default {
  name: 'OnSaleList',
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
    getSelections() {
      return this.listData.filter(i => i._checked)
    },
    cancelSale(type) {
      if (!this.listData.length) { return }
      let contentText = '确定全部下架？'
      let tempList = this.listData
      if (type === 'selections') {
        contentText = '确定下架选中？'
        tempList = this.getSelections()
        if (!tempList.length) {
          return this.$Message.warning('请先选择！')
        }
      }
      this.$Modal.confirm({
        title: '下架',
        content: `<p>${contentText}</p>`,
        onOk: () => {
          // todo 调用下架接口，成功后更新数据
        },
      })
    },
    checkHandler(bool, index) {
      this.$set(this.listData[index], '_checked', bool)
    },
  },
}
</script>

<style lang="scss" scoped>
.goods_wrapper{
  .btn-bar{
    margin-bottom: 24px;
    .ivu-btn{
      margin-right: 24px;
    }
  }
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
      .ivu-checkbox-wrapper{
        position: absolute;
        top: 8px;
        right: 8px;
        margin-right: 0;
      }
    }
  }
}
</style>