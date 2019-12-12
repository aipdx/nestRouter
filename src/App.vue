<template>
  <div id="app">
    <router-view></router-view> <!--是需要点击或者配置重定向才能显示的,匹配到的路由显示在这里-->
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() {

  },
  methods: {

  }
}
</script>

<style>

#app {
  font-family:'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ececec;
}
</style>
