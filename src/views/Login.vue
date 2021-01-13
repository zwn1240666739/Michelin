<template>
    <div class="body">
        <div class="outside">
                <span class="logo">LOGO</span>
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    style="margin: 10px 0"
                    autocomplete="off"
                    @input="remenber(username)"
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    autocomplete="off"
                />
                <div class="pwd">
                    <div>
                        <input type="checkbox" v-model="checked">
                        <span class="left">记住密码</span>
                    </div>
                    <span class="right" @click="forgetPassword">忘记密码</span>
                </div>
                <div style="margin: 16px;">
                    <van-button round block type="info" native-type="submit" id="submit">登录</van-button>
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
      username: '',
      password: '',
      checked: false
    };
  },
  methods: {
    onSubmit(values) {
        // console.log('submit', values);
        this.$http.post('http://127.0.0.1:65535/login',values).then(ret => {
          if (ret.code == 1000) {
              Toast('用户名或密码错误')
          } else {
              localStorage.setItem('_token',123)
              this.$router.push('/home/4-2')
          }
      })
    },
    remenber () {
        if (this.username == '') {
            this.password = ''
        }
    },
    forgetPassword () {
        this.$router.push('/fp')
    }
  },
  computed: {
      ...mapState('login',['users'])
  },
};
</script>
<style lang="scss" scoped>
    .outside {
        width: 540px;
        height: 416px;
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
        font-size: 42px;
        margin-bottom: 50px;
    }
    .left,.right {
        font-size: 14px;
        font-family: 'Arial Normal', 'Arial';
        color: #999999;
        font-weight: 400;
        font-style: normal;
        cursor: pointer;
    }
    .pwd {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
</style>