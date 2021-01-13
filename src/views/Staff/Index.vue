<template>
    <div class="dishes">
        <div class="box">
            <div class="box2">
            <p>
                <span>员工管理</span>
                <span style="margin: 0 15px;">/</span>
                <span>新建员工</span>
            </p>
            </div>
        </div>
        <div class="u1">
            <p><span>姓名：</span><el-input v-model="input" placeholder="请输入" style=" width: 180px;
    height: 35px;"></el-input></p>
            <p><span>岗位：</span>
            <button>查询</button>
            <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请选择"
                @select="handleSelect">               
                </el-autocomplete></p>
        </div>
            <div class="u2">
                <div id="u90" class="ax_default label">
                    <div id="u90_div" class=""></div>
                    <div id="u90_text" class="text " style="left: 0px; width: 119px; transform-origin: 59.5px 9px;">
                        <p><span>商品数量：&nbsp; 135件</span></p>
                    </div>
                </div>
                <div id="u91" class="ax_default box_2" style="cursor: pointer;">
                    <div id="u91_div" class="" tabindex="0"></div>
                    <div id="u91_text" class="text " style="top: 9px; transform-origin: 32.5px 8.5px;">
                        <p @click="employee"><span>添加</span></p>
                    </div>
                </div>
                <StaffList></StaffList>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"      
                    style="float:right;position: relative; bottom:-90px;">
                </el-pagination>
            </div>
            
    </div>
</template>
<script>
import StaffList from '@/views/Staff/StaffList'
export default {
    data() {
        return {
            input: '',
            restaurants: [],
            state: '',
            timeout:  null,
            // 分页器
            total:100,
            
        }
    },
    components: {
        StaffList
    },
    methods: {
        loadAll() {
            return [
                { "value": "前台经理" },
                { "value": "店长" },
                { "value": "服务员" },
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
            console.log(item);
        },
        // 新建员工
        employee() {
            this.$router.push('/home/9-1/9-1-1')
        }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };

</script>
<style lang="scss" scoped>
.dishes{
    background: #f6f6f6;
    width: 100%;
    height: 100%;
    position: relative;
}
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
.dishes .u1{
    border-width: 0px;
    // position: absolute;
    top: 46px;
    // width: 1300px;
    height: 77px;
    text-align: left;
    background: #ffffff;
    display: flex;
    align-items: center;
}
.dishes .u1 p{
    padding-left: 40px;
    float: left;
    // margin-top: 16px;
}
.dishes .u1 p + p {
    flex: 1;
}
.dishes .u1 span{
     margin-right: 20px;
}
.dishes .u1 button {
    // position: absolute;
    width: 100%;
    float: right;
    right: 50px;
    top: 20px;
    width: 69px;
    height: 35px;
    background-image: inherit;
    background-position: inherit;
    background-size: inherit;
    background-repeat: inherit;
    background-attachment: inherit;
    background-origin: inherit;
    background-clip: inherit;
    background-color: rgb(255, 255, 255);
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(228, 228, 228);
    border-radius: 2px;
    box-shadow: none;
    font-family: 微软雅黑;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    color: rgb(188, 188, 188);
    outline: none;
    cursor: pointer;
}

.dishes .u2 {
    border-width: 0px;
    // width: 1300px;
    height: 835px;
    text-align: left;
    background: #ffffff;
    margin-top: 23px;
    position: relative;
    
}
#u90{
    border-width: 0px;
    position: absolute;
    width: 119px;
    height: 18px;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    color: #7764CA;
    margin-left: 20px;
    margin-top: 10px;
}
.lable{
    font-size: 14px;
    text-align: left;
}
#u90_div {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 119px;
    height: 18px;
    background: inherit;
    background-color: rgba(255, 255, 255, 0);
    border: none;
    border-radius: 0px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
    font-weight: 700;
    font-style: normal;
    color: #7764CA;
}
#u90_text {
    border-width: 0px;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 117px;
    white-space: nowrap;
}
#u91 {
    border-width: 0px;
    position: absolute;
    top: 10px;
    right: 30px;
    width: 69px;
    height: 35px;
    color: #FFFFFF;
    cursor: pointer;
    background:#7764CA;;
    text-align: center;
    line-height: 35px;
}
#u91_text {
    border-width: 0px;
    width: 65px;
    word-wrap: break-word;
    color: #FFFFFF;
}
#u91_text p {
    border: 0;
    padding: 0;
    margin: 0;
}
</style>