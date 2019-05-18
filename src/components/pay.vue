<template>
    <div class="bottom">
        <div class="bottomNav">
            <div class="servericon">
                <a href="javascript:void(0);" class="server"></a>
                
            </div>
            <div class="btn">
                <button class="add" @click="addCart({id:1,price:20})">取消订单</button>
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
             this.$store.commit('addCarts', data);
         }
    }
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
        justify-content: flex-start;
        width: 40%;
        a{
            width: 18.333%;
            height: 1.5rem;
        }
        .server{
            background: url('../static/images/server.png') no-repeat center center;
            background-size: contain;
        }
    }
    .btn{
        display: flex;
        justify-content: space-around;
        width: 50%;
        box-sizing: border-box;
        align-items: center;
        button{
            width: 45%;
            height: 0.8rem;
            border: none;
            color: #fff;
            font-size: 0.35rem;
            outline: none;
            border-radius: 3px;
        }
        .add{
                background: #c3c3c3;
        }
        .buy{
            background: #ff3a3a;
        }
    }
}

</style>
