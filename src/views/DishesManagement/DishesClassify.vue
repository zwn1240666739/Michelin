<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>菜品分类</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div style="float: left; display: flex; align-items: center;">
                <span style="width: 150px;">菜品分类：</span>
                <el-input v-model="search" placeholder="请输入内容"></el-input>
            </div>
        </el-main>
        <el-main class="tableInfo">
            <el-container>
                <el-header height="50px" style="line-height: 50px;">
                    <p style="float: left; font-size: 14px; color: blue; margin-right: 10px;">分类数量：{{tabNum}}个</p>
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
                        prop="Id"
                        label="编号"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="分类名称"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="number"
                        label="商品数量"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="expire"
                        label="导航栏"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="status"
                        label="是否显示"
                        align="center"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="usedNum"
                        label="排序"
                        align="center"
                        >
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
                    Id: 1,
                    number: 100,
                    expire: '无',
                    status: '是',
                    usedNum: 1,
                }
            ],
            search: '',
            currentPage3: 1,
        }
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
            // this.$router.push('/home/6-1/6-1-1')
        },
    }
}
</script>



<style lang="scss" scoped>
    .el-header {
        background-color: rgba(233, 239, 245, 1);
        line-height: 40px;
    }
    .el-breadcrumb {
        line-height: 40px;
    }
    .tableInfo {
        padding: 0;
    }
</style>