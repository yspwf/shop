<template>
    <div class="bottom">
        <div class="bottomNav">
            <div class="servericon">
                <a href="javascript:void(0);" class="server"></a>
                <a href="javascript:void(0);" class="college"></a>
                <!-- <a href="javascript:void(0);" class="cart">
                    <span>{{totalNum}}</span>
                </a> -->
                <router-link to="/cart" class="cart">
                <span>{{totalNum}}</span>
                </router-link>
            </div>
            <div class="btn">
                <button class="add" @click="addCart({id:1,name:'好衣服',tags:['白色','S码'],actual:20,privilege:100,num:1,select:true})">加入购物车</button>
                <button class="buy">立即购买</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {

        }
    },
    methods:{
        addCart(data){
            console.log(data);
             this.$store.commit('addCarts', data);
        }
    },
    computed: {
        // totalNum(){
        //     return this.$store.getters.totalNum;
        // }
        totalNum(){
            return this.$store.getters.totalNum;
        }
    },
}
</script>


<style lang="scss" scoped>
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
        justify-content: $around;
        width: 40%;
        a{
            width: 18.333%;
            height: 1.5rem;
        }
        .server{
            background: url('../static/images/server.png') no-repeat center center;
            background-size: contain;
        }
        .college{
            background: url('../static/images/college.png') no-repeat center center;
            background-size: contain;
        }
        .cart{
            background: url('../static/images/cart.png') no-repeat center center;
            background-size: contain;
            position: relative;
            span{
                right: 2px;
                position: absolute;
                top: 10px;
                color: #f33838;
            }
        }
    }
    .btn{
        display: $flex;
        justify-content: $between;
        width: 60%;
        box-sizing: border-box;
        button{
            width: 50%;
            height: 1.5rem;
            border:none;
            color:#fff;
            font-size: 0.35rem;
             outline: none;
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
