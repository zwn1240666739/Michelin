<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home/6-1' }">满减券</el-breadcrumb-item>
                <el-breadcrumb-item>新建满减券</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div class="tabBuild">
                <span>*满减券名称：</span>
                <el-input v-model="input1" placeholder="请输入内容" class="tabNumIpt"></el-input>
            </div>
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
                <span>*优惠政策：</span>
                <div style="display: flex; align-items: center;">
                    <span>订单满</span>
                    <el-input v-model="input2" placeholder="输入金额"></el-input>
                    <span>元减</span>
                    <el-input v-model="input3" placeholder="输入金额"></el-input>
                    <span>元</span>
                </div>
            </div>
            <div class="tabBuild">
                <span>*菜品分类：</span>
                <div style="display: flex; align-items: center;">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cityOptions" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <div class="tabBuild">
                <span>*发放数量：</span>
                <el-input v-model="input4" placeholder="请输入数字" class="tabNumIpt"></el-input>
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
            input3: '',
            input4: '',
            value1: [],
            checkAll: false,
            cityOptions: ['米线', '麻辣烫', '米线套餐', '麻辣烫套餐'],
            checkedCities: [],
            isIndeterminate: true,
            time: ''
        }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cityOptions.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cityOptions.length;
      },
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
                    name: this.input1,   // 满减券名称 -- string
                    denomination: this.input3,  // 优惠额度  -- number
                    condition: this.input2,  // 优惠条件 -- number
                    expire: this.time,  //过期时间  -- string
                    curNum: this.input4,  // 总数量 -- number
                    usedNum: 0,   // 使用数量  -- number
                    dishType: this.checkedCities   //菜品分类
                }
          this.$store.dispatch('Coupon/setFullDec', obj)
          this.input1 = ''
          this.input2 = ''
          this.input3 = ''
          this.value1 = []
          this.input4 = ''
          this.checkedCities = []
          
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
        width: 100px;
        font-size: 14px;
    }
</style>