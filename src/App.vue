<template>
<div class="weui_tab">
  <div class="weui-tab__panel">
    <div id="app">
        <router-view></router-view>
    </div>
  </div>
  <div class="weui_tabbar">
        <a href="" class="weui_tabbar_item weui_bar_item_on">
          <div class="weui_tabbar_icon">
            <img src="" alt="">
          </div>
          <p class="weui_tabbar_label">1</p>
        </a>
        <a href="" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="" alt="">
          </div>
          <p class="weui_tabbar_label">2</p>
        </a>
        <a href="" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="" alt="">
          </div>
          <p class="weui_tabbar_label">3</p>
        </a>
        <a href="" class="weui_tabbar_item">
          <div class="weui_tabbar_icon">
            <img src="" alt="">
          </div>
          <p class="weui_tabbar_label">4</p>
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.weui_tabbar {
  position: fixed;
}
</style>
