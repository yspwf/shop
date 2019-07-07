import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

 import INDEX from '../page/index.vue';
 import HOME from '../page/home.vue';
 import FIND from '../page/find.vue';
 import MINE from '../page/mine.vue';
 import DETAIL from '../page/detail.vue';
 import CART from '../page/cart.vue';
 import ORDERDETAIL from '../page/orderDetail.vue';
 import LOGIN from '../page/login.vue';
 import DOOD from '../page/good.vue';
 import RECOMMEND from '../page/recommend.vue';

const list = [
    {
        path:'/',
        redirect:'/home/find/good'
    },
    {
        path:'/home',
        name:'index',
        component: INDEX,
        children:[
            {
                path:'home',
                name:'home',
                component: HOME
            },
            {
                path:'find',
                name:'find',
                component: FIND,
                children:[
                    {
                        path:'good',
                        name:'good',
                        component: DOOD
                    },
                    {
                        path:'recommend',
                        name:'recommend',
                        component: RECOMMEND
                    }
                ]
            },
            {
                path:'mine',
                name:'mine',
                component: MINE
            },
            {
                path:'detail',
                name:'detail',
                component:DETAIL,
                meta:{
                    auth: true
                }
            },
            {
                path:'cart',
                name:'cart',
                component: CART,
                meta:{
                    auth: true
                }
            },
            {
                path:'order',
                name:'order',
                component: ORDERDETAIL,
                meta:{
                    auth: true
                }
            }
        ]
    },
    {
        path:'/login',
        component: LOGIN,
    }
];



const router = new Router({
    mode:'history',
    routes:list,
    scrollBehavior (to, from, savedPosition) {
        return new Promise((resolve, reject) => {
              resolve({ x: 0, y: 0 });
          })
    }
});

export default router;