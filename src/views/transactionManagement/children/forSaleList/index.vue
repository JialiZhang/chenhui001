<template>
  <div class="goods_wrapper">
    <div class="btn-bar">
      <Button @click="showModal(10)">出售10个</Button>
      <Button @click="showModal(20)">出售20个</Button>
      <Button @click="showModal(listData.length)">出售全部</Button>
      <Button @click="showModal()">自定义出售</Button>
    </div>
    <div class="goods-list">
      <div class="goods-list-item" v-for="item in listData" :key="item.id">
        <div class="img-box">
          <img src="../../../../assets/img/gift-box.jpg" />
        </div>
      </div>
    </div>

    <Modal
      v-model="modal"
      title="出售"
    >
      <Form
        ref="form"
        v-if="modal"
        :model="formInfo"
        :rules="formRules"
      >
        <FormItem label="数量" prop="number">
          <InputNumber
            v-model="formInfo.number"
            controls-outside
            :min="0"
            :max="listData.length"
          ></InputNumber>
        </FormItem>
        <FormItem label="价格" prop="price">
          <InputNumber
            v-model="formInfo.price"
            controls-outside
            :min="0"
            :precision="2"
          ></InputNumber>
        </FormItem>
      </Form>
      <template #footer>
        <Button @click="modal = false">取消</Button>
        <Button :loading="loading" type="primary" @click="saleHandler">确定</Button>
      </template>
    </Modal>
  </div>
</template>

<script>
// import httpService from './api'

export default {
  name: 'ForSaleList',
  props: {
    listData: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      modal: false,
      loading: false,
      formInfo: {
        number: 0,
        price: 0,
      },
      formRules: {
        number: [
          {
            validator: (rule, value, callback) => {
              if (value <= 0) {
                callback(new Error('数量必须大于0！'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          }
        ],
        price: [
          {
            validator: (rule, value, callback) => {
              if (value <= 0) {
                callback(new Error('价格必须大于0！'))
              } else {
                callback()
              }
            },
            trigger: 'blur',
          }
        ],
      },
    }
  },
  created() {
  },
  methods: {
    showModal(number = 0) {
      if (number > this.listData.length) {
        return this.$Message.warning('超出可出售数量！')
      }
      this.formInfo.number = number
      this.formInfo.price = 0
      this.modal = true
    },
    saleHandler() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          // todo 调用出售接口，成功后更新数据
        }
      })
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
      height: 240px;
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
    }
  }
}
</style>