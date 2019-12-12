import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home/home.vue'
import index from '../views/index/index.vue'
import mainMove from '../views/move/mainMove.vue'
import notLikeMove from '../views/move/notLikeMove.vue'
import moveNav from '../views/move/moveNav.vue'
import musicNav from '../views/music/musicNav.vue'
import mainMusic from '../views/music/mainMusic.vue'
import notLikeMusic from '../views/music/notLikeMusic.vue'

Vue.use(Router)
const router = new Router({
  mode:'history',
  routes: [
    {path: '*', redirect: 'home'},/*从定向到home*/
    { name:'home',path:'/home',component:home,redirect: '/home/index',
      children:[
        { name:'index',path:'index',component:index,
          meta: {
            title: '首页',
          },
        },
        { name:'moveNav',path:'moveNav',component:moveNav,redirect: '/home/moveNav/mainMove',
          children: [
            { name:'mainMove',path:'mainMove',component:mainMove,
              meta: {
                title: '喜欢的电影',
              },
            },
            { name:'notLikeMove',path:'notLikeMove',component:notLikeMove,
              meta: {
                title: '不喜欢的电影',
              },
            }
          ]
        },
        { name:'musicNav',path:'musicNav',component:musicNav,redirect: '/home/musicNav/mainMusic',
          children: [
            { name:'mainMusic',path:'mainMusic',component:mainMusic,
              meta: {
                title: '喜欢的音乐',
              },
            },
            { name:'notLikeMusic',path:'notLikeMusic',component:notLikeMusic,
              meta: {
                title: '不喜欢的音乐',
              },
            }
          ]
        },
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
