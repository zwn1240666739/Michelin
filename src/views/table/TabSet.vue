<template>
    <el-container>
        <el-header height="40px">桌台设置</el-header>
        <el-main class="tableInfo">
            <el-container>
                <el-header height="50px" style="line-height: 50px;">
                    <p style="float: left; font-size: 14px; color: blue;">数量：{{tabNum}}个</p>
                    <div style="float: right;">
                        <el-button type="primary" @click.native="TotabM">桌位管理</el-button>
                        <el-button type="success" @click.native="TotabType">桌型管理</el-button>
                        <el-button type="info" @click.native="TotabBuild">新建</el-button>
                    </div>
                </el-header>
                <el-main>
                    <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                        prop="Id"
                        label="编号"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="TabId"
                        label="桌号"
                        width="180">
                        </el-table-column>
                        <el-table-column
                        prop="TabPosition"
                        label="桌位">
                        </el-table-column>
                        <el-table-column
                        prop="TabType"
                        label="桌型">
                        </el-table-column>
                        <el-table-column
                        prop="TabStatus"
                        label="桌台状态">
                        </el-table-column>
                        <el-table-column
                        label="操作">
                            <template slot-scope="scope">
                                <el-button @click="Del(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-main>
            </el-container>
        </el-main>
    </el-container>
</template>


<script>
export default {
    data() {
        return {
            tableData: []
        }
    },
    computed: {
        tabNum() {
            return this.tableData.length
        }
    },
    created() {
        this.tableData = this.$store.state.Table.tableData
    },
    methods: {
        TotabM() {
            this.$router.push('/home/3-3')
        },
        TotabType() {
            this.$router.push('/home/3-2')
        },
        TotabBuild() {
            this.$router.push('/home/3-1/3-1-1')
        },
        Del(scope) {
            // console.log(scope)
            this.tableData.forEach((item, index) => {
                if(item.Id === scope.Id) {
                    this.tableData.splice(index, 1)
                    return
                }
            })
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
    .tableInfo {
        padding: 0;
        margin-top: 10px;
    }
</style>