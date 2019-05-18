<template>
    <div>
      <headTop></headTop>
        <div class="main">
            <contentHtml></contentHtml>

            <!-- <contentHtml>
                <div class="swiper-slide">
                    <div class="recommend_swiper">
                        <div id="recommend" class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide recommed_slide">Slide 1</div>
                                <div class="swiper-slide recommed_slide">Slide 2</div>
                                <div class="swiper-slide recommed_slide">Slide 3</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
            </contentHtml> -->

        </div>
      
    </div>
</template>

<script>
import header from '../components/header.vue';
//import content from '../components/content.vue';

import content from '../components/main.vue';


// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';

export default {
    data(){
        return{

        }
    },
    mounted() {
        // const mySwiper = new Swiper("#Swiper",{
        // });
    },
    computed: {
        num(){
            return this.$store.state.total;
        }
    },
    components:{
        headTop:header,
        contentHtml:content,
        
    }
}
</script>

<style>
    .main{
        /* padding: 0 0.2rem; */
    }
    
</style>