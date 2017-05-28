import Vue from 'vue'
import Router from 'vue-router'
import mycanvas from '@/components/myCanvas'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'mycanvas',
    component: mycanvas
  }]
})
