<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <!-- <toast></toast> -->
  </div>
</template>

<script lang="ts">
import { Hello } from './components';

export default {
  name: 'app',
  components: {
    Hello,
    // Toast,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
