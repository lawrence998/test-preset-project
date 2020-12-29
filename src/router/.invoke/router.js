import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export const routes = [{
    component: () => import('@/views/hello/index.vue'),
    name: 'hello',
    path: '/hello',
  },
  {
    component: () => import('@/views/svgIcons/index.vue'),
    name: 'svgIcons',
    path: '/svgIcons',
  },
  {
    component: () => import('@/views/test/index.vue'),
    name: 'test',
    path: '/test',
  },
  {
    component: () => import('@/views/vueListview/index.vue'),
    name: 'vueListview',
    path: '/vueListview',
  },
  {
    component: () => import('@/views/wanshe/index.vue'),
    name: 'wanshe',
    path: '/wanshe',
  },
  {
    path: '/',
    redirect: '/hello'
  },
];
const router = new Router({
  mode: 'hash',
  routes,
});
export default router;
