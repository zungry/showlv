<template>
    <div class="login-wrapper" transition="loginslide">
        <div class="header">
            <img src="../assets/logo.png">
        </div>
        <div class="body">
            <div class="-title">
                welcome to showlv
            </div>
            <form>
                <div class="-name">
                    <label>用户名：</label>
                    <input type="text" v-model="user.username" placeholder="真实用户名">
                </div>
                <div class="-name">
                    <label>手机号：</label>
                    <input type="text" v-model="user.mobile" placeholder="11字号码">
                </div>
                <div class="-weichat">
                    <label>密码：</label>
                    <input type="text" v-model="user.passwd" placeholder="数字和字母组合">
                </div>
                <div class="-login">
                    <span class="-btn" @click="register()">注册</span>
                </div>
            </form>
        </div>
        <div class="foot">
            <span>
                你说，远方有什么？</span>
    
        </div>
    </div>
</template>

<<script>
    import Vue from 'vue';
    export default {
        name: 'Register',
        data() {
            return {
                user:{
                    username: '',
                    mobile: '',
                    passwd: ''
                }
            }
        },
        methods: {
            register() {
                alert(this.user.mobile);
                var formData = JSON.stringify(this.user);
                var url = "/user";
                Vue.http.post(url, formData).then(response => {
                    alert("注册成功");
                    this.$router.push('/')
                }, response => {
                    alert("err");
                })

            }
        }
    }
</script>

<style lang="less">

</style>
