import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由对应的组件
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import OrderGuide from './components/about/OrderGuide'
import History from './components/about/History'

// 三级路由对应的组件
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'

// 配置一级路由
export const routes = [
  // 命名路由,并且同时展示多个组件
  {
    path: '/', name: 'homeLink', components: {
      default: Home,
      // app.vue中由name属性指定渲染哪个组件
      'orderGuide': OrderGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  { path: '/menu', name: 'menuLink', component: Menu },
  { path: '/admin', name: 'adminLink', component: Admin },
  {
    path: '/about', name: 'aboutLink', redirect: '/about/contact/phone', component: About,
    // /about 的二级路由
    children: [
      {
        path: '/about/contact', name: 'contactLink', redirect: '/about/contact/personname', component: Contact,
        children: [
          { path: '/about/contact/personname', name: 'personName', component: PersonName },
          { path: '/about/contact/phone', name: 'phoneNumber', component: Phone },
        ]
      },
      { path: '/about/history', name: 'historyLink', component: History },
      { path: '/about/delivery', name: 'deliveryLink', component: Delivery },
      { path: '/about/orderGuide', name: 'orderGuideLink', component: OrderGuide },
    ]
  },
  { path: '/login', name: 'loginLink', component: Login },
  { path: '/register', name: 'registerLink', component: Register },
  // 如果用户输入的路由没有与之匹配的则定向到根路径
  { path: '*', redirect: '/' }

]

// 后置钩子
// router.afterEach( (to,from)=>{
//   // 进入该路由之后执行操作
//   alert('after');
// } )

// 路由独享守卫，作为路由的配置项，与{path：xx}并列
// beforeEnter:(to,from,next)=>{}
