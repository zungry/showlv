<template>
  <div class="404">
      <div class="header">
        <img src="../assets/logo.png">
      </div>
      <test></test>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import test from '../page/test';
import Vue from 'vue';
export default {
  name: 'NotFound',
  data () {
    return {
      msg: '404'
    }
  },
  components: {
    test
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
</style>
