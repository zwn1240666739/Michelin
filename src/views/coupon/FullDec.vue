<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>满减券</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main class="clear_fix">
            <div style="float: left; display: flex; align-items: center;">
                <span style="width: 150px;">优惠券名称：</span>
                <el-input v-model="search" placeholder="请输入内容"></el-input>
            </div>
        </el-main>
        <el-main class="tableInfo">
            <el-container>
                <el-header height="50px" style="line-height: 50px;">
                    <p style="float: left; font-size: 14px; color: blue; margin-right: 10px;">满减券数量：{{tabNum}}个</p>
                    <p style="float: left; font-size: 14px; color: blue;">已启用数量：0个</p>
                    <div style="float: right;">
                        <el-button type="success" @click.native="toTabBuild">新建</el-button>
                    </div>
                </el-header>
                <el-main>
                    <el-table
                        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
                        style="width: 100%"
                        
                        >
                        <el-table-column
                        prop="name"
                        label="满减卷名称"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="denomination"
                        label="优惠面额"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="condition"
                        label="优惠条件"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="expire"
                        label="有效期"
                        width="320"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="curNum"
                        label="当前库存"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="usedNum"
                        label="领取数量"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="Id"
                        label="启用状态"
                        align="center"
                        >
                        <input type="checkbox">
                        </el-table-column>
                        <el-table-column
                        label="操作"
                        align="center"
                        >
                            <template slot-scope="scope">
                                <el-button @click="Del(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
                <el-footer>
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage3"
                    :page-size="12"
                    layout="prev, pager, next, jumper"
                    :total="tabNum">
                    </el-pagination>
                </el-footer>
            </el-container>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: '国庆活动',
                    denomination: 10,
                    condition: 100,
                    expire: '2012-12-12 12:30至2012-12-12 12:30',
                    curNum: 100,
                    usedNum: 10,
                    dishType: []
                }
            ],
            search: '',
            currentPage3: 1,
        }
    },
    created() {
        this.tableData = this.$store.state.Coupon.fullDec
    },
    computed: {
        tabNum() {
            return this.tableData.length
        }
    },
    methods: {
        Del(scope) {
            this.tableData.forEach((item, index) => {
                if(item.name === scope.name) {
                    this.tableData.splice(index, 1)
                    return
                }
            })
        },
        toTabBuild() {
            this.$router.push('/home/6-1/6-1-1')
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>


<style lang="scss" scoped>
    .grid-content {
        display: flex;
        align-items: center;
    }
    .el-header {
        background-color: rgba(233, 239, 245, 1);
        line-height: 40px;
    }
    .grid-content button {
        border: 1px solid #ccc;
        height: 30px;
        margin-left: 10px;
        cursor: pointer;
        background-color: #fff;
    }
    .el-breadcrumb {
        line-height: 40px;
    }
    .tableInfo {
        padding: 0;
    }
</style>