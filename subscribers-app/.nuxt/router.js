import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e2d6d1e = () => interopDefault(import('../pages/fun.vue' /* webpackChunkName: "pages/fun" */))
const _5fe1d7db = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _df22cee0 = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _d38b9678 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/fun",
    component: _0e2d6d1e,
    name: "fun"
  }, {
    path: "/login",
    component: _5fe1d7db,
    name: "login"
  }, {
    path: "/test",
    component: _df22cee0,
    name: "test"
  }, {
    path: "/",
    component: _d38b9678,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
