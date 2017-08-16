<template>
  <div class="login-wrapper" transition="loginslide">
    <div class="header">
      <img src="../assets/logo.png">
      {{this.$store.state.userInfo}}
    </div>
    <div class="body">
      <div class="-title">
        welcome to showlv
      </div>
      <div class="-name">
        <label>用户名：</label>
        <input type="text" v-model="mobile" placeholder="11 number">
      </div>
      <div class="-weichat">
        <label>密码：</label>
        <input type="text" v-model="passwd" placeholder="password">
      </div>
      <div class="-login">
        <span class="-btn" @click="login()">登录</span>
      </div>
      <div class="-login">
        <span class="-btn" @click="register()">注册</span>
      </div>
    </div>
        <heads> </heads>
    <foot></foot>
  </div>
  
</template>

<script>
import Vue from 'vue';
import foot from '../page/footer'
import {sendLogin} from '../service/getData'
import heads from './header/head'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'Login',
  components:{
    foot,
    heads
  },
  data() {
    return {
      userInfo: '',
      mobile: '',
      passwd: ''
    }
  },
  computed: {

    //判断手机号码
    rightPhoneNumber: function () {
      return /^1\d{10}$/gi.test(this.phoneNumber)
    }
  },
  methods: {
    ...mapMutations([
      'RECORD_USERINFO',
    ]),

    register() {
      this.$router.push('/register')
    },
    async login() {
      this.userInfo = await sendLogin(this.mobile, this.passwd);
      console.log(this.userInfo.username);
      this.RECORD_USERINFO(this.userInfo);
      this.$router.go(-1);
    /*
      var that = this;
      var url = '/user?mobile=' + this.mobile + '&passwd=' + this.passwd
      Vue.http.get(url).then(response => {
      if (response.data.code == 0) {
        this.$router.push('/');
      }else {
        alert("手机号或密码错误");
      }
    }, response => {
        alert("err");
      })
      */
    }
  }
  // ready(){

  // },
  // methods:{
  //   send(msg){
  //     CHAT.submit(msg)
  //     this.msg=''
  //     console.log(CHAT)
  //   },
  //   login(){
  //     if (!this.name.trim()) {
  //       alert("昵称不能为空！")
  //       return
  //     }
  //     this.$router.go('/')
  //   }
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<<style lang='less'>
  .login-wrapper {
    background-color: #fff;
    top: 0;
    left: -100%;
    right: 100%;
    bottom: 0;
  }
  
  .header {
    margin: 40px;
  }
  .body {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  
  .-title {
    height: 80px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    color: #999;
  }
  
  .-name,
  .-weichat {
    /*background-color: #eee;*/
    display: flex;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #999;
    border-top: solid 1px rgba(0, 0, 0, 0.05);
    lable {
      color: #999;
    }
    input {
      box-sizing: border-box;
      height: 25px;
      border: none;
      outline: none;
      padding: 5px;
      color: #666;
      background-color: rgba(0, 0, 0, 0.02);
    }
  }
  
  .-login {
    display: flex;
    height: 80px;
    align-items: center;
    font-size: 16px;
    color: #999;
    .-btn {
      background-color: #3CAF36;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 40px;
      margin: 10px auto;
      color: #fff;
      font-weight: bolder;
    }
    .right_phone_number{
      background-color: #4cd964;
    }
  }
</style>
