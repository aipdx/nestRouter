<template>
  <div class="main-box">
    <div class="move-wrap g-of-h">
      <div class="sub-menu g-f-l">
        <ul>
          <li><router-link to="mainMusic"class="nav-a" >我喜欢的音乐</router-link></li>
          <li><router-link to="notLikeMusic"class="nav-a" >不喜欢的音乐</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "musicNav"
}
</script>

<style scoped>
.sub-menu{
  width: 100px;
  padding-bottom: 10px;
  background-color: #fff;
}
.sub-menu li .nav-a{
  width: 100px;
  height: 30px;
  display: block;
  text-align: center;
  line-height: 30px;
}
.sub-menu li .nav-a:hover{
  background-color: #d0e9c6;
}
.sub-menu li .router-link-active{
  background-color: #d0e9c6;
}
</style>
