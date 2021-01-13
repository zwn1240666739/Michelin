<template>
  <el-table
    :data="tableData"
    style="width: 100%; top:80px"
   >
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="菜品名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="sort"
      label="排序"
      width="120">
    </el-table-column>
    <el-table-column
      prop="volume"
      label="销量"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="售罄开关"
      width="120">
      <input type="checkbox" name="" id="" style="width:20px;height:20px">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
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
    methods: {
      // 删除
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      // 查看
      handleClick(row) {
        console.log(row);
      },
      ...mapMutations('newFoods',['toFoodsList'])
    },
    data() {
      return {
        tableData: []
      }
    },
    computed: {
      ...mapState('newFoods',['foodsList'])
    },
    created () {
      this.tableData = JSON.parse(localStorage.getItem('foodsList')) || []
      this.toFoodsList(this.tableData)
    }
  }
</script>