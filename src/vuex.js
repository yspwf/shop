import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        //total:0,
        auth:0,
        carts:[
            {id:2,name:'好衣服',tags:['白色','S码'],actual:20,privilege:100,num:2,select:true},
            {id:3,name:'好衣服',tags:['白色','S码'],actual:20,privilege:100,num:1,select:true}
        ]
    },
    getters:{
        totalNum(state){
            //return state.carts.length;
            const res = state.carts.map(function (item,index,ary ) {  
                return item.num;  
            });
            return res.reduce((a, b) => a+b);
        },
        totalPrice(state){
            let total = 0;
            state.carts.forEach((item)=>{
                if(item.select){
                    total += item.num * item.privilege;
                }
            });
            return total;
            // const res = state.carts.map((item, index, array) => {
            //     //console.log(item);
            //     if(item.select == true){
            //         return item;
            //     }
            // });
            
        }
    },
    mutations:{
        addCarts(state, data){
            if(data){
                let res = state.carts.find(function(element){
                    return element.id == data.id;
                });
                //console.log(res);
                if(res){
                    res.num++;
                }else{
                    data.num = 1;
                    state.carts.push(data);
                }
            }
            //state.carts.push(data);
            console.log(state.carts);
        },
        selectProduct(state, data){
            const res = state.carts.find((item)=>{
                    return item == data;
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
           
        }
    }
});

export default store;