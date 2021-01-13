<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>排队列表</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main style="padding: 0; margin-top: 10px;">
                    <el-container>
                        <el-header style="display: flex; align-items: center; justify-content: space-between;">
                            <span>正在排队 1人</span>
                            <div>
                                <el-button type="primary" @click="dialogVisible1 = true">取号设置</el-button>
                                <el-button type="info" @click="dialogVisible2 = true">添加取号桌型</el-button>
                            </div>
                            <el-dialog
                            title="取号设置"
                            :visible.sync="dialogVisible1"
                            width="30%"
                            :before-close="handleClose1"
                            :modal="false"
                            >
                                <div>
                                    <span>取号状态：</span>
                                    <el-radio v-model="radio" label="1">开启</el-radio>
                                    <el-radio v-model="radio" label="2">关闭</el-radio>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible1 = false">取 消</el-button>
                                    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
                                </span>
                            </el-dialog>
                            <el-dialog
                            title="添加取号桌型"
                            :visible.sync="dialogVisible2"
                            width="30%"
                            :before-close="handleClose2"
                            :modal="false"
                            >
                                <div>
                                    <div>
                                        <span>桌型：</span>
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div>
                                        <span>取号前缀：</span>
                                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                                    </div>

                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible2 = false">取 消</el-button>
                                    <el-button type="primary" @click="submit2">确 定</el-button>
                                </span>
                            </el-dialog>
                        </el-header>
                        <el-main>
                            <el-table
                                :data="tableData1"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="Id"
                                label="序号"
                                align="center"
                                >
                                </el-table-column>
    
                                <el-table-column
                                prop="tableType"
                                label="桌型"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="pre"
                                label="取号前缀"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="启用状态"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="操作"
                                width="200"
                                align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            :current-page.sync="currentPage1"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="tableData1.length">
                            </el-pagination>
                        </el-main>
                    </el-container>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
      return {
        id: 1,
        input: '',
        value: '',
        options: [],
        radio: '1',
        currentPage1: 1,
        dialogVisible1: false,
        dialogVisible2: false,
        tableData1: [],
      };
    },
    created() {
        this.options = this.$store.state.Table.tableType
        this.tableData1 = JSON.parse(localStorage.getItem('getNumSet')) || []
    },
    methods: {
      handleClose1(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      handleClose2(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      changActive(index) {
          this.isShow = index
      },
      del(val) {
          this.tableData1.forEach((item, index) => {
                if(item.id === val.id) {
                    this.tableData1.splice(index, 1)
                    
                    return
                }
          })
          localStorage.setItem('getNumSet', JSON.stringify(this.tableData1))
      },
      submit2() {
            this.tableData1.push({
                Id: this.id,
                tableType: this.value,
                pre: this.input,
            })
            localStorage.setItem('getNumSet', JSON.stringify(this.tableData1))
            this.id++
            this.input = ''
            this.value = ''
            this.dialogVisible2 = false
      }
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
    .get_num_box {
        display: flex;
        flex-wrap: wrap;
    }
    .num_box_content {
        display: flex;
        width: 45%;
        flex-direction: column;
        text-align: center;
        border: 1px solid #ccc;
        cursor: pointer;
        margin-left: 10px;
        margin-top: 5px;
    }
    .active {
        background-color: orange;
    }
</style>