<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>优惠券叠加设置</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                prop="type"
                label="优惠活动类型"
                >
                </el-table-column>
                <el-table-column
                label="选择叠加优惠"
                width="300"
                align="center"
                >
                    <el-checkbox v-model="checked">满减券</el-checkbox>
                    <el-checkbox v-model="checked">限时折扣</el-checkbox>
                </el-table-column>
                <el-table-column
                label="操作"
                align="center"
                >
                    <template slot-scope="scope">
                        <el-button @click="save(scope.row)" type="text" size="small">保存</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    type: '新人券'
                },
                {
                    type: '满减券'
                },
                {
                    type: '限时折扣'
                }
            ]
        }
    },
    methods: {
        save() {}
    }
}
</script>



<style lang="scss" scoped>
    .el-header {
        background-color: rgba(233, 239, 245, 1);
        display: flex;
        align-items: center;
    }
</style>