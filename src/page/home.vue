<template>
    <div>
        <sSearch></sSearch>
        <s-swiper></s-swiper>
        <div class="content">
        <div class="recommedContent">
            <div></div>
            <div class="contentRecommed">
                <router-link to="" class="navLink" v-for="(item, index) in navs" :key="index">
                    <div class="navicon">
                        <img :src='item.icon'>
                    </div>
                   <label>{{item.title}}</label>
                </router-link>
               
            </div>
        </div>
         <div class="welfare">
            <router-link to="" class="welfarelist" v-for="(item, index) in actives" :key="index">
                <img :src="item.img" alt="">
            </router-link> 
            
        </div>

        <s-block :list="newlist">新品推荐</s-block>
        <s-block :list="newlist">人气推荐</s-block>
        <newBlock :data="like">猜你喜欢</newBlock>
        </div>
    </div>
</template>

<script>
import sSearch from './search.vue';
import sSwiper from './swiper.vue';
import sBlock from './block.vue';
import newBlock from './newBlock.vue';
export default {
    data(){
        return{
            navs:[
                {title:"优品众筹",icon:"../src/static/images/zc.png"},
                {title:"会员中心",icon:"../src/static/images/better.png"},
                {title:"优品众筹",icon:"../src/static/images/users.png"},
                {title:"达人晒单",icon:"../src/static/images/order.png"},
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
    components:{
        sSwiper,
        sSearch,
        sBlock,
        newBlock
    }
    
}
</script>

<style lang="scss" scoped>
.content{
    padding:0 0.2rem;
    background: #fff;
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
    padding: 0.3rem 0;
    background: #fff;
}
.recommedContent .contentRecommed{
    display: flex;
    -webkit-display:flex;
    flex-wrap: wrap;
}
.recommedContent .contentRecommed .navLink{
    width: 25%;
    display: flex;
    -webkit-display:flex;
    flex-direction: column;
    text-align: center;
    margin: 0.2rem 0;
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
