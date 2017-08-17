<template>
  <div>
    <group>
      <cell title="vue" value="cool"></cell>
    </group>
    <swiper :list="list" auto> </swiper>
  </div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Swiper from 'vux/src/components/swiper/swiper.vue'

export default {
    data: function() {
            return {
                list: [{
                    url: "http://localhost:8080/Ask/Post/index.html",
                    img: '../assets/1.jpg',
                    title: 'test1'
                }, {
                    url: 'http://www.baidu.com',
                    img: '../assets/2.jpg',
                    title: '茶包VS原叶茶'
                }]
            }
        },

  components: {
    Group,
    Cell,
    Swiper
  }
}
</script>
