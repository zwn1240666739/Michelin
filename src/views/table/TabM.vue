<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/home/3-1' }">桌台设置</el-breadcrumb-item>
                <el-breadcrumb-item>桌位管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main>
            <div class="tab-box">
                <div class="TabMinfo">
                    <el-button type="text" @click="dialogFormVisible = true">+添加桌位</el-button>

                    <el-dialog title="" :visible.sync="dialogFormVisible" :modal-append-to-body="false">
                        <el-form :model="form">
                            <el-form-item label="桌台位置" :label-width="formLabelWidth">
                                <el-input v-model="form.name" autocomplete="off"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleClick">确 定</el-button>
                        </div>
                    </el-dialog>
                </div>
                <div class="TabMinfo" v-for="(item, index) in dataArr" :key="index">
                    <p>{{ item.value }}</p>
                    <div class="operate">
                        <span @click="edit(index)">编辑</span>
                        <span @click="del(index)">删除</span>
                    </div>
                </div>
            </div>
        </el-main>
    </el-container>
</template>


<script>
export default {
    data() {
        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            form: {
                name: '',
            },
            formLabelWidth: '100px',
            dataArr: []
        }
    },
    created() {
        this.dataArr = this.$store.state.Table.tablePosition
    },
    methods: {
        handleClick() {
            this.dialogFormVisible = false
            this.dataArr.push({
                value: this.form.name
            })
            console.log(this.dataArr)
            this.$store.commit('Table/setPosition', this.dataArr)
            this.form.name = ''
        },
        edit(index) {
            // this.$set(this.dataArr, index, )
        },
        del(index) {
            this.dataArr.splice(index, 1)
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
    .tab-box {
        display: flex;
        // justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .TabMinfo {
        // flex: 1;
        width: 300px;
        height: 150px;
        line-height: 150px;
        text-align: center;
        font-size: 20px;
        border: 1px solid #ccc;
        margin-top: 5px;
        margin-right: 10px;
    }
    .TabMinfo p {
        height: 100px;
        background-color: rgba(233, 239, 245, 1);
        font-size: 20px;
        text-align: center;
        line-height: 100px;
    }
    .operate {
        display: flex;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
    }
    .operate span {
        width: 150px;
        cursor: pointer;
    }
</style>