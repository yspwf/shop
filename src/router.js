import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routeList = [
    {
        path:'/',
        redirect:'/home',
    },{
        path:'/home',
        component: r => require.ensure([], () => r(require('./page/home.vue'))),
        meta:{
            index:0
        }
    },
    {
        path:'/category',
        component: r => require.ensure([], () => r(require('./page/category.vue'))),
        meta:{
            index:1
        }
    },
    {
        path:'/find',
        component: r => require.ensure([], () => r(require('./page/find.vue'))),
        meta:{
            index:2
        }
    },
    {
        path:'/mine',
        component: r => require.ensure([], () => r(require('./page/mine.vue'))),
        meta:{
            index:3,
            auth: true,
        }
    },
    {
        name:'detail',
        path:'/detail',
        component: r => require.ensure([], () => r(require('./page/detail.vue'))),
        meta:{
            index:4
        }
    },
    {
        path:'/cart',
        component: r => require.ensure([], () => r(require('./page/cart.vue'))),
        meta:{
            index:5
        }
    },
    {
        path:'/order',
        component: r => require.ensure([], () => r(require('./page/orderDetail.vue'))),
        meta:{
            index:6
        }
    },
    {
        path:'/login',
        component: r => require.ensure([], () => r(require('./page/login.vue'))),
        meta:{
            index:7
        }
    },
    {
        path:'/test',
        component: r => require.ensure([], () => r(require('./page/test.vue'))),

    }
];

const router = new Router({
        mode:'hash',
        routes: routeList
});



export default router;