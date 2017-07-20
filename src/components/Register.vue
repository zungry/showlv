<template>
    <div class="login-wrapper" transition="loginslide">
        <div class="header">
            <img src="../assets/logo.png">
        </div>
        <div class="body">
            <div class="-title">
                welcome to showlv
            </div>
            <div class="-name">
                <label>用户名：</label>
                <input type="text" v-model="name" placeholder="10字以内">
            </div>
            <div class="-weichat">
                <label>密码：</label>
                <input type="text" v-model="weichat" placeholder="方便私聊（选填）">
            </div>
            <div class="-login">
                <span class="-btn" @click="login()">注册</span>
            </div>
        </div>
        <div class="foot">
            <span>
                  你说，远方有什么？</span>
    
    
        </div>
    </div>
</template>

<<script>
    export default {
        name: 'Register',
        data() {
    
        }
    }
</script>

<style lang="less">
    
</style>
