<template>
    <div> 
        <p class="mendian">门店设置</p>
        <el-container>
            <el-aside width="200px">下单预付款</el-aside>
            <el-main>
                 <el-radio v-model="radio" label="1" class="fukuan">先付款在就餐 </el-radio>
                 <p class="sizes">&nbsp;要去顾客选定菜品后需进行付款，订单<br/>
                 生效（后厨才会打印菜品）</p>
            </el-main>           
        </el-container>
        <el-container>
            <el-aside width="200px">餐桌释放空置</el-aside>
            <el-main>
                已结账后过
                <input type="text" name="" id="inp" > 
                分钟，自动释放餐桌
                 <p class="sizes">&nbsp;当顾客付款成功，餐桌更改为'已结账'状态<br/>
                 当时间距离达到设置的时间，自动变成空闲状态</p>
            </el-main>           
        </el-container>
        <el-container>
            <el-aside width="200px">台账打印模式</el-aside>
            <el-main>
                 <el-radio v-model="radio" label="2">付款成功自动打印 </el-radio>
                 <p class="sizes">&nbsp;后厨菜单打印的同时，自动打印台单，<br/>
                 无需门店手工打印</p>
            </el-main>  
            <el-main>
                 <el-radio v-model="radio" label="3">手动打印 </el-radio>
                  <p class="sizes">&nbsp;需要人工手动在PC端打印</p>
            </el-main>            
        </el-container>
        <div class="line"></div>
        <button class="preservation">
            保存
        </button>
    </div>
</template>

<script>
export default {
    data () {
      return {
        radio: '1'
      };
    }
    
}
</script>

<style lang='scss' scoped>
.preservation{
    cursor: pointer;
    border-width: 0px;
    position: absolute;
    left: 612px;
    top: 600px;
    width: 180px;
    height: 35px;
    background: inherit;
    background-color: rgba(26, 188, 156, 1);
    border: none;
    border-radius: 3px;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
    font-family: '微软雅黑';
    font-weight: 400;
    font-style: normal;
    color: #FFFFFF;
}
.line{
    border-bottom: 1px solid rgba(233, 239, 245, 1);
    margin-top: 80px;
}
#inp{
    width: 85px;
    height: 31px;
    border: 1px solid #999;
    border-radius: 4px;
}
.sizes{
    font-size: 14px;
    color: #999;
    text-align: left;
    margin-top: 10px;
}
.fukuan{
    font-size: 16px;
    color: #333;
}
.mendian{
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #666666;
    line-height: 46px;
    padding-left: 14px;
    background-color: rgba(233, 239, 245, 1);
}
.el-header, .el-footer {
    font-size: 16px;
    color: #333;
    border:1px solid rgba(228, 228, 228, 1);
    // color: #333;
    text-align: center;
    line-height: 40px;
  }
  
  .el-aside {
    font-size: 16px;
    color: #333;
    border:1px solid rgba(228, 228, 228, 1);
    // color: #333;
    text-align: center;
    line-height: 124px;
  }
  
  .el-main {
    font-size: 16px;
    color: #333;
    border:1px solid rgba(228, 228, 228, 1);
    // color: #333;
    // // text-align: ;
    // line-height: 80px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>