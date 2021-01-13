<template>
    <div class="body">
        <div class="outside">
            <span class="logo">找回密码</span>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="mobile"
                    name="mobile"
                    label="手机号"
                    placeholder="请输入手机号"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    style="margin: 10px 0"
                    autocomplete="off"
                />
                <div class="checkBox">
                    <van-field
                    v-model="checknum"
                    name="checknum"
                    label="验证码"
                    placeholder="请输入验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                    style="margin: 10px 0"
                    autocomplete="off"
                    @blur="errorCheck"
                    />
                    <div class="checkbox" @click="changeNumber">
                        <span class="one" style="color: red;">{{checkNum.one}}</span>
                        <span class="two" style="color: blue;">{{checkNum.two}}</span>
                        <span class="three" style="color: green;">{{checkNum.three}}</span>
                        <span class="four" style="color: black;">{{checkNum.four}}</span>
                    </div>
                </div>
                
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="新密码"
                    placeholder="新密码"
                    :rules="[{ required: true, message: '请填写新密码' }]"
                    autocomplete="off"
                />
                <van-field
                    v-model="checkNewPassword"
                    type="password"
                    name="checkNewPassword"
                    label="确认新密码"
                    placeholder="请输入新密码"
                    :rules="[{ required: true, message: '请填写新密码' }]"
                    autocomplete="off"
                    @blur="passwordErr"
                />
                <div style="margin: 16px;">
                    <van-button :disabled="resultState" round block type="info" native-type="submit" id="submit">确认</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Form,Field,Button,Toast } from 'vant';
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'

Vue.use(Form);
Vue.use(Field);
Vue.use(Button);
export default {
  data() {
    return {
      mobile: '',
      password: '',
      checknum: '',
    //   newPassword: '',
      checkNewPassword:'',
      checkNum: {
          one: parseInt(Math.random() * 10),
          two: parseInt(Math.random() * 10),
          three: parseInt(Math.random() * 10),
          four: parseInt(Math.random() * 10)
      },
      result: true,
      flag: {
          flagOne: false,
          flagTwo: false
      }
    };
  },
  methods: {
    onSubmit(values) {
    //   console.log('submit', values);
        this.$http.post('http://127.0.0.1:65535/changePassword',{"mobile": values.mobile,"password": values.password}).then(ret => {
            Toast(ret.message)
            if (!ret.code) {
                this.$router.push('/')
            }
        })
        
    },
    changeNumber () {
        let checkNum = {
          one: parseInt(Math.random() * 10),
          two: parseInt(Math.random() * 10),
          three: parseInt(Math.random() * 10),
          four: parseInt(Math.random() * 10)
        }
        this.checkNum = checkNum
    },
    errorCheck () {
        let checknum = ''
        for (var key in this.checkNum) {
            checknum += this.checkNum[key]
        }
        if (this.checknum != checknum) {
            this.flag.flagOne = false
            Toast('验证码错误')
        } else {
            this.flag.flagOne = true
        }
    },
    passwordErr () {
        if (this.password != this.checkNewPassword) {
            this.flag.flagTwo = false
            Toast('两次输入密码不一致')
        } else {
            this.flag.flagTwo = true
        }
    }
  },
  computed: {
      ...mapState('login',['users']),
      resultState () {
          if (this.flag.flagOne && this.flag.flagTwo) {
            return false
          } else {
              return true
          }
      }
  }
};
</script>
<style lang="scss" scoped>
    .outside {
        width: 540px;
        padding: 50px;
        box-sizing: border-box;
        margin: auto;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .body {
        width: 100%;
        height: 657px;
        display: flex;
        background-color: rgba(106, 126, 153, 1);;
    }
    #submit {
        border-width: 0px;
        width: 322px;
        height: 39px;
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
    .logo {
        font-family: '微软雅黑';
        font-weight: 400;
        font-style: normal;
        color: #3BB19C;
        text-align: center;
        font-size: 35px;
        margin-bottom: 40px;
    }
    .checkbox {
        width: 100px;
        height: 45px;
        border: 1px solid rgba(228, 228, 228, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        // position: absolute;
        // top: -7px;
        // right: 15px;
        // z-index: 2;
        cursor: pointer;
        margin-right: 15px;
    }
    .checkBox {
        // position: relative;
        display: flex;
        align-self: center;
    }
    .checkbox span {
        margin: 0 5px;
    }
</style>