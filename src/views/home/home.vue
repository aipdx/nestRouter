<template>
  <div>
    <!--头部和底部是共有的，中间变化-->
    <div class="home-wrap">
      <!--头部导航-->
      <div class="header">
        <div class="main-box g-of-h">
          <div class="nav-wrap">
            <ul>
              <li><router-link to="/home/index" class="link-a">首页</router-link></li>
              <li><router-link to="/home/musicNav" class="link-a">音乐</router-link></li>
              <li><router-link to="/home/moveNav" class="link-a">电影</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <!--中间通过路由显示的页面-->
      <div style="margin-top: 20px;">
        <router-view></router-view>
      </div>
    </div>
    <!--底部-->
    <div class="footer"></div>
  </div>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
.home-wrap{
  min-height: 808px;
  _height:808px;
}
.header{
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #303030;
}
.nav-wrap li{
  float: left;
  width: 60px;
  height: 60px;
  text-align: center;
  margin-left: 20px;
}
.nav-wrap li:first-child{
  margin-left: 0;
}
.nav-wrap li .link-a{
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 16px;
  display: block;
}
.nav-wrap li .link-a:hover{
  border-bottom: 2px solid #e5242b;
}
.nav-wrap .router-link-active{/*当前路由状态*/
  border-bottom: 2px solid #e5242b;
}
.footer{
  width: 100%;
  height: 150px;
  background-color: #ececec;
}
</style>
