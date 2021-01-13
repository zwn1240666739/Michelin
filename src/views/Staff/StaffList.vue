<template>
  <el-table
    :data="tableData"
    style="width: 100%; top:80px;"
   >
    <el-table-column
      fixed
      prop="name"
      label="姓名"
      width="300">
    </el-table-column>
    <el-table-column
      prop="region"
      label="岗位名称"
      width="320">
    </el-table-column>
    <el-table-column
      prop="account"
      label="登录账号"
      width="320">
    </el-table-column>
    <el-table-column
      prop="loginState"
      label="启用状态"
      width="320">
      <input type="checkbox" name="" id="" style="width:20px;height:20px">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="220">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>  
  </el-table>
</template>


<script>
import { mapState,mapMutations } from 'vuex'
  export default {
    
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      ...mapMutations('users',['getUsers','deleteUsers']),
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
        this.deleteUsers(this.tableData)
        localStorage.setItem('users',JSON.stringify(this.users))
      },
      // 查看
      handleClick(row) {
        console.log(row);
      },
      checkZip(){
        this.tableData.loginState = !this.tableData.loginState
      }
    },
    computed: {
      ...mapState('users',['users'])
    },
    created () {
      this.tableData = JSON.parse(localStorage.getItem('users'))
      this.getUsers(this.tableData)
    }
  }
</script>
<style lang="scss" scoped>
   .el-table {
    text-align: center;
  }
</style>