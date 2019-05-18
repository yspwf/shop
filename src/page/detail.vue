<template>
    <div class="detail">
        <titleTop title="商品详情"></titleTop>
           <div class="blocks" ref="blocks">
               <a href="javascript:void(0)" class="block">商品</a>
               <a href="javascript:void(0)" class="block">详情</a>
               <a href="javascript:void(0)" class="block">评价</a>
               <a href="javascript:void(0)" class="block">推荐</a>
               <a href="javascript:void(0)" class="icon"></a>
           </div>
           
           <div class="prodetail">
                   <div class="product"> 
                            <div class="swiper-container">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide"><img src="/src/static/images/4.jpg"></div>
                                        <div class="swiper-slide"><img src="/src/static/images/5.jpg"></div>
                                        <div class="swiper-slide"><img src="/src/static/images/6.jpg"></div>
                                    </div>
                                    <div class="swiper-pagination"></div>
                                    <div class="decorate"></div>
                            </div>

                        <div class="nameblock">
                                <div class="price">
                                <label for="" class="privilege">￥199</label>
                                <label for="" class="actual">￥299</label>
                                </div>
                                <div class="proname">
                                    <div class="names">
                                        <div class="name">纯棉T恤</div>
                                        <div>简约风</div>
                                    </div>
                                    <div class="evaluate">
                                        <label for="" class="percent">98%</label>
                                        <label for="">好评率</label>
                                    </div>
                                </div>
                                <div class="ticks">
                                    <label for="">领劵</label>
                                    <div>满500减100</div>
                                    <div>满400减200</div>
                                </div>
                        </div>

                        <div class="nameblock select">
                                <div class="ticks selectTick" @click="selectAttrubte">
                                    <label for="">选择</label>
                                    <div>颜色</div>
                                    <div>尺码</div>
                                </div>
                                <div class="ticks">
                                    <label for="">参数</label>
                                    <div>品牌</div>
                                    <div>品牌</div>
                                </div>
                        </div> 
                   </div>


                   <div class="services">
                        <div class="servicetitle">
                            <h4>用户评价</h4>
                        </div>
                        <div class="servicelist">
                          <div class="evaluate">
                              <div class="evaluateuser">
                                  <div class="userimg"><img src="/src/static/images/head.png" alt=""></div>
                                  <div class="stars">*******</div>
                              </div>
                              <div class="evaluatetime">
                                  <div>2019.03.04 15:32:02</div>
                              </div>
                              <div class="evaluatecontent">
                                  <div class="evaluates">轮播图 相信都不会陌生，很多的网站都会有，而且实现的方式也是千变万化，可以利用封装好的 UI 库 （bootstrap)也可以原生的 JS 进行编写。但是其中，动画（transition）和定时器都是必不可少的。本文就是利用 vue 自带的transition 动画过渡效果加上定时器编写轮播图。</div>
                                  <div class="evaluateimgs">
                                      <div><img src="/src/static/images/4.jpg" alt=""></div>
                                      <div><img src="/src/static/images/5.jpg" alt=""></div>
                                      <div><img src="/src/static/images/6.jpg" alt=""></div>
                                      <div><img src="/src/static/images/6.jpg" alt=""></div>
                                  </div>
                              </div>
                           </div>

                           <div class="evaluate">
                              <div class="evaluateuser">
                                  <div class="userimg"><img src="/src/static/images/head.png" alt=""></div>
                                  <div class="stars">*******</div>
                              </div>
                              <div class="evaluatetime">
                                  <div>2019.03.04 15:32:02</div>
                              </div>
                              <div class="evaluatecontent">
                                  <div class="evaluates">轮播图 相信都不会陌生，很多的网站都会有，而且实现的方式也是千变万化，可以利用封装好的 UI 库 （bootstrap)也可以原生的 JS 进行编写。但是其中，动画（transition）和定时器都是必不可少的。本文就是利用 vue 自带的transition 动画过渡效果加上定时器编写轮播图。</div>
                                  
                              </div>
                           </div>


                            <div class="evaluate">
                              <div class="evaluateuser">
                                  <div class="userimg"><img src="/src/static/images/head.png" alt=""></div>
                                  <div class="stars">*******</div>
                              </div>
                              <div class="evaluatetime">
                                  <div>2019.03.04 15:32:02</div>
                              </div>
                              <div class="evaluatecontent">
                                  <div class="evaluates">轮播图 相信都不会陌生，很多的网站都会有，而且实现的方式也是千变万化，可以利用封装好的 UI 库 （bootstrap)也可以原生的 JS 进行编写。但是其中，动画（transition）和定时器都是必不可少的。本文就是利用 vue 自带的transition 动画过渡效果加上定时器编写轮播图。</div>
                                  <div class="evaluateimgs">
                                      <div><img src="/src/static/images/4.jpg" alt=""></div>
                                      <div><img src="/src/static/images/5.jpg" alt=""></div>
                                      <div><img src="/src/static/images/6.jpg" alt=""></div>
                                      <div><img src="/src/static/images/6.jpg" alt=""></div>
                                  </div>
                              </div>
                           </div>
                        </div>
                        
                    </div> 



               </div> 

        <transition name="shade">
            <div class="shade" v-show="show" @touchmove.prevent  ref="shade"></div>
        </transition>
        

        <transition name="shareShow">
            <div class="shareSelect"  v-if="select" @click="hidden">
               <div class="proname">
                   <div class="proimg"><img src="/src/static/images/6.jpg" alt=""></div>
                   <div>名称</div>
               </div>
               <div class="procolor">
                   <label for="">颜色</label>
                   <a href="javascript:void(0);">红色</a>
                   <a href="javascript:void(0);">红色</a>
                   <a href="javascript:void(0);">红色</a>
               </div>
               <div class="prosize">
                   <label for="">尺寸</label>
                   <a href="javascript:void(0);">40</a>
                   <a href="javascript:void(0);">41</a>
                   <a href="javascript:void(0);">42</a>
               </div>
            </div>
        </transition>   


        <add-cart></add-cart>
        <!-- <bottom></bottom>         -->
    </div>
</template>

<script>
import title from '../components/title.vue';
import bottom from '../components/bottom.vue';
import addCart from '../components/addCart.vue';

import Swiper from 'swiper';
import 'swiper//dist/css/swiper.min.css'

export default {
    data(){
        return {
            select:false,
            show: false,
            scrollY:0
        }
    },
    mounted() {
        
        var mySwiper = new Swiper(".swiper-container",{
            loop: true, 
            pagination: {
                el: '.swiper-pagination',
            },
        });
        
        
        // window.addEventListener('scroll', function(){
        //         console.log(this.$refs.blocks);
        //         this.scrollY = document.documentElement.scrollTop;
        //         //console.log(this.$refs.shade);
        // })
        const blocks = this.$refs.blocks;
       this.$nextTick(() => {
            window.addEventListener('scroll', function(){
                this.scrollTop = document.documentElement.scrollTop ||window.pageYOffset || document.body.scrollTop;
                if(parseInt(this.scrollTop)>100){
                        blocks.style.position='fixed';
                        blocks.style.top='0px';
                }else if(parseInt(this.scrollTop)<100){
                        blocks.style.position='';
                        blocks.style.top='';
                }
            });
        });   
    },
   
    methods: {
         selectAttrubte(){
            this.select = true;
            this.show = true;
            document.documentElement.style.overflow = 'hidden';
            //this.$refs.shade.style.top = this.scrollY+"px";
         },
         hidden(){
            this.select = false;
            this.show = false;
            document.documentElement.style.overflow = 'auto';
         },
         
    },
    components:{
        titleTop:title,
        bottom:bottom,
        addCart:addCart
    },
    // computed: {
    //     totalNum(){
    //         return this.$store.getters.totalNum;
    //     }
    // },
}
</script>

<style scoped>
.detail{
    /* padding-bottom: 4rem; */
}
.detail .blocks{
    display: flex;
    -webkit-display:flex;
    width: 100%;
    justify-content: center;
    background: #fff;
    position: relative;
    z-index: 77;
}
.detail .blocks .block{
    height: 1rem;
    background: #fff;
    width: 15%;
    line-height: 1rem;
    font-size: 0.35rem;
    text-align: center;
}
.detail .blocks .icon{
    width: 5%;
    position: absolute;
    height: 1rem;
    right: 5%;
    background: url('../static/images/share.png') no-repeat center center;
    background-size: contain;
}
.prodetail{
    /* position: absolute;
    top:2rem;  
    left:0; */
    /* overflow: hidden;
    
    width: 100%;
    flex-direction: column;
    z-index: -1;  */
    /* position: absolute;
    top:2rem;
    bottom: 0;
    display: flex; 
    overflow: hidden;
    width: 100%; */
}

 .prodetail .swiper-container{
    width:100%;
    height: 9rem;
}  
.prodetail .swiper-container .swiper-slide img{
    height: 9rem;
} 
.prodetail .swiper-container .decorate{
    height: 0.4rem;
     width: 100%;
    background: #fff;
    z-index: 99;
    position: absolute;
    bottom: -7px;
    border-radius: 10px 10px 0 0;
} 
.prodetail .nameblock{
    background: #fff;
    padding: 0 0.2rem;
}
.prodetail .nameblock .price{
    display: flex;
    -webkit-display:flex;
}
.prodetail .nameblock .price label{
    height: 0.5rem;
    line-height: 0.5rem;
    padding-right: 0.2rem;
}
.prodetail .nameblock .price .privilege{
    color:red;
    font-size: 0.5rem;
} 
.prodetail .nameblock .price .actual{
    color: #999;
    text-decoration: line-through;
    font-size: 0.3rem;
    line-height: 0.6rem;
}
.prodetail .nameblock .proname{
    display: flex;
    -webkit-display:flex;
    justify-content: space-between;
    border-bottom: 1px solid #d8d8d8;
    padding: 0.1rem 0 0.2rem;
}
.prodetail .nameblock .proname .names{

}
.prodetail .nameblock .proname .names div{
    padding:0.05rem 0;
    color:#999;
}
.prodetail .nameblock .proname .names .name{
    color:#333;
    font-size: 0.45rem;
}
.prodetail .nameblock .proname .evaluate{
    display: flex;
    flex-direction: column;
    width: 15%;
}
.prodetail .nameblock .proname .evaluate label{
    width: 100%;
    text-align: center;
    color: #999;
    padding: 0.05rem 0;
}
.prodetail .nameblock .proname .evaluate .percent{
    color:red;
    font-size: 0.4rem;
}
.prodetail .nameblock .ticks{
    display: flex;
     padding: 0.2rem 0; 
    align-items: baseline;
    background: url('../static/images/arrow.png') no-repeat center right;
    background-size: 4%; 
}
.prodetail .nameblock .ticks label{
    font-size: 0.35rem;
    color: #9e9e9e;
    padding-right: 0.2rem;
}
.prodetail .nameblock .ticks div{
    height: 0.5rem;
    line-height: 0.5rem;
    margin: 0 0.1rem;
    font-size: 12px;
    color: #ff5252;
} 
.prodetail .select{
    margin-top:0.3rem;
}

.prodetail .select .selectTick{
    position: relative;
}
.prodetail .select .selectTick::after{
    content: '';
    display: block;
    width: 100%;
    height:1px;
    border-bottom: 1px solid #d0d0d0;
    position: absolute;
    left: 0;
    bottom: 0;
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
        margin: 0.3rem 0;
        position: relative;
    }
    .services .servicetitle h4{
        font-size: 0.35rem;
    }
   
    .services .servicelist{
        /* display: flex;
        flex-wrap: wrap; */
        /* border-left: 1px solid #efefef; */
    }

    .services .servicelist .evaluate{
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid #e0e0e0;
        padding: 0.2rem 0 0.3rem;
    }
    .services .servicelist .evaluate .evaluateuser{
        display: flex;
        justify-content: space-between;
    }
    .services .servicelist .evaluate .evaluateuser .userimg{
        width: 10%;
    }
    .services .servicelist .evaluatecontent .evaluateimgs{
        display: flex;
        justify-content: space-around;
    }
    .services .servicelist .evaluatecontent .evaluateimgs div{
        width: 25%;
        padding: 0 0.1rem;
    }
    .services .servicelist .evaluatecontent .evaluateimgs div img{
        width: 100%;
        height: 2rem;
    }

.shareSelect{
    position: fixed;
    bottom: 0rem;
    background: #fff;
    height: 10rem;
    width: 100%;
    display: flex;
    z-index: 100;
    flex-direction: column;
}
.shareSelect .proname{
    display: flex;
    padding: 0.2rem;
}
.shareSelect .proname .proimg{
    width: 25%;
}

.shareShow-enter-active,.shareShow-leave-active{
    transition:transform .3s;
}
.shareShow-enter,.shareShow-leave-to{
    transform: translateY(10rem);
}
.shareShow-leave,.shareShow-enter-to{
    transform: translateY(0);
} 

.shade{
    width: 100%;
    height: 100%;
    background: #333;
    position: fixed;
    top:0;
    left: 0;
    z-index:88;
    opacity: 0.6;
}

.shade-enter-active,.shade-leave-active{
    transition: transform 0.3;
}
.shade-enter,.shade-leave-to{
    transform: translateY(100%);
}
.shade-leave,.shade-enter-to{
    transform: translateY(0);
}

/*
.fade-enter-active, .fade-leave-active {transition:transform .5s;}
.fade-enter,.fade-leave-active {transform: translateY(3rem); }
*/

</style>
