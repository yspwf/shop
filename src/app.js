import Vue from 'vue';
import App from './app.vue';

import './static/main.css';

import router from './router/index.js';
import store from './store/index.js';


/** 组件 */
import sVue from './coms/index.js';
Vue.use(sVue);

import './data/mock.js'

router.beforeEach((to, from, next) => {
    if(to.matched.some(res => res.meta.auth)){
       //console.log(store.state.loginStatus);
       if(!store.state.loginStatus){
            next('/login');
       }else{
            next();
       }
    }
    next();
});

new Vue({
    el:"#app",
    router,
    store,
    render:h=>h(App)
});