<template>
    <div>
        <div class="box">
            <div class="box1"></div>
            <div class="box2">
            <el-breadcrumb separator="/" style="font-size:16px">
                <el-breadcrumb-item :to="{ path: '/home/2-1' }">菜品管理</el-breadcrumb-item>
                <el-breadcrumb-item>新建菜品</el-breadcrumb-item>
            </el-breadcrumb>
            </div>
        </div>
        <div class="u1">
            <p>菜品名称:<el-input v-model="name" placeholder="" style="width:658px;height:38px;margin-left:20px; margin-bottom:20px"></el-input></p>
            <p>菜品分类:
                <el-autocomplete
                    v-model="state"
                    :fetch-suggestions="querySearchAsync"
                    placeholder="菜品分类"
                    style="width:658px;height:38px;margin-left:16px; margin-bottom:20px"
                    @select="handleSelect">
                </el-autocomplete>
            </p>
            <p><span>菜品介绍:</span>
                <el-input
                    type="textarea"
                    :rows="10"
                    placeholder="请输入内容"
                    style="width:658px; margin-left:20px; margin-bottom:20px"
                    v-model="introduce"
                    >
                </el-input>
            </p>
            <p>菜品售价:<el-input v-model="price" placeholder="" style="width:658px;height:38px;margin-left:20px; margin-bottom:20px"></el-input></p>
            <button @click="submitTable">完成,提交菜品</button>
        </div>
    </div>
</template>
<script>
import { mapMutations,mapState } from 'vuex'
export default {
    data() {
      return {
        //菜品名称
        name: '',
        // 菜品分类
        restaurants: [],
        state: '',
        timeout:  null,
        // 菜品介绍
        introduce: '',
        // 菜品售价
        price: '',
      };
    },
    methods: {
        // 菜品分类
      loadAll() {
        return [
          { "value": "荤菜" },
          { "value": "素菜" },
          { "value": "特色菜" },
          { "value": "家常菜" },
          { "value": "凉拼" },
          { "value": "海鲜" },
          { "value": "主食" },
          { "value": "汤类" },
          { "value": "饮料" }
        ];
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        // console.log(item);
      },
      ...mapMutations('newFoods',['addFoods']),
      // 提交菜品
      submitTable() {
        let newFoods = {
          id: this.id,
          name: this.name,
          state: this.state,
          introduce: this.introduce,
          price: this.price,
          sort: '--',
          volume: '--',
          // 售罄开关
          zip: false
        }
        this.addFoods(newFoods)
        this.$router.push('/home/2-1')
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    },
    computed: {
      ...mapState('newFoods',['id'])
    }
}
</script>
<style lang="scss" scoped>
    .box{
    border-width: 0px;
    position: relative;
    width: 1300px;
    height: 45px;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #666666;
    text-align: left;
    
}
.box .box1{
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #666666;
    text-align: left;
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 1300px;
    height: 45px;
    background: inherit;
    background-color: rgba(233, 239, 245, 1);
    border: none;
    border-radius: 0px;
}
.box .box2{
    border-width: 0px;
    position: relative;
    left: 20px;
    top: 12px;
    width: 1123px;
}
.box .box2 p {
    margin: 0px;
}
.u1{
    border-width: 0px;
    width: 1300px;
    height: 835px;
    text-align: left;
    background: #ffffff;
    position: relative;
    padding-left: 25px;
}
.u1 p:nth-of-type(1){
    margin-top: 25px;
}
.u1 p:nth-of-type(3) {
    position: relative;
}
.u1 p:nth-of-type(3) span{
    position: relative;
    top: -200px;
}
button {
    border-width: 0px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 35px;
    cursor: pointer;
    color: #ffffff;
    background: #48c9b0;
}
</style>