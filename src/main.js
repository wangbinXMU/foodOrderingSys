import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import { store } from './store/store.js'

Vue.use(VueRouter);
// 为axios设置一个默认的请求地址
axios.defaults.baseURL = 'https://wd1347713459zgtrvt.wilddogio.com/'
// 全局配置axios,使得任何组件都能使用
Vue.prototype.axios = axios; //采用Vue实例.axios.method()调用
// 利用router实例配置二级路由
const router = new VueRouter({
  routes,
  mode: 'history',
  // 滚动行为
  // scrollBehavior(to, from, savedPostion) {
  // 进入主页时，滚动到y=100的位置
  // return {
  //   x:0,
  //   y:100
  // }
  // 进入主页时，滚动到第一个按钮的位置
  // return {
  //   selector:'.btn'
  // }
  //     if (savedPostion) {
  //       return savedPostion;
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   }
});
// 将这些属性挂载到实例上，即可以使用this(Vue)实例进行调用
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

// 全局守卫
// beforeEach表示进行如某个路由前进行操作
router.beforeEach((to, form, next) => {
  // to path拿到要跳转的路径
  console.log('1'+this.$store)
  if (store.getters.isLogin === true) {
    next();
  } else {
    if (to.path === '/login' || to.path === '/register') {
      next();
    } else {
      alert('还未登录，请先登录！');
      next('/login');
    }
  }
})




// 全局守卫
// beforeEach表示进行如某个路由前进行操作
// router.beforeEach( (to,form,next)=>{
//   // 判断store.getters.liLogin === false
//   // to path拿到要跳转的路径
//   if(to.path === '/login' || to.path ==='/register'){
//     next();
//   } else {
//     alert('还未登录，请先登录！');
//     next('/login');
//   }
// })

// 后置钩子
// router.afterEach( (to,from)=>{
//   // 进入该路由之后执行操作
//   alert('after');
// } )

// 路由独享守卫
// beforeEnter:(to,from,next)=>{}

