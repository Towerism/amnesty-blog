import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NewUser from '@/components/NewUser'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/',
    redirect: {
      name: 'Home'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/users/new',
    name: 'NewUser',
    component: NewUser,
    meta: {
      authRequired: true
    }
  }]
})

router.beforeEach((to, from, next) => {
  var authenticated = store.getters['auth/isAuthenticated']
  if ((to.path === '/login' || to.path === '/') && authenticated) {
    next('/home')
  }

  if (to.matched.some(r => r.meta.authRequired) && !authenticated) {
    next({ path: '/login', query: { redirect: to.fullPath } })
  } else {
    next()
  }
})

export default router
