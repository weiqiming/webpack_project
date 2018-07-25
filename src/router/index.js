import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
import Login from '@/views/Login'
import Home from '@/views/Home'
import Welcome from '@/views/welcome/Welcome'
import User from '@/views/user/user'




Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path:'/',
      name:'Home',
      component:Home,
      redirect:{
        path:'Welcome'
      },
      children:[
          {
            path:'Welcome',
            name:'Welcome',
            component:Welcome
          },
         {
           path:'user',
           name:'User',
           component:User
         }
      ]
    }
  ]
})
router.beforeEach((to,from,next) =>{
  let token = localStorage.getItem('mytoken')
  if(token) next()
  else{
    if(to.path !== '/login') next({
      path:'/login'
    })
    else next()
  }
})

export default router
