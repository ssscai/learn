import Vue from 'vue'
import Router from 'vue-router'
import login from '@/login.vue'
import reg from '@/reg.vue'
// import cmp1 from '@/components/cmp'
// import HelloWorld from '@/components/HelloWorld'
// @符号代表src的根
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/test',
    //   name: 'cmp',
    //   component: cmp1
    // },
     {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    }
  ]
})
