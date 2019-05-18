<template>
    <div class="content">

        <div class="swiper-container topNav">
            <ul class="swiper-wrapper nav-wrapper">
                <li class="swiper-slide"><a href="javascript:;">推荐</a></li>
                <li class="swiper-slide"><a href="javascript:;">新品</a></li>
                <li class="swiper-slide"><a href="javascript:;">限时</a></li>
                <li class="swiper-slide"><a href="javascript:;">居家</a></li>
                <li class="swiper-slide"><a href="javascript:;">餐厨</a></li>
            </ul>
        </div>
        <div class="swiper-container childNav">
            <div class="swiper-wrapper">
                <slot></slot>
            </div>
        </div>

       
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
            var TopNav = new Swiper(".topNav",{
                spaceBetween: 3,
                slidesPerView: 6,
                watchSlidesProgress : true,
                watchSlidesVisibility : true,
                on:{
                    tap: function(){
                        myPage.slideTo(TopNav.clickedIndex)
                    }
                }
            });
            var myPage = new Swiper(".childNav",{
                on:{
                    slideChangeTransitionStart:function(){
                        console.log(myPage.activeIndex);
                    }
                }
            });
        });
       
    },
    methods: {
        demo(){
            console.log('demo');
        }
    },
}
</script>

<style scoped>
    .content{
        padding:0 0.2rem;
        background: #efefef;
    }
    .swiper-container {
        width: 100%;
    }  
    .swiper-container .swiper-wrapper{
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        width: 16% !important;
    }
   .swiper-container .nav-wrapper .swiper-slide a{
        text-decoration: none;
        color: #666;
        font-size: 0.35rem;
        height: 1rem;
        line-height: 1rem;
        display: inline-block;
        width: 100%;
    }
    
</style>