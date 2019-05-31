<template>
<div>
    <div class="outcontainer">
        <div class="mine"> 
            <div class="member">
                <div class="headimg">
                    <img src="/src/static/images/member.jpg">
                    <i></i>
                </div>
                <div class="username">
                    <font class="name">这是名称</font>
                    <div class="usertag">
                        <label class="tags">体验会员</label>
                        <label class="tags">体验会员</label>
                    </div>
                    
                </div>
                <div class="sign">
                    <a href="javascript:void(0)">已签到</a>
                </div>  
            </div> 
        </div>
     <div class="centerCates">
            <router-link to="" class="centerCate">
                <i></i>
                <div>我的订单</div>
            </router-link>
             <router-link to="" class="centerCate">
                <i></i>
                <div>我的积分</div>
            </router-link>
            <router-link to="" class="centerCate">
                <i></i>
                <div>我的发现</div>
            </router-link>
             <router-link to="" class="centerCate">
                <i></i>
                <div>我的收藏</div>
            </router-link>
        </div> 
    </div>

    <div class="services">
        <div class="servicetitle">
            <h4>我的服务</h4>
        </div>
        <div class="servicelist">
            <router-link to="" class="list">
                <i></i>
                <font>优惠券</font>
            </router-link>
             <router-link to="" class="list">
                <i></i>
                <font>我的众筹</font>
            </router-link>
             <router-link to="" class="list">
                <i></i>
                <font>收货地址</font>
            </router-link>
             <router-link to="" class="list">
                <i></i>
                <font>收货地址</font>
            </router-link>
            <router-link to="" class="list">
                <i></i>
                <font>收货地址</font>
            </router-link>
        </div>
    </div>

    <div class="select">
        <newBlock :data="like">猜你喜欢</newBlock>
    </div>
    

</div>
</template>

<script>
import newBlock from './newBlock.vue';
export default {
    data(){
        return {
            like:[
                    {id:1,proname:'商品是为了出售333而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了灌灌灌灌出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
            ]
        }
    },
    components:{
        newBlock:newBlock
    }
}
</script>


<style scoped>
    .outcontainer{
       background: #fff; 
    }
    .select{
        padding: 0 0.2rem;   
        background: #fbfbfb;
    }
    .mine{
        border-radius: 0 0 100% 100%/0 0 30% 30%;
        background: #ff6161;
    }
    .member{
        display: flex;
        -webkit-display:flex;
        padding: 1rem 0.3rem 0.8rem;
    }
    .member .headimg{
        width: 17%;
        border: 1px solid #ffd496;
        border-radius: 50%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
    }
    .member .headimg img{
        width: 95%;
        border-radius: 50%;
    }
    .member .headimg i{
        display: block;
        height: 0.6rem;
        width: 35%;
        position: absolute;
        right: -0.18rem;
        top: -0.3rem;
        z-index: 99;
        background: url('../static/images/identification.png') no-repeat center center;
        background-size: contain; 
        transform: rotate(37deg);
    }
    .member .username{
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 0 0.3rem;
    }
    .member .username .name{
        font-size: 0.45rem;
        color: #fff;
        padding: 0.2rem 0;
    }
    .member .username .usertag{
        display: flex;
        
    }
    .member .username .usertag .tags{
        width: 40%;
        text-align: center;
        margin-right: 0.2rem;
        padding: 0.05rem;
        border-radius: 0.4rem;
        color: #4a4a4a;
        background: linear-gradient(to right, #f5eec1, #ffc985);
        border: none;
    }
    .member .sign{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 30%;
    }
    .member .sign a{
        color:#fff;
        border-radius: 0.4rem;
        padding: 0.1rem 0.2rem;
        background: #8a7c7c;
    }

    .centerCates{
        padding:0.5rem 0.2rem;
        display: flex;
        -webkit-display:flex;
        justify-content: space-around;
    }
    .centerCates .centerCate{
        display: flex;
        -webkit-display:flex;
        flex-direction: column;
        text-align: center;
    }
    .centerCates .centerCate i{
        height: 0.65rem;
        width: 100%;
        /* margin: auto; */
        background: url('../static/images/centerorder.png') no-repeat center center;
        background-size:contain; 
    }
    .centerCates .centerCate div{
        font-size: 0.35rem;
    }

    .services{
        margin-top: 0.2rem;
        background: #fff;
        padding: 1px 0.2rem 1rem;
    }

    .services .servicetitle{
        border-left: 2px solid red;
        padding-left: 0.2rem;
        height: 0.7rem;
        line-height: 0.7rem;
        padding-left: 0.2rem;
        margin: 0.3rem 0 0.5rem;
        position: relative;
    }
    .services .servicetitle h4{
        font-size: 0.35rem;
    }
    .services .servicetitle::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 1.2rem;
        left: 0;
        border-bottom: 1px solid #efefef;
    }
    .services .servicelist{
        display: flex;
        flex-wrap: wrap;
        border-left: 1px solid #efefef;
    }
    .services .servicelist .list{
        width: 25%;
        display: flex;
        -webkit-display: flex;
        justify-content: center;
        flex-direction: column;
        position: relative;
        overflow: hidden;
        padding: 0.25rem 0;
    }
    .services .servicelist .list::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        position: absolute;
        top: 1.8rem;
        left: 0;
        border-bottom: 1px solid #efefef;
    }
    .services .servicelist .list::before{
        content: '';
        display: block;
        width: 1px;
        height: 130%;
        position: absolute;
        top: -0.5rem;
        right: 0;
        border-left: 1px solid #efefef;
    }
    .services .servicelist .list i{
        display: block;
        width: 100%;
        background: url('../static/images/welfare.png') no-repeat center center;
        background-size: contain;
        height: 0.6rem;
    }
    .services .servicelist .list font{
        text-align: center;
        font-size: 0.35rem;
        padding: 0.15rem 0;
    }
</style>