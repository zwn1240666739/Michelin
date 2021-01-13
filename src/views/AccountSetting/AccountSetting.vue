<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="账户信息" name="first">
        <Message></Message>
    </el-tab-pane>
    <el-tab-pane label="修改密码" name="second">
        <ChangePassword></ChangePassword>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import Message from './Message'
import ChangePassword from './ChangePassword'
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    },
    components: {
        Message,
        ChangePassword
    }
  };
</script>