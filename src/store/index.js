import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        bottomCurrent:1,
        loginStatus: false,
        carts:[
            {id:2,name:'好衣服',tags:['白色','S码'],actual:20,privilege:100,num:2,select:true},
            {id:3,name:'好衣服',tags:['白色','S码'],actual:20,privilege:100,num:1,select:true}
        ]
    },
    getters:{
        totalNum:(state)=>{
            //return state.carts.length;
            let numarr = state.carts.map(function(item,index,ary ){
                return item.num;
            });
            return numarr.reduce((a, b)=>{ return a+b });
        },
        totalPrice:(state)=>{
            let total = 0;
            state.carts.forEach((item,index,array)=>{
                if(item.select){
                    total += item.privilege*item.num;
                }
            });
            return total;
        }
    },
    mutations:{
        userLogin(state, data){
            if(data){
                state.loginStatus = true;
            }
        },
        addCarts(state, data){
            if(data){
                let res = state.carts.find(function(el){
                    return el.id == data.id;
                });
                //console.log(res);
                if(res){
                    res.num++;
                }else{
                    data.num = 1;
                    state.carts.push(data);
                }
                //console.log(res);
            }
        },
        selectProduct(state, data){
            const res = state.carts.find((item)=>{
                    return item.id == data;
            });
            res.select = false;
        },
        increaseNum(state, data){
            const res = state.carts.find((item)=>{
                return item == data;
            });
            res.num++;
        },
        decreaseNum(state, data){
            const res = state.carts.find((item)=>{
                return item == data;
            });
            if(res.num >0){
                res.num--;
            }
        },
    }
});

export default store;