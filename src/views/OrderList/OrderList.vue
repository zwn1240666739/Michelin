<template>
    <div class="dishes">
        <div class="box">
            <div class="box2">
            <p>
                <span>桌台设置</span>
                <span style="margin: 0 15px;">/</span>
                <span>桌台管理</span>
            </p>
            </div>
        </div>
        <div class="u1">
            <span>下单时间：</span>
            <span>
                <div class="block">
                    <el-date-picker
                    v-model="value1"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="-- -- --"
                    end-placeholder="-- -- --">
                    </el-date-picker>
                </div>
            </span>
            <p><span>桌号：</span><el-input v-model="input" placeholder="请输入" style=" width: 180px;
    height: 35px;"></el-input></p>
            <p>
                <span>桌号：</span>
                <button>查询</button>
                <!-- <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请选择"
                @select="handleSelect">               
                </el-autocomplete> -->
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </p>
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
                        <!-- <p @click="newly"><span>新建</span></p> -->
                    </div>
                </div>
                <List></List>
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
import List from './List'
export default {
    data() {
        return {
            input: '',
            restaurants: [],
            state: '',
            timeout:  null,
            // 分页器
            total:100,
            pickerOptions: {
                shortcuts: [{
                    text: '本月',
                    onClick(picker) {
                        picker.$emit('pick', [new Date(), new Date()]);
                    }
                }, 
                {
                    text: '今年至今',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date(new Date().getFullYear(), 0);
                        picker.$emit('pick', [start, end]);
                    }
                }, 
                {
                    text: '最近六个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setMonth(start.getMonth() - 6);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
            value1: '',
            value2: '',
            options: [{
                value: '选项1',
                label: '001'
            }, 
            {
                value: '选项2',
                label: '001'
            }, 
            {
                value: '选项3',
                label: '003'
            }, 
            {
                value: '选项4',
                label: '004'
            }, 
            {
                value: '选项5',
                label: '005'
            }],
            value: ''
        }
    },
    components: {
        List,
    },
    methods: {
        loadAll() {
            return [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
            ];
        },
        newly() {
            this.$router.push('/home/2-1-1')
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
    padding-left: 20px;
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
    // background:#7764CA;
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