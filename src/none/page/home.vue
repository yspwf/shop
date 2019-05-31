<template>
    <div>
        <!-- <s-search></s-search>
        <s-swiper></s-swiper>
        <div class="main">
         <div class="recommedContent">
            <div class="contentRecommed">
                <router-link to="" class="navLink" v-for="(item, index) in navs" :key="index">
                    <div class="navicon">
                        <img :src='item.icon'>
                    </div>
                   <label>{{item.title}}</label>
                </router-link> 
                <router-link to="" class="navLink">
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
                </router-link>
            </div>
        </div>

         <div class="welfare">
            <router-link to="" class="welfarelist" v-for="(item, index) in actives" :key="index">
                <img :src="item.img" alt="">
            </router-link>  
            <router-link to="" class="welfarelist">
                <img src="/src/static/images/welfare.jpg" alt="">
            </router-link>
            <router-link to="" class="welfarelist">
                <img src="/src/static/images/welfare.jpg" alt="">
            </router-link>
        </div>

         <sBlock :list="newlist" title="新品推荐"></sBlock>
         <sBlock :list="recommendlist" title="人气推荐"></sBlock>

        </div> -->



        <!-- <s-button btnType="success" text="确定"></s-button>

        <div @click="show">click</div> -->
    <!-- <s-button name="sex" v-model='sex' @change="test"></s-button> -->
        <!-- home
        <img :src="img"> -->
<!-- 
    <s-button v-model="radio" @change="getRadio" :label="0">选项A</s-button>
    <s-button v-model="radio" @change="getRadio" :label="1">选项B</s-button> -->

   
   <!-- <sRadio v-model="sex" :mylabel="1" @change="getRadio">男</sRadio>
    <br/><br/><br/><br/>
   <sRadio v-model="sex" :mylabel="2" @change="getRadio">女</sRadio>
    
    <sToast></sToast> -->
    <!-- <transition name="fade">
        <router-view class="main"></router-view>
    </transition> -->
     <transition :name="transitionName"> 
　　　　　　<router-view class="Router"></router-view>
　　　</transition>

    <sBottom></sBottom>
    </div>
</template>

<script>
import sBottom from '../block/bottom.vue';
import sSearch from '../block/search.vue';
import sSwiper from '../block/swiper.vue';
import sBlock from '../block/block.vue';
import sNewBlock from '../block/newBlock.vue';
export default {
    data(){
        return {
            img: "/src/static/images/5.jpg",
            sex: 1,
            radio: 1,
            radioList: [
                {
                value: 0,
                name: "选项A"
                },
                {
                value: 1,
                name: "选项B"
                },
                {
                value: 2,
                name: "选项C"
                },
                {
                value: 3,
                name: "选项D"
                }
            ],
            transitionName: 'slide-right' 
        }
    },
    components:{
        sBottom
    },
    methods: {
        test(data){
            console.log(data);
        },
        getRadio(val) {
            console.log(val);
        },
        show(){
            this.$toast.error();
        },
        select(){
            console.log('5555555555555');
        }
    },
    watch: {
        $route(to, from){
            console.log(to);
            if(!to.meta.show || !from.meta.show){
                this.show = false;
            }
        }
    },
}
</script>

<style lang="scss" scoped>

.Router {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
     top: 40px;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
     opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
}

// .fade-enter{
//     transform:translateX(100%);
// }
// .fade-leave-to{
//     transform:translateX(0);
// }
// .fade-enter-active, .fade-leave-active {
//   transition: all .5s linear;
// }
// .fade-leave{
//     transform:translateX(0);
// }
// .fade-leave-to{
//     transform:translateX(-100%);
// }













// .home{
//     .search{
//         display: flex;
//         width: 100%;
//         justify-content: center;
//         height: 1rem;
//         align-items: center;
//         background: #ff6e6e;
//         input{
//             background: #fff;
//             text-align: left;
//             padding: 0 0.3rem;
//             height: 0.7rem;
//             line-height: 0.7rem;
//         }
//     }
//     .main{
//         padding: 0 0.2rem;
//         background: #fff;
//     }
// }

// .recommedContent{
//     padding: 0.5rem 0;
//     background: #fff;
// }
// .recommedContent .contentRecommed{
//     display: flex;
//     -webkit-display:flex;
// }
// .recommedContent .contentRecommed .navLink{
//     width: 25%;
//     display: flex;
//     -webkit-display:flex;
//     flex-direction: column;
//     text-align: center;
// }
// .recommedContent .contentRecommed .navLink .navicon{
//     /* //background: #ffb658; */
//     width: 45%;
//     height: 1.1rem;
//     border-radius: 50%;
//     margin: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background: linear-gradient(to right,#ffb658, #ff884a);
// }
// .recommedContent .contentRecommed .navLink .navicon img{
//     width: 60%;
// }
// .recommedContent .contentRecommed .navLink label{
//     padding: 0.1rem 0;
//     font-size: 0.35rem;
// }


// .welfare{
//      display: flex;
//     -webkit-display:flex;
//     justify-content: space-between;
//     background: #fff;
//     padding-bottom: 0.5rem;
// }
// .welfare .welfarelist{
//     width: 49%;
//     height: 2rem;
// }
// .welfare .welfarelist img{
//     height: 100%;
// }
</style>
