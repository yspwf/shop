<template>
<div>
    <div id=header>
        <div class="head-top">
            <h3>商品分类</h3>
        </div>
        <div id="nav" class="swiper-container">
            <ul class="swiper-wrapper">
                <li class="swiper-slide active-nav"><a href="javascript:;">手机</a></li>
                <li class="swiper-slide"><a href="javascript:;">厨具</a></li>
                <li class="swiper-slide"><a href="javascript:;">数码</a></li>
                <li class="swiper-slide"><a href="javascript:;">家纺</a></li>
                <li class="swiper-slide"><a href="javascript:;">生鲜</a></li>
                <li class="swiper-slide"><a href="javascript:;">家用电器</a></li>
                <li class="swiper-slide"><a href="javascript:;">食品饮料</a></li>
                <li class="swiper-slide"><a href="javascript:;">电脑/办公</a></li>
                <li class="swiper-slide"><a href="javascript:;">家用日用</a></li>
            </ul>
        </div>
  </div>
  <div id="page" class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide slidepage">手机</div>
        <div class="swiper-slide slidepage">厨具</div>
        <div class="swiper-slide slidepage">数码</div>
        <div class="swiper-slide slidepage">家纺</div>
        <div class="swiper-slide slidepage">生鲜</div>
        <div class="swiper-slide slidepage">家用电器</div>
        <div class="swiper-slide slidepage">食品饮料</div>
        <div class="swiper-slide slidepage">电脑/办公</div>
        <div class="swiper-slide slidepage">家用日用</div>
    </div>
  </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data(){
        return {
            msg:"welcome vue webpack"
        }
    },
    mounted() {
        var myNav = new Swiper('#nav', {
            spaceBetween: 5,
            slidesPerView: 5,
            watchSlidesProgress : true,
            watchSlidesVisibility : true,
            on:{
                tap: function(){
                    console.log(myNav);
                    myPage.slideTo(myNav.clickedIndex)
                }
            }
        })
        var myPage = new Swiper('#page',{
            on:{
                slideChangeTransitionStart: function(){
                    console.log('34534');
                // this.updateNavPosition();
                }
            }
        })
    },
    methods: {
         updateNavPosition(){
            // $('#nav .active-nav').removeClass('active-nav');
            // var activeNav = $('#nav .swiper-slide').eq(myPage.activeIndex).addClass('active-nav');
            // if (!activeNav.hasClass('swiper-slide-visible')) {
            //     console.log(1);
            //     if (activeNav.index()>myNav.activeIndex) {
            //         console.log(2);
            //         var thumbsPerNav = Math.floor(myNav.width/activeNav.width())-1
            //         myNav.slideTo(activeNav.index()-thumbsPerNav)
            //     }
            //     else {
            //         console.log(3);
            //         myNav.slideTo(activeNav.index())
            //     }   
            // }
        }
    },
}
</script>

<style>
        *{padding:0;margin:0;font-size:20px;color:#333;}
        html{background:#fff;}
        a{text-decoration:none;}
        body{max-width:640px;margin:0 auto;position:relative;background:#ccc;overflow:hidden;}
        img{width:100%;border:0;}
        li{list-style:none;}

        .head-top{height:36px;position:fixed;top:0;left:0;text-align:center;width:100%;line-height:36px;}
        .swiper-containee{max-width:640px;}
        #nav{margin-top:36px;border-bottom:1px solid #999;padding:10px;}
        #nav li{text-align:center;}
        .active-nav{
            color:#fff;
            background:#ddd !important;
        }
        .active-nav a{
            color:#fff;
            background:#ddd !important;
        }
        #page .swiper-slide{height:6rem;}
</style>