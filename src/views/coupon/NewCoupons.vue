<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>新人券管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div class="tabBuild">
                <span>*有效期设置：</span>
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="datetimerange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                    @change="getData"
                    >
                    </el-date-picker>
                </div>
            </div>
            <div class="tabBuild">
                <span>*首单立减：</span>
                <el-input v-model="input1" placeholder="请输入数字" class="tabNumIpt"></el-input>
            </div>
            <div class="tabBuild">
                <span>*最低支付金额：</span>
                <el-input v-model="input2" placeholder="请输入数字" class="tabNumIpt"></el-input>
            </div>
            <el-button 
            type="primary" 
            style="width: 150px; margin: 20px 0 0 20px;" 
            size="small"
            @click.native="submit"
            >确认</el-button>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            input1: '',
            input2: '',
            value1: [],
            time: ''
        }
    },
    methods: {
      getData() {
          let index1 = this.value1[0].toLocaleString().lastIndexOf(':')
          let index2 = this.value1[1].toLocaleString().lastIndexOf(':')
          let str1 = this.value1[0].toLocaleString().substr(0, index1)
          let str2 = this.value1[1].toLocaleString().substr(0, index2)
          let time = str1 + '至' + str2
          this.time = time
      },
      submit() {
          let obj = {
              time: this.time,
              firstNum: this.input1,
              minMoney: this.input2 
          }
          this.$store.dispatch('Coupon/setNewCoupon', obj)
          this.value1 = []
          this.input2 = ''
          this.input1 = ''
      }
    }
}
</script>


<style lang="scss" scoped>
    .el-header {
        background-color: rgba(233, 239, 245, 1);
        display: flex;
        align-items: center;
    }
    .tabNumIpt {
        width: 500px;
    }
    .tabBuild {
        display: flex; 
        align-items: center; 
        font-size: 12px;
        padding-left: 30px;
        margin-bottom: 10px; 
    }
    .tabBuild div span {
        width: 100px;
    }
    .tabBuild > span {
        width: 120px;
        font-size: 14px;
    }
</style>