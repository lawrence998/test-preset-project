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
    component: () => import('@/views/vueListview/index.vue'),
    name: 'vueListview',
    path: '/vueListview',
  },
  {
    component: () => import('@/views/world/index.vue'),
    name: 'world',
    path: '/world',
  },
];
const router = new Router({
  mode: 'history',
  routes,
});
export default router;
