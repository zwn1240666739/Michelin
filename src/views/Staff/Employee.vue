<template>
   <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="岗位" prop="region">
    <el-select v-model="ruleForm.region" placeholder="请选择岗位">
      <el-option label="前台经理" value="前台经理"></el-option>
      <el-option label="店长" value="店长"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="登录账号" prop="account">
    <el-input v-model="ruleForm.account"></el-input>
  </el-form-item>
  <el-form-item label="登录密码" prop="pass">
    <el-input v-model="ruleForm.pass"></el-input>
  </el-form-item>
  <el-form-item label="选择角色" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="角色1" name="type"></el-checkbox>
      <el-checkbox label="角色2" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="是否启用" prop="resource">
    <el-radio-group v-model="rules.resource">
      <el-radio label="是"></el-radio>
      <el-radio label="否"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>
<script>
import { mapState,mapMutations } from 'vuex'
export default {
    
    data() {
      return {
        ruleForm: {
        // 姓名
          name: '',
          // 岗位
          region: '',
        // 选择的角色
          type: [],
           //登录账号
          account: '',
          //密码
          pass: '',
        },
        rules: {
            // 验证姓名
          name: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          // 岗位
          region: [
            { required: true, message: '请选择岗位', trigger: 'change' }
          ],
          // 密码
          pass: [
              { required: true, },
          ],
          // 账号
          account: [
              { required: true, },
          ],
          //橘色
          type: [
            { type: 'array', required: true, message: '请至少选择一个角色', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择是否启用', trigger: 'change' }
          ],
          
        }
      };
    },
    methods: {
      ...mapMutations('users',['addUsers']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // console.log(this.ruleForm)
            let users = {
              name: this.ruleForm.name,
              region: this.ruleForm.region,
              account: this.ruleForm.account,
              loginState: true,
            }
            this.addUsers(users)
            localStorage.setItem('users',JSON.stringify(this.users))
            this.$router.push('/home/9-1')
          } else {
            // console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    computed: {
      ...mapState('users',['users'])
    }
  }

</script>