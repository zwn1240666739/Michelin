<template>
    <el-container>
        <el-header height="40px">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>排队列表</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-main style="padding: 0;">
            <el-tabs v-model="activeName">
                <el-tab-pane label="正在排队" name="first">
                    <el-container>
                        <el-header style="display: flex; align-items: center; justify-content: space-between;">
                            <span>正在排队 {{ lining }}人</span>
                            <el-button type="primary" @click="dialogVisible = true">取号</el-button>
                            <el-dialog
                            title="取号"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose"
                            :modal="false"
                            >
                                <div class="get_num_box">
                                    <div 
                                    class="num_box_content" 
                                    :class="{active: isShow === index}" 
                                    v-for="(item, index) in preTable" 
                                    :key="index"
                                    @click="changActive(index)"
                                    >
                                        <h4>{{ item.position }}</h4>
                                        <p>{{ item.type }}</p>
                                        <span>{{ item.wait }}</span>
                                    </div>
                                </div>
                                <span slot="footer" class="dialog-footer">
                                    <el-button @click="dialogVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="submit">确 定</el-button>
                                </span>
                            </el-dialog>
                        </el-header>
                        <el-main>
                            <el-table
                                :data="table1"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="Id"
                                label="序号"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="LineId"
                                label="排队号码"
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
                                prop="time"
                                label="取号时间"
                                width="200"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="operator"
                                label="操作人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="user"
                                label="取号人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="status"
                                label="状态"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="操作"
                                width="200"
                                align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick1(scope.row)" type="text" size="small">叫号</el-button>
                                        <el-button type="text" size="small" @click="handleClick2(scope.row)">过号</el-button>
                                        <el-button type="text" size="small" @click="handleClick3(scope.row)">就餐</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            :current-page.sync="currentPage1"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="table1.length">
                            </el-pagination>
                        </el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="已就餐" name="second">
                    <el-container>
                        <el-header style="display: flex; align-items: center; justify-content: space-between;">
                            <span>正在排队 {{ lining }}人</span>
                            <el-button type="primary">取号</el-button>
                        </el-header>
                        <el-main>
                            <el-table
                                :data="table2"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="Id"
                                label="序号"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="LineId"
                                label="排队号码"
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
                                prop="time"
                                label="取号时间"
                                width="200"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="operator"
                                label="操作人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="user"
                                label="取号人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="status"
                                label="状态"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="操作"
                                width="200"
                                align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                    
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            :current-page.sync="currentPage2"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="table2.length">
                            </el-pagination>
                        </el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="已过号" name="third">
                    <el-container>
                        <el-header style="display: flex; align-items: center; justify-content: space-between;">
                            <span>正在排队 {{ lining }}人</span>
                            <el-button type="primary">取号</el-button>
                        </el-header>
                        <el-main>
                            <el-table
                                :data="table3"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="Id"
                                label="序号"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="LineId"
                                label="排队号码"
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
                                prop="time"
                                label="取号时间"
                                width="200"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="operator"
                                label="操作人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="user"
                                label="取号人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="status"
                                label="状态"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="操作"
                                width="200"
                                align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                        
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            :current-page.sync="currentPage3"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="table3.length">
                            </el-pagination>
                        </el-main>
                    </el-container>
                </el-tab-pane>
                <el-tab-pane label="已取消" name="fourth">
                    <el-container>
                        <el-header style="display: flex; align-items: center; justify-content: space-between;">
                            <span>正在排队 {{ lining }}人</span>
                            <el-button type="primary">取号</el-button>
                        </el-header>
                        <el-main>
                            <el-table
                                :data="table4"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                prop="Id"
                                label="序号"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="LineId"
                                label="排队号码"
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
                                prop="time"
                                label="取号时间"
                                width="200"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="operator"
                                label="操作人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="user"
                                label="取号人"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                prop="status"
                                label="状态"
                                align="center"
                                >
                                </el-table-column>
                                <el-table-column
                                label="操作"
                                width="200"
                                align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
                            
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-pagination
                            :current-page.sync="currentPage4"
                            :page-size="10"
                            layout="prev, pager, next, jumper"
                            :total="table4.length">
                            </el-pagination>
                        </el-main>
                    </el-container>
                </el-tab-pane>
            </el-tabs>
        </el-main>
    </el-container>
</template>

<script>
export default {
    data() {
      return {
        id: 1,
        currentPage1: 1,
        currentPage2: 1,
        currentPage3: 1,
        currentPage4: 1,
        dialogVisible: false,
        activeName: 'first',
        isShow: -1,
        preTable: [
            {
                position: '大厅',
                type: '2人桌',
                wait: '等待5桌'
            },
            {
                position: '大厅',
                type: '4人桌',
                wait: '等待5桌'
            },
            {
                position: '大厅',
                type: '6人桌',
                wait: '等待5桌'
            },
            {
                position: '大厅',
                type: '8人桌',
                wait: '等待5桌'
            },
            {
                position: '包厢',
                type: '6人桌',
                wait: '等待5桌'
            },
            {
                position: '包厢',
                type: '8人桌',
                wait: '等待5桌'
            }
        ],
        tableData1: [],
      };
    },
    computed: {
        table1() {
            return this.tableData1.filter((item) => item.status === '正在排队' || item.status === '叫号中')
        },
        table2() {
            return this.tableData1.filter((item) => item.status === '就餐')
        },
        table3() {
            return this.tableData1.filter((item) => item.status === '过号')
        },
        table4() {
            return this.tableData1.filter((item) => item.status === '取消')
        },
        lining() {
            let arr = this.tableData1.filter((item) => item.status === '正在排队')
            return arr.length
        }
    },
    created() {
        this.tableData1 = JSON.parse(localStorage.getItem('lineTable')) || []
    },
    methods: {
      handleClick1(scope) {
          scope.status = '叫号中'
      },
      handleClick2(scope) {
          scope.status = '过号'
      },
      handleClick3(scope) {
          scope.status = '就餐'
      },
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.isShow = -1
            done();
          })
          .catch(_ => {});
      },
      changActive(index) {
          this.isShow = index
      },
      submit() {
          let time = new Date()
          time = time.toLocaleString()
          let tableType = this.preTable[this.isShow].type
        //   console.log(time)
          this.tableData1.push({
                Id: this.id,
                LineId: 1001,
                tableType,
                time,
                operator: '1333333',
                user: '用户',
                status: '正在排队'
            },)
            localStorage.setItem('lineTable', JSON.stringify(this.tableData1))
            this.id++
            this.isShow = -1
            this.dialogVisible = false
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