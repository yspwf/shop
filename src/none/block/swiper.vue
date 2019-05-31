<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(item, index) in banners" :key="index"><img :src="item.img"></div>
            <!-- <div class="swiper-slide">w3rwerwe</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div> -->
        </div>
        <div class="bedeck">
            <div class="bedecktext">原装正品</div>
            <div class="bedecktext">原装正品</div>
            <div class="bedecktext">原装正品</div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css'
//import req from '../http/http.js';
import axios from 'axios';
export default {
    data(){
        return {
            banners:''
        }
    },
    created() {
        // axios.get('/home/banner').then((response) => {
        //     console.log(response)
        // });
        axios.get('/home/banner').then(function(response){
              //console.log(response.data.data);
               if(response.data.result=='success'){
                   //console.log(response.data.data);
                  this.banners = response.data.data;
                
                }
           }.bind(this)).catch(function(error){
               console.log(error);
           });
    },
    mounted() {
        // var that = this;
        // that.mySwiper = new Swiper('.swiper-container',{
        //         loop: true
        // });  
        
        setTimeout(function () {
         const swiperObj =  new Swiper('.swiper-container', {
                loop: true
            });
        }, 100)
       
       
        

    },
}
</script>

<style lang="scss" scoped>
.swiper-container{
    width: 100%;
    height: 4.5rem;
    img{
        height: 4.5rem;
    }
    .bedeck{
        position: absolute;
        bottom: 0;
        left:0;
        right: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        z-index: 999;
        justify-content: space-around;
        border-radius: 10% 10% 0 0/50% 50% 0 0;
        background: #fff;
        .bedecktext{
            padding:0.1rem 0;
        }
    }
}
</style>
