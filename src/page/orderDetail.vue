<template>
<div>
    <div class="orderDetail">
        <div class="ordertitle">
            <div class="title">
                <i></i>
                <label for="">待付款</label>
            </div>
            <div class="address">
                <div class="add">
                    <i class="addressicon"></i>
                </div>
               <div class="addDetail">
                   <div class="user">
                       <div class="name">啪啪啪</div>
                       <div>678****4565</div>
                   </div>
                   <div class="addinfo">
                       的嘎嘎待过但是是大法官闪电发货给的返回三国杀电饭锅是的反腐阿斯顿发顺丰
                   </div>
               </div>
            </div>
        </div>
        
    </div>

    <div class="orderlist">
            <div class="orders">
                <div class="ordersimg">
                    <img src="/src/static/images/4.jpg" alt="">
                </div>
                <div class="orderinfo">
                    <div class="infoname">商品名称</div>
                    <div class="infoattrbute">
                        <label for="">白色</label>
                        <label for="">S码</label>
                    </div>
                    <div class="infonum">数量 3</div>
                    <div class="infoprice">￥ 199</div>
                </div>
            </div>
    </div>

    <div class="way">
        <div class="wayinfo">
            <label for="">配送方式</label>
            <div>{{way}}</div>
        </div>
        <div class="wayinfo">
            <label for="">配送时间</label>
            <div>{{time}}</div>
        </div>
    </div>

    <div class="way">
        <div class="shopinfo">
            <label for="">商品总额</label>
            <div>￥100</div>
        </div>
        <div class="shopinfo">
            <label for="">优惠金额</label>
            <div>￥100</div>
        </div>
        <div class="shopinfo">
            <label for="">物流运费</label>
            <div>￥100</div>
        </div>
        <div class="total">
            共1件商品，供需付款 <span>￥299</span>
        </div>
    </div>
    <paybtn></paybtn>
</div>
</template>

<script>
import paybtn from './pay.vue';
export default {
    data(){
        return {
            way:'顺丰速运',
            time:'周六周日'
        }
    },
    computed: {
        products(){
            return this.$store.state.carts;
        }
    },
    components:{
        paybtn:paybtn
    }
}
</script>

<style lang="scss" scoped>
.orderDetail{
    background: #ff6161;
    padding: 0.5rem 0.2rem 0.1rem;
    .ordertitle{
         position: relative;
         padding-bottom: 1.5rem;
        .title{
            display: flex;
            i{
                display: block;
                height: 0.5rem;
                width: 11%;
                background: url('../static/images/unpaid.png') no-repeat center center;
                background-size: contain;
            }
            label{
                color: #fff;
            }
        }
        .address{
            background: #fff;
            border-radius: 10px;
            display: flex;
           
             position: absolute;
            top:1rem;
            .add{
                width: 15%;
                text-align: center;
                display: flex;
                justify-content: center;
                align-items: center;
                .addressicon{
                    width: 60%;
                    background: #ffc76f url('../static/images/address.png') no-repeat center center;
                    background-size: 60%;
                    height: 0.65rem;
                    border-radius:50%; 
                }
            }
            .addDetail{
                   
                    display: flex;
                    flex-direction: column;
                    .user{
                            display: flex;
                            padding-top: 0.2rem;
                        div{
                            height:0.5rem;
                            line-height: 0.5rem;
                        }    
                        .name{
                            font-size: 0.35rem;
                            padding-right: 0.3rem;
                            color:#333;
                        }
                    }
                    .addinfo{
                        font-size: 0.3rem;
                        padding: 0.2rem 0.3rem 0.2rem 0;
                        color:#333;
                    }
            }
        }
    }
}
.orderlist{
    margin-top: 1.5rem;
    background: #fff;
    padding: 0 0.3rem;    
    .orders{
        display: flex;
        padding: 0.2rem 0;
        .ordersimg{
            width: 20%;
        }
        .orderinfo{
            width: 60%;
            display: flex;
            flex-direction: column;
            padding: 0 0.3rem;
            div{
                height: 0.5rem;
            }
            .infoname{
                font-size: 0.35rem;
                font-weight: bold;
            }
            .infoattrbute{
                label{
                    color: #b9b9b9;
                }
            }
            .infonum{
                padding: 0.1rem 0;
                font-size: 0.3rem;
                color: #bfbfbf;
            }
            .infoprice{
                font-weight: bold;
            }
           
        }
    }    
}
.way{
    margin-top: 0.3rem;
    background: #fff;
    padding: 0.2rem 0.3rem;
    .wayinfo, .shopinfo{
        display: flex;
        padding: 0.2rem 0;
        align-items: center;
        color: #a7a7a7;
        label{
            font-size: 0.35rem;
            padding-right: 0.3rem;
            color:#333;
        }
    }
    .shopinfo{
        justify-content: space-between;
        div{
            color:#333;
        }
    }
    .total{
        height: 1rem;
        line-height: 1rem;
        font-size: 0.35rem;
        color: #333;
        text-align: right;
        span{
            color: #ff1616;
        }
    }
}
</style>
