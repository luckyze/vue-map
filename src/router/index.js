import Vue from 'vue'
import Router from 'vue-router'
import mapdata from '../views/mapdata'
import linedata from '../views/linedata'


Vue.use(Router)

const routes =[
    {
      path: '/mapdata',
      component:mapdata
    },
    {
      path: '/linedata',
      component:linedata
    },
   
  ]

export default new Router({
  routes,
  mode:'history'
})
