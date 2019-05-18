import Vue from 'vue';
import App from './app.vue';

// import VueRouter from 'vue-router';
// Vue.use(VueRouter);

// const router = new VueRouter({
//     mode:'history',
//     routes:routeList
// });

import router from './router.js';

import store from './vuex.js';


import './static/main.css';


router.beforeEach((to, from, next)=>{
    // to.matched.some(res => {
    //     console.log(res);
    // });
    const status = store.state.auth;
    if(to.matched.some(res => res.meta.auth)){
        //console.log('33333');
        //next('/detail');
        if(!status){
            next('/login');
        }else{
            next();
        }
        // if(to.path != '/detail'){
        //     next('/detail');
        // }else{
        //     next();
        // }
    }else{
        next();
    }
});

// router.beforeEach((to, from, next)=>{
//     console.log(store.state.auth);
//     if(!store.state.auth){
//         console.log('4444444');
//         ///router.push({name: 'detail'});
//         //return next({path: "/login"});
//         //next({path:"/detail"});
//         next('/detail');
//     }else{
//         console.log('6666666');
//         next();
//     }
//     next();
// });



new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(App)
});