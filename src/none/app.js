import Vue from 'vue';
import App from './app.vue';

import 'css/main.css';

import router from './router/index.js'
import store from './store/index.js'

/** mock */
require('./data/mock.js');

import sVue from 'components/index.js';
Vue.use(sVue);

// router.beforeEach((to, from, next) => {
//     const userInfo = store.state.userInfo;
//     if(to.matched.some( res => res.meta.auth )){
//        if(!userInfo){
//             next('/login');
//        }
//        next();
//     }
//     next();
// });

new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(App)
});