<template>
  <div class="Index">
    <div class="top">
      <div class="widthCC">
        <span>
          您好，欢迎来到授律
          <a>免费注册</a>
          <a>登录</a>
        </span>
        <p>
          <a>首页</a>
          <a href="/Ask/Post/index.html">发咨询</a>
          <a href="/Lawyer/Index/index.html">找律师</a>
          <span onclick="eqcodem();">手机网站</span>
          <span onclick="eqcodew();">微信咨询</span>
          <span>全国客服热线：
            <b class="fontClrOrange">0531-88803703</b>
          </span>
        </p>
      </div>
    </div>

    <div class="header widthCC">
      <a href="/Home/Index/index.html">
        <div class="flt logo">
          <img src="../assets/logo.png">
        </div>
      </a>
      <div class="flt area">
        <a href="javascript:;">地区切换：上海
          <span></span>
        </a>
      </div>
  
      <div class="flr search">
        <input type="text" placeholder="请输入关键词搜索律师和咨询" value="" id="search">
        <button onclick="search()">搜 索</button>
      </div>
    </div>

    <div class="nav">
      <div class="widthCC">
        <a class="current" href="/Home/Index/index.html">首页</a>
        <a href="/Ask/Index/index.html">法律咨询</a>
        <a href="/Lawyer/Index/index.html">找律师</a>
        <a href="/Paid/News/lists.html">精选文章</a>
        <a href="/Cooperation/Index/index.html">异地合作</a>
        <a href="/Report/Index/lists.html">授律精选</a>
      </div>
    </div>

    <div class="widthCC overflowh marginTop20">
      <a href="/Ask/Post/index.html"><div class="banner flt"><img src="../assets/index_banner.png" alt=""></div></a>
      <div class="submitbox flr">
        <h2>发布咨询</h2>
        <form action="/Ask/Post/index.html" method="get">
          <textarea name="content" id="pcproblem" cols="30" rows="10" placeholder="请详细描述你所遇到的问题（不少于10个字），以便律师能够详细了解您的问题原因，给出针对性的语音解答。"></textarea>
          <button>确认提交</button>
        </form>
      </div>
    </div>
  
    <Footer></Footer>
    <foot> </foot>
      
  </div>
</template>

<script>
import foot from '../page/footer'
import Footer from './Footer'
export default {
  name: 'Index',
  data() {
    return {
      msg: 'Welcome to Showlv'
    }
  },
  components:{
    foot,
    Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body,
ul,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

.top {
  height: 28px;
  line-height: 28px;
  font-family: 宋体;
  color: rgb(100, 100, 100);
  font-size: 12px;
  border-bottom: 1px solid rgb(230, 230, 230);
  margin: 0;
}

.top div>span {
  float: left;
}

.top div p {
  float: right;
  position: relative;
}

.widthCC {
  width: 1200px;
  margin: auto;
}

.header {
  margin: auto;
  padding-top: 36px;
  padding-bottom: 24px;
  font-family: "宋体";
  font-size: 12px;
  height: 47px;
}

.flt {
  float: left;
}

.area {
  color: #00b38a;
  line-height: 22px;
  padding-left: 20px;
  position: relative;
}

.area>a {
  text-decoration: none;
  display: block;
  color: #00b38a;
  position: relative;
  height: 20px;
  padding-top: 30px;
  background: url(../assets/logo_bg.png) no-repeat left top;
  background-size: auto 50px;
  width: 254px;
  padding-left: 0px;
}

.flr {
  float: right;
}
.search {
    overflow: hidden;
}

.search input {
    float: left;
    width: 300px;
    height: 38px;
    color: #484848;
    padding-left: 40px;
    line-height: 36px;
    border: 1px solid #d7d7d7;
    background: #f4f4f4 url(../assets/icon_search.png) no-repeat 10px center;
    background-size: 20px auto;
}

.search button {
    float: left;
    width: 100px;
    height: 40px;
    line-height: 40px;
    background: #ff5555;
    cursor: pointer;
    color: #fff;
    text-align: center;
    font-size: 16px;
}

.nav {
    font-family: "宋体";
    font-size: 14px;
    height: 52px;
    background-color: #333;
}

.nav .current {
    background-color: #eb4546;
    background-image: none;
}

.nav a {
    float: left;
    height: 52px;
    line-height: 52px;
    color: #fff;
    font-weight: bold;
    width: 11.11%;
    text-align: center;
    background: url(../assets/nav_bg.png) no-repeat right center;
    background-size: 2px auto;
}

.marginTop20 {
    margin-top: 20px;
}

.overflowh {
    overflow: hidden;
}

.submitbox {
    width: 288px;
    height: 278px;
    border: 1px solid #d8d8d8;
}
.submitbox h2 {
    font-size: 20px;
    font-weight: bold;
    padding-left: 46px;
    background: url(../assets/icon_edit.png) no-repeat 16px center;
    border-bottom: 1px solid #d8d8d8;
    height: 52px;
    line-height: 52px;
}

.submitbox textarea {
    display: block;
    width: 244px;
    height: 130px;
    margin: 10px auto;
    border: 1px solid #d8d8d8;
    padding: 10px;
    font-size: 12px;
    resize: none;
}
.submitbox button {
    cursor: pointer;
    display: block;
    width: 268px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background-color: #00b38a;
    font-size: 20px;
    color: #fff;
    margin: 0 auto;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.weui_tabbar {
  position: fixed;
}
</style>
