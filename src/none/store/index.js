import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        num:1,
        userInfo: false
    },
    getters:{

    },
    mutations:{
        current:(state, value)=>{
            //console.log(value);
            state.num = value;
        }
    }
});

export default store;