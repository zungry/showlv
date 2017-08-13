<template>
    <div class="btm">
        <div class="widthCC overflowh">
            <div class="btm_lft flt">
                <img src="../assets/logo_btm.png" alt="">
                <h4>客服热线：0531-88803703</h4>
                <p>微信扫一扫「法妞问答」立即开启语音咨询</p>
                <div class="btm_eq">
                    <img src="../assets/eqcode_lawyer155.png" alt="">
                </div>
            </div>
    
            <div class="btm_rt">
                <div class="btm_rt_nav">
                    <a href="/Home/Index/index.html" class="current">首页</a>
                    <a href="/Ask/Index/index.html">法律咨询</a>
                    <a href="/Lawyer/Index/index.html">找律师</a>
                    <a href="/Paid/News/lists.html">精选文章</a>
                    <a href="/Cooperation/Index/index.html">异地合作</a>
                    <a href="/Report/Index/lists.html">法妞精选</a>
                    <a href="/Home/Index/about.html">关于我们</a>
                </div>
    
                <div>
                    <p>济南暖云网络科技有限公司版权所有</p>
                    <p>Copyright 2010-2017 faniuwenda.com All Rights Reserved. 鲁ICP备16004136号-2</p>
                    <p>地址：济南市历下区浆水泉西路98号山东财经大学大学生创业园</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            msg: 'Footer'
        }
    }
}
</script>

<style>
.btm {
    height: 326px;
    background-color: #d2d0d0;
    margin-top: 100px;
    padding-top: 54px;
}



.widthCC {
    width: 1200px;
    margin: auto;
}

.overflowh {
    overflow: hidden;
}

.flt {
    float: left;
}

div {
    display: block;
}

.btm_lft h4 {
    font-size: 22px;
    line-height: 40px;
    font-weight: bold;
    color: #f55;
}

h4 {
    display: block;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    font-weight: bold;
}

p {
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
}

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
    text-align: left;
}
.btm_eq img {
    width: 155px;
}


img {
    outline: none;
    border: none;
}

.btm_rt {
    margin-left: 50%;
}

.btm_rt div {
    overflow: hidden;
}

.btm_rt_nav {
    padding-bottom: 50px;
}

.btm_rt div a {
    width: 20%;
    float: left;
    font-size: 14px;
    line-height: 34px;
    color: #000;
}

a {
    text-decoration: none;
}
.btm_rt p {
    clear: both;
    font-size: 14px;
    color: #000;
    line-height: 30px;
    text-align: left;
}
.weui_tabbar {
  position: fixed;
}

</style>
