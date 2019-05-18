<template>
    <div class="cart">
        <title-top title="购物车"></title-top>
        
        <div class="cartlist">
            <div class="cart" v-for="(item, index) in products" :key="index">
                <div class="checkbox">
                    <!-- <input type="checkbox" name="" id=""> -->
                    <input type='checkbox' id='checkbox' @click="selectPro(item)" v-model="item.select">
                </div>
                <div class="proimg">
                    <img src="/src/static/images/4.jpg" alt="">
                </div>
                <div class="discribe">
                    <div class="name">
                        {{item.name}}
                    </div>
                    <div class="attribute">
                        <label for="" v-for="(tag, index) in item.tags" :key="index">{{tag}}</label> 
                        <!-- <label for="">S码</label>
                        <label for="">白色</label> -->
                    </div>
                    <div class="price">
                        <label for="" class="actual">￥{{item.actual}}</label>
                        <label for="" class="privilege">￥{{item.privilege}}</label>
                    </div>
                </div>
                <div class="btn">
                    <button class="reduce" @click="decrease(item)">-</button>
                    <span>{{item.num}}</span>
                    <button class="increase" @click="increase(item)">+</button>
                </div>
            </div>

            <!-- 
            <div class="cart">
                <div class="checkbox">
                    <input type='checkbox' id='checkbox'>
                </div>
                <div class="proimg">
                    <img src="/src/static/images/4.jpg" alt="">
                </div>
                <div class="discribe">
                    <div class="name">
                        一件衣服
                    </div>
                    <div class="attribute">
                        <label for="">S码</label>
                        <label for="">白色</label>
                    </div>
                    <div class="price">
                        <label for="" class="actual">￥299</label>
                        <label for="" class="privilege">￥199</label>
                    </div>
                </div>
                <div class="btn">
                    <button class="reduce">-</button>
                    <span>1</span>
                    <button class="increase">+</button>
                </div>
            </div> -->
        </div>
        

        <div class="bottom">
            <div class="bottomNav">
                <div class="servericon">
                <div class="checkbox">
                        <!-- <input type="checkbox" name="" id=""> -->
                        <input type='checkbox' id='checkbox' v-model="allstatus">
                        <label for="">全选</label>
                </div>
                <span>￥{{allPrice}}</span>
                </div>
                <div class="btn">
                    <router-link to="/order" class="buy">去结算</router-link>
                </div>
            </div>
        </div>
        <!-- <orderBtn :select="status" v-on:change="changeStatus" ref="cartBtn"></orderBtn> -->
        <!-- <orderBtn v-on:change="changeStatus" ref="cartBtn"></orderBtn> -->
    </div>
</template>

<script>
import title from '../components/title.vue';
import order from '../components/order.vue';
export default {
    data() {
        return {
           // select: true
           //all: true
           //product: this.products,
        }
    },
    methods: {
        // changeStatus(){
        //     //console.log('status');
        //     this.product = this.$store.state.carts.map((item, index, array) => {
        //         item.select = !item.select;
        //         return item;
        //     });
        //     console.log(this.product);
        // },
        // statusSelect(data){
        //     //console.log(data.);
        //     let res = this.$store.state.carts.find(item =>{
        //         return item.id == data.id;
        //     });
        //     if(res.select == true){
        //         this.$refs.cartBtn.statusChange();
        //     }
        // }
        selectPro(data){
            this.$store.commit('selectProduct', data);
        },
        decrease(data){
            this.$store.commit('decreaseNum', data);
        },
        increase(data){
            this.$store.commit('increaseNum', data);
        }
    },
    computed: {
        products(){
            return this.$store.state.carts;
        },
        allstatus:{
            get:function(){
                return this.$store.state.carts.every((item, index, array) => {
                    return item.select == true;
                });
            },
            set:function(val){
                return this.$store.state.carts.map((item, index, array) => {
                    return item.select = val;
                });
            }
        },
        allPrice(){
            return this.$store.getters.totalPrice;
        }

        // status:{
        //     get: function(){
        //         return this.$store.state.carts.every((item, index, array)=>{
        //             return item.select == true;
        //         });
        //     },
        //     set: function(data){
        //         //console.log('444444444444444');
        //     }
            
        // }
    },
    watch: {
    //    status(val){
    //        console.log(val);
    //        return !this.status;
    //         // this.status = this.$store.state.carts.every((item, index, array)=>{
    //         //     return item.select == true;
    //         // });
    //    }
    },
    components:{
        titleTop: title,
        orderBtn: order
    }
}
</script>

<style lang="scss" scoped>
        .checkbox{
                width: 9%;
                height: 1rem;
                display: flex;
                height: 2.5rem;
                justify-content: center;
                align-items: center;
                margin-right: 0.2rem;
            input[type=checkbox]{
                // margin: 50px;
                /*同样，首先去除浏览器默认样式*/
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                /*编辑我们自己的样式*/
                position: relative;
                width: 50%;
                height: 0.45rem;
                background: transparent;
                border: 1px solid #d0d0d0;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                outline: none;
                cursor: pointer;
                padding: 0;
            }
            input[type=checkbox]:after{
                content: '✔';
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 100%;
                height: 0.45rem;
                background: #fb7777;
                color: #fff;
                line-height: 0.45rem;
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.4rem;
            /*
                content: '✔';
                position: absolute;
                left:0;
                top:0;
                display: block;
                width: 100%;
                height: 1rem;
                background: #fb7777;
                color: #fff;
                line-height: 1rem;
                /*增加动画*
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                /*利用border-radius和opacity达到填充的假象，首先隐藏此元素*
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.5rem;
                */
            }
            input[type=checkbox]:checked:after{
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 1;
            }

        }


.cartlist{
    .cart{
        display: flex;
        padding: 0.3rem 0.2rem;
        background: #fff;
        margin: 0.2rem 0;
    
        .proimg{
            width: 25%;
            display: flex;
            align-items: center;
            img{
                height: 2.5rem;
            }
        }
        .discribe{
            width: 35%;
            padding: 0 0.3rem;
            .name{
                height: 0.7rem;
                font-size: 0.45rem;
            }
            .attribute{
                // padding: 0.1rem 0 0.5rem;
                label{
                    font-size: 0.35rem;
                    color: #999;
                }
            }
            .price{
                display: flex;
                flex-direction: column;
                padding-top: 0.3rem;
                .actual{
                    color: #999;
                    text-decoration: line-through;
                }
                .privilege{
                    color: red;
                }
            }
        }
        .btn{
            display: flex;
            align-items: flex-end;
            width: 25%;
            button{
                width: 45%;
                border: 1px solid #d0d0d0;
                background: #f9f9f9;
                outline: none;
                height: 0.48rem;
            }
            .reduce{
                border-right: none;
            }
            .increase{
                border-left: none;
            }
            span{
                display: block;
                padding: 0 0.25rem;
                height: 0.42rem;
                border: 1px solid #dadada;
                border-right: none;
                border-left: none;
            }
        }
    }
}


$back:#fff;
$flex:flex;
$between: space-between;
$around: space-around;
.bottom{
    background: $back;
}
.bottomNav{
    position: fixed;
    bottom: 0;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: $around;
    background: $back;
    .servericon{
        display: $flex;
        width: 70%;
        justify-content: space-between;
        align-items: center;
        .checkbox{
                width: 30%;
                height: 1.5rem;
                display: flex;
                height: 1.5rem;
                justify-content: center;
                align-items: center;
                margin-right: 0.2rem;
            input[type=checkbox]{
                // margin: 50px;
                /*同样，首先去除浏览器默认样式*/
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                /*编辑我们自己的样式*/
                position: relative;
                 width: 25%;
                height: 0.5rem;
                background: transparent;
                border: 1px solid #d0d0d0;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                outline: none;
                cursor: pointer;
                padding: 0;
            }
            input[type=checkbox]:after{
                content: '✔';
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 100%;
                height: 0.5rem;
                background: #fb7777;
                color: #fff;
                line-height: 0.5rem;
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.45rem;
    /*
                content: '✔';
                position: absolute;
                left:0;
                top:0;
                display: block;
                width: 100%;
                height: 1rem;
                background: #fb7777;
                color: #fff;
                line-height: 1rem;
                /*增加动画*
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                /*利用border-radius和opacity达到填充的假象，首先隐藏此元素*
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.5rem;
                */
            }
            input[type=checkbox]:checked:after{
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 1;
            }
            label{
                padding-left: 0.2rem;
            }

        }
        span{
            display: block;
            padding:0 0.2rem;
            font-size:0.4rem;
            color:red;
        }
    }
    .btn{
        display: $flex;
        justify-content: $between;
        width: 30%;
        box-sizing: border-box;
        a{
            width: 100%;
            height: 1.5rem;
            border:none;
            color:#fff;
            font-size: 0.35rem;
            outline: none;
            text-align: center;
            line-height: 1.5rem;
        }
        .add{
            background: linear-gradient(to right, #ffc449, #ff9a00);
        }
        .buy{
            background: #ff3a3a;
        }
    }
}


</style>
