import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);


import HOME from '@/home.vue';
import FIND from '@/find.vue';
import MINE from '@/mine.vue';

import HINDEX from '@/homeindex.vue';
import FINDEX from '@/findindex.vue';
import MINDEX from '@/mineindex.vue';
const routerlist = [
    {
        path:'/',
        redirect:'/home'
    },
    {
        path:'/home',
        component: HOME,
        children:[
            {
                path:'/index',
                component: HINDEX
            },
            {
                path:'/find',
                component: FINDEX
            },
            {
                path:'/mine',
                component: MINDEX
            }
        ]
    },
    // {
    //     path:'/find',
    //     component: FIND,
    //     children:[
    //         {
    //             path:'index',
    //             component: FINDEX
    //         }
    //     ]
    // },
    // {
    //     path:'/mine',
    //     component: MINE,
    //     children:[
    //         {
    //             path:'index',
    //             component: MINDEX
    //         }
    //     ]
    // }
]
const router = new VueRouter({
    mode:'history',
    routes: routerlist
});

export default router;