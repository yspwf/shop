<template>
    <div class="maincontent">
         <!-- <div class="hidden">
            <div class="outContainer">
                <div class="topNav">
                    <router-link to="">推荐</router-link>
                    <router-link to="">新品</router-link>
                    <router-link to="">限时</router-link>
                    <router-link to="">推荐</router-link>
                    <router-link to="">新品</router-link>
                    <router-link to="">限时</router-link>
                    <router-link to="">推荐</router-link>
                    <router-link to="">新品</router-link>
                    <router-link to="">限时</router-link>
                    <router-link to="">新品</router-link>
                    <router-link to="">限时</router-link>
                </div>
            </div>
        </div> -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in banners" :key=index><img :src="item.img"></div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

        <div class="recommedContent">
            <div></div>
            <div class="contentRecommed">
                <router-link to="" class="navLink" v-for="(item, index) in navs" :key="index">
                    <div class="navicon">
                        <img :src='item.icon'>
                    </div>
                   <label>{{item.title}}</label>
                </router-link>
                <!-- <router-link to="" class="navLink">
                    <div class="navicon">
                        <img src='/src/static/images/zc.png'>
                    </div>
                   <label>优品众筹</label>
                </router-link>
                <router-link to="" class="navLink">
                    <div class="navicon">
                        <img src='/src/static/images/better.png'>
                    </div>
                   <label>会员中心</label>
                </router-link>
                <router-link to="" class="navLink">
                    <div class="navicon">
                        <img src='/src/static/images/users.png'>
                    </div>
                   <label>优品众筹</label>
                </router-link>
                <router-link to="" class="navLink">
                    <div class="navicon">
                        <img src='/src/static/images/order.png'>
                    </div>
                   <label>达人晒单</label>
                </router-link> -->
            </div>
        </div>

        <div class="welfare">
            <router-link to="" class="welfarelist" v-for="(item, index) in actives" :key="index">
                <img :src="item.img" alt="">
            </router-link> 
            <!-- <router-link to="" class="welfarelist">
                <img src="/src/static/images/welfare.jpg" alt="">
            </router-link>
            <router-link to="" class="welfarelist">
                <img src="/src/static/images/welfare.jpg" alt="">
            </router-link> -->
        </div>
        
        
         <block :list="newlist" title="新品推荐"></block>
         <block :list="recommendlist" title="人气推荐"></block>
         <newBlock :data="like" :title="liketitle"></newBlock>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
import block from './block.vue';
import newBlock from './newBlock.vue';
export default {
    data(){
        return {
            liketitle:"猜你喜欢",
            banners:[
                {link:'http::/www.baidu.com', img:'../src/static/images/1.jpg'},
                {link:'http::/www.baidu.com', img:'../src/static/images/2.jpg'},
                {link:'http::/www.baidu.com', img:'../src/static/images/3.jpg'}
            ],
            navs:[
                {title:"优品众筹",icon:"../src/static/images/zc.png"},
                {title:"会员中心",icon:"../src/static/images/better.png"},
                {title:"优品众筹",icon:"../src/static/images/users.png"},
                {title:"达人晒单",icon:"../src/static/images/order.png"}
            ],
            actives:[
                {link:'http::/www.baidu.com', img:'../src/static/images/welfare.jpg'},
                {link:'http::/www.baidu.com', img:'../src/static/images/welfare.jpg'},
            ],
            newlist:[
                    {id:1,proname:'商品是为了出售333而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了灌灌灌灌出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
            ],
            recommendlist:[
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
            ],
            like:[
                    {id:1,proname:'商品是为了出售333而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro1.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了出售而生',img:'../src/static/images/pro.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
                    {id:1,proname:'商品是为了灌灌灌灌出售而生',img:'../src/static/images/pro2.jpg',privilege:'199',actual:'299', tags:['爆款','劵']},
            ]
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
           
            loop: true, // 循环模式选项
            pagination: {
                el: '.swiper-pagination',
            },
           
        })        
    },
    components:{
        block,
        newBlock
    }
}
</script>

<style scoped>
.maincontent{
    background: #fff;
    padding: 0 0.2rem;
   
}
.hidden{
    height: 1.4rem;
    overflow: hidden;
}
.maincontent .outContainer{
    overflow-y: scroll;
}
.maincontent .outContainer .topNav{
    padding: 0.2rem 0;
    width: 120%;
    display: flex;
    -webkit-display:flex;
}

.maincontent .outContainer .topNav a{
    height: 1rem;
    line-height: 1rem;
    font-size: 0.4rem;
    color: #666;
    display: inline-block;
    padding: 0.1rem;
    text-align: center;
}
.swiper-container {
    width: 100%;
    height:5rem;
    padding: 0.1rem 0;
} 

.welfare{
     display: flex;
    -webkit-display:flex;
    justify-content: space-between;
    background: #fff;
    padding-bottom: 0.5rem;
}
.welfare .welfarelist{
    width: 49%;
    height: 2rem;
}
.welfare .welfarelist img{
    height: 100%;
}

.recommedContent{
    padding: 0.5rem 0;
    background: #fff;
}
.recommedContent .contentRecommed{
    display: flex;
    -webkit-display:flex;
}
.recommedContent .contentRecommed .navLink{
    width: 25%;
    display: flex;
    -webkit-display:flex;
    flex-direction: column;
    text-align: center;
}
.recommedContent .contentRecommed .navLink .navicon{
    /* //background: #ffb658; */
    width: 45%;
    height: 1.1rem;
    border-radius: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right,#ffb658, #ff884a);
}
.recommedContent .contentRecommed .navLink .navicon img{
    width: 60%;
}
.recommedContent .contentRecommed .navLink label{
    padding: 0.1rem 0;
    font-size: 0.35rem;
}


</style>
