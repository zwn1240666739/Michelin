<template>
  <el-table
    :data="tableData"
    style="width: 100%; top:80px;"
   >
    <el-table-column
      fixed
      prop="orderNum"
      label="订单编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="orderTime"
      label="下单时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="orderMoney"
      label="订单金额"
      width="120">
    </el-table-column>
    <el-table-column
      prop="deskNum"
      label="桌号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="orderState"
      label="订单状态"
      width="300">
    </el-table-column>
    <!-- <el-table-column
      prop="zip"
      label="售窘开关"
      width="120">
      <input type="checkbox" name="" id="" style="width:20px;height:20px">
    </el-table-column> -->
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <!-- <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button> -->
      </template>
    </el-table-column>
    
  </el-table>
</template>


<script>
import { mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations(['getOrderDetail']),
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 查看
      handleClick(row) {
        console.log(row);
        this.getOrderDetail(row)
        this.$router.push('/OrderDetail')
      }
    },
    data() {
      return {
        tableData: []
      }
    },
    created () {
        this.$http.get('http://127.0.0.1:65535/getOrderList').then(ret => {
          console.log(ret.data)
            let data = ret.data
            this.tableData = data
        })
    }
  }
</script>
<style lang="scss" scoped>
   .el-table {
    text-align: center;
  }
</style>