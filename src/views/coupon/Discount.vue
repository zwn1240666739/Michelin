<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>限时折扣</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main class="clear_fix">
            <div style="float: left; display: flex; align-items: center;">
                <span style="width: 150px;">菜品名称：</span>
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
                        label="菜品名称"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="discount"
                        label="折扣"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="expire"
                        label="开始结束时间"
                        width="320"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="usedNum"
                        label="购买数量"
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
                    discount: 10,
                    expire: '2012-12-12 12:30至2012-12-12 12:30',
                    usedNum: 100,
                }
            ],
            search: '',
            currentPage3: 1,
        }
    },
    created() {
        this.tableData = this.$store.state.Coupon.discount
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
            this.$router.push('/home/6-2/6-2-1')
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