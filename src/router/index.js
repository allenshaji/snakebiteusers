import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

// Widgets
import widgets from '../views/widgets'

// UI Components
import alerts from '../views/ui-components/alerts'
import badges from '../views/ui-components/badges'
import breadcrumbs from '../views/ui-components/breadcrumbs'
import buttons from '../views/ui-components/buttons'
import carousel from '../views/ui-components/carousel'
import dropdowns from '../views/ui-components/dropdowns'
import icons from '../views/ui-components/icons'
import modals from '../views/ui-components/modals'
import paginations from '../views/ui-components/paginations'
import progress from '../views/ui-components/progress'
import tables from '../views/ui-components/tables'
import typography from '../views/ui-components/typography'
import tabs from '../views/ui-components/tabs'
import tooltips from '../views/ui-components/tooltips'

// Form Components
import forms from '../views/forms/forms'
import viewlist from '../views/forms/viewlist'
import userlist from '../views/forms/userlist'
import editsnake from '../views/forms/editsnake'
import newuserlist from '../views/forms/newuserlist'
import rescuerlist from '../views/forms/rescuerlist'
import rescuerapproval from '../views/forms/rescuerapproval'
import locations from '../views/forms/locations.vue'
import snakedetails from '../views/forms/snakedetails.vue'
import addexperts from '../views/forms/addexperts.vue'
import expertslist from '../views/forms/expertslist.vue'
import viewlistexperts from '../views/forms/viewlistexperts.vue'
import snakebitereports from '../views/forms/snakebitereports.vue'
import addhospital from '../views/forms/addhospital.vue'
import viewhospital from '../views/forms/viewhospital.vue'
import identifyview from '../views/forms/identifyview.vue'
import identifyreply from '../views/forms/identifyreply.vue'

import error404 from '../views/sample-pages/error-404'
import error500 from '../views/sample-pages/error-500'
import login from '../views/sample-pages/login'
import register from '../views/sample-pages/register'

import store from '../store'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [{
    path: '/',
    name: 'dashboard',
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/widgets',
    name: 'widgets',
    component: widgets
  },
  {
    path: '/404',
    name: 'error-404',
    component: error404
  },
  {
    path: '/500',
    name: 'error-500',
    component: error500
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/alerts',
    name: 'alerts',
    component: alerts
  },
  {
    path: '/badges',
    name: 'badges',
    component: badges
  },
  {
    path: '/breadcrumbs',
    name: 'breadcrumbs',
    component: breadcrumbs
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: buttons
  },
  {
    path: '/carousel',
    name: 'carousel',
    component: carousel
  },
  {
    path: '/dropdowns',
    name: 'dropdowns',
    component: dropdowns
  },
  {
    path: '/icons',
    name: 'icons',
    component: icons
  },
  {
    path: '/modals',
    name: 'modals',
    component: modals
  },
  {
    path: '/paginations',
    name: 'paginations',
    component: paginations
  },
  {
    path: '/progress',
    name: 'progress',
    component: progress
  },
  {
    path: '/tables',
    name: 'tables',
    component: tables
  },
  {
    path: '/typography',
    name: 'typography',
    component: typography
  },
  {
    path: '/tabs',
    name: 'tabs',
    component: tabs
  },
  {
    path: '/tooltips',
    name: 'tooltips',
    component: tooltips
  },
  {
    path: '/forms',
    name: 'forms',
    component: forms
  },
  {
    path: '/viewlist',
    name: 'viewlist',
    component: viewlist
  },
  {
    path: '/identifyview',
    name: 'identifyview',
    component: identifyview
  },
  {
    path: '/viewlistexperts',
    name: 'viewlistexperts',
    component: viewlistexperts
  },
  {
    path: '/userlist',
    name: 'userlist',
    component: userlist
  },
  {
    path: '/newuserlist',
    name: 'newuserlist',
    component: newuserlist
  },
  {
    path: '/rescuerlist',
    name: 'rescuerlist',
    component: rescuerlist
  },
  {
    path: '/expertslist',
    name: 'expertslist',
    component: expertslist
  },
  {
    path: '/rescuerapproval',
    name: 'rescuerapproval',
    component: rescuerapproval
  },
  {
    path: '/locations',
    name: 'locations',
    component: locations
  },
  {
    path: '/snakebitereports',
    name: 'snakebitereports',
    component: snakebitereports
  },
  {
    path: '/addexperts',
    name: 'addexperts',
    component: addexperts
  },
  {
    path: '/editsnake/:id',
    name: 'editsnake',
    component: editsnake,
    props: true
  },
  {
    path: '/identifyreply/:id',
    name: 'identifyreply',
    component: identifyreply,
    props: true
  },
  {
    path: '/addhospital',
    name: 'addhospital',
    component: addhospital
  },
  {
    path: '/viewhospital',
    name: 'viewhospital',
    component: viewhospital
  },
  {
    path: '/snakedetails/:id',
    name: 'snakedetails',
    component: snakedetails,
    props: true
  }]
})

router.beforeEach((to, from, next) => {
  // check if the route requires authentication and user is not logged in
  if (to.matched.some(route => route.meta.requiresAuth) && !store.state.isLoggedIn) {
    // redirect to login page
    next({
      name: 'login'
    })
    return
  }

  // if logged in redirect to dashboard
  if (to.path === '/login' && store.state.isLoggedIn) {
    next({
      path: '/'
    })
    return
  }
  next()
})

export default router
