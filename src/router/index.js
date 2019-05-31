import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

// import INDEX from '../page/index.vue';
// import HOME from '../page/home.vue';
// import FIND from '../page/find.vue';
// import MINE from '../page/mine.vue';

const list = [
    {
        path:'/',
        redirect:'/home/home'
    },
    {
        path:'/home',
        name:'index',
        component:  r => require.ensure([], () => r(require('../page/index.vue'))),
        children:[
            {
                path:'home',
                name:'home',
                component:  r => require.ensure([], () => r(require('../page/home.vue')))
            },
            {
                path:'find',
                name:'find',
                component: r => require.ensure([], () => r(require('../page/find.vue')))
            },
            {
                path:'mine',
                name:'mine',
                component: r => require.ensure([], () => r(require('../page/mine.vue'))),
                meta:{
                    auth: true
                }
            },
            {
                path:'detail',
                name:'detail',
                component: r => require.ensure([], () => r(require('../page/detail.vue'))),
                meta:{
                    auth: true
                }
            },
            {
                path:'cart',
                name:'cart',
                component: r => require.ensure([], () => r(require('../page/cart.vue'))),
                meta:{
                    auth: true
                }
            },
            {
                path:'order',
                name:'order',
                component: r => require.ensure([], () => r(require('../page/orderDetail.vue'))),
                meta:{
                    auth: true
                }
            }
        ]
    },
    {
        path:'/login',
        component: r => require.ensure([], () => r(require('../page/login.vue'))),
    }
];

const router = new Router({
    mode:'hash',
    routes:list,
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
              resolve({ x: 0, y: 0 });
          })
    }
});

export default router;