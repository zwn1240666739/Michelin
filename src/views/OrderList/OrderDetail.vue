<template>
    <div class="bigger">
        <div class="big">
            <div>
                <span class="el-icon-success"></span>
                <span class="text">使用中</span>
            </div>
            
            <el-row class="buttons">
                <el-button>释放桌台</el-button>
                <el-button>打印小票</el-button>
                <el-button>关闭</el-button>
            </el-row>
        </div>
        <div class="tables">
            <div class="singleTable">
                <span class="title">台桌信息</span>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%"
                    
                    >
                    <el-table-column
                    prop="deskNum"
                    label="桌号"
                    align="center"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="count"
                    label="就餐人数"
                    align="center"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="spend"
                    label="消费"
                    align="center"
                    >
                    </el-table-column>
                </el-table>
            </div>
            <div class="singleTable">
                <span class="title">菜品信息</span>
                <el-table
                    :data="foodData"
                    border
                    align="center"
                    style="width: 100%;">
                    <el-table-column
                    prop="message"
                    align="center"
                    label="菜品信息">
                    </el-table-column>
                    <el-table-column
                    prop="oldPrice"
                    align="center"
                    label="原价"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="reduce"
                    align="center"
                    label="折扣">
                    </el-table-column>
                    <el-table-column
                    prop="nowPrice"
                    align="center"
                    label="现价">
                    </el-table-column>
                </el-table>
            </div>
            <div class="singleTable">
                <span class="title">订单信息</span>
                <el-table
                :data="orderData"
                border
                style="width: 100%;">
                <el-table-column
                    prop="orderNum"
                    align="center"
                    label="订单编号">
                    </el-table-column>
                    <el-table-column
                    prop="orderTime"
                    align="center"
                    label="下单时间"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="orderMoney"
                    align="center"
                    label="订单金额">
                    </el-table-column>
                    <el-table-column
                    prop="reduceMoney"
                    align="center"
                    label="优惠金额">
                    </el-table-column>
                    <el-table-column
                    prop="payMethod"
                    align="center"
                    label="支付方式">
                    </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tableData: [{
          deskNum: '001',
          count: '3',
          spend: '￥1200'
        }],
        foodData: [
            {
                message: '珍珠翡翠白玉汤',
                oldPrice: '￥200',
                reduce: '--',
                nowPrice: '￥200'
            },
            {
                message: '珍珠翡翠白玉汤',
                oldPrice: '￥200',
                reduce: '--',
                nowPrice: '￥200'
            },
            {
                message: '珍珠翡翠白玉汤',
                oldPrice: '￥200',
                reduce: '--',
                nowPrice: '￥200'
            },
            {
                message: '珍珠翡翠白玉汤',
                oldPrice: '￥200',
                reduce: '--',
                nowPrice: '￥200'
            },
            {
                message: '珍珠翡翠白玉汤',
                oldPrice: '￥200',
                reduce: '--',
                nowPrice: '￥200',
            },
            {
                message: '合计',
                oldPrice: '￥1200',
                reduce: '--',
                nowPrice: '￥1200',
            }
        ],
        orderData: [{
            orderNum: '10001',
            orderTime: '2021-01-12',
            orderMoney: '￥700',
            reduceMoney: '￥100',
            payMethod: '在线支付'
        }]
      }
    }
  }
</script>
<style lang="scss" scoped>
    .bigger {
        padding: 0 100px;
    }
    .big {
        height: 58px;
        background-color: rgb(233, 239, 245);
        border: 1px solid rgb(228, 228, 228);
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }
    .el-icon-success {
        margin-left: 20px;
        font-size: 24px;
        color: green;
    }
    // .tables {
    //     padding: 0 100px;
    //     box-sizing: border-box;
    // }
    .singleTable + .singleTable {
        margin-top: 50px;
    }
    .text {
        color: green;
        font-size: 24px;
        font-weight: bold;
        margin-left: 5px;
    }
    .title {
        display: block;
        margin-bottom: 10px;
    }
</style>