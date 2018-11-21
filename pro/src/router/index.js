import Vue from 'vue'
import Router from 'vue-router'
import tabs from '@/components/tabs'
import find from '@/components/find/find'
import mine from '@/components/mine/mine'
import musrchome from '../components/musrchome/musrchome'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'tabs',
      component: tabs,
      children:[
        {
          path: 'mine',
          name: 'mine',
          component: mine,
        },
        {
          path: 'musrchome',
          name: 'musrchome',
          component: musrchome,
        },
        {
          path: 'find',
          name: 'find',
          component: find,
        },
         {
          path: '*',
          //重定向
          redirect: {name: 'musrchome'}
        }
      ]
    }
  ]
})
