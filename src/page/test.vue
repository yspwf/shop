<template>
  <div id="app">
      <!-- <app-slider :list="sliders" :loop="true" v-if="sliders.length" width="100%" ></app-slider> -->
     <div class="main">
        
        <div ref="mainref">

                    <div class="slider" ref="slider">
                        <div class="slider-group" ref="sliderGroup">
                            <div class="slider-item" v-for="(item,index) in sliders" :key="index" >
                                <a :href="item.linkUrl">
                                    <img :src="item.picUrl" :alt="item.linkUrl" :style="`width:100%`" ref="sliderItemImg">
                                </a>
                            </div>
                        </div>
                        <div class="dots">
                            <span :class="`dot ${index === currentPageIndex ? 'active' :'' }`" v-for="(item,index) in sliders.length" :key="index"></span>
                        </div>
                    </div>
              



        </div>
        
    </div> 
    
    
   </div>
</template>

<script>
// import Slider from './components/Slider';
import BScroll from "better-scroll";
export default {
  name: 'app',
  data () {
    return {
      sliders:[
        {
          linkUrl:'http://y.qq.com/w/album.html?albummid=001RsOK33No4Sz&ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001EwfWs4QSIl6.jpg?max_age=2592000'
        },
        {
          linkUrl:'https://y.qq.com/msa/270/0_5102.html?ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000001CV9tc1xK59w.jpg?max_age=2592000'
        },
        {
          linkUrl:'https://y.qq.com/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=689728&ADTAG=myqq&from=myqq&channel=10007100',
          picUrl:'https://y.gtimg.cn/music/photo_new/T003R720x288M000002n0L9H3Bf8F0.jpg?max_age=2592000'
        },
        
      ],
      currentPageIndex: 0,
      _slider: null,
      _timer: null
    } 
  },
  mounted(){

    //    this.$nextTick(()=>{
    //         this.scroll = new BScroll(this.$refs.mainref, {
    //             scrollX: false,
    //             scrollY: true,
    //         });
    //     });


    const _this = this;
    _this.tmpTimer = setTimeout(() => {
         _this._initSliderWidth();
        _this._initSlider();
        if (true) {
            _this._play();
        }
    }, 20);
    window.addEventListener("resize",()=>{
      // 调整网页窗口大小
      location.reload();
    })
  },
  beforeDestroy() {
    clearInterval(this._timer);
    clearTimeout(this.tmpTimer);
},
 methods: {
    /**
     * @name _initSliderWidth
     * @description 初始化slider容器Width
     * @author postbird
     */
    _initSliderWidth() {
      const imgWidth = this.$refs.sliderItemImg[0].clientWidth;
      let sliderWidth = imgWidth * this.sliders.length;
      if (true) {
        // 循环轮播需要添加两个img DOM 的宽度
        sliderWidth += imgWidth * 2;
      }
      this.$refs.sliderGroup.style.width = sliderWidth + "px";
      this.$refs.sliderItemImg.forEach(item => {
        item.style.width = imgWidth + "px";
      });
    },
    /**
     * @name _initSlider
     * @description 初始化 better-scroll
     * @author postbird
     */
    _initSlider() {
      const _this = this;
      _this._slider = new BScroll(_this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        click: true,
        snap: {
          loop: true, // 循环
          threshold: 0.1
        }
      });
      // 获取当前页
      _this._getCurrentPageIndex();
      // 滚动之前 清除timer
      _this._slider.on("beforeScrollStart", () => {
        clearInterval(_this._timer);
      });
    },
    /**
     * @name _getCurrentPageIndex
     * @description 获取当前的 pageIndex
     * @author postbird
     */
    _getCurrentPageIndex() {
      const _this = this;
      _this._slider.on("scrollEnd", () => {
        let index = _this._slider.getCurrentPage().pageX;
        _this.currentPageIndex = index;
        // 如果自动播放 则开启
        if (_this.autoPlay) {
          _this._play();
        }
      });
    },
    /**
     * @name _play
     * @description 控制自动轮播
     * @author postbird
     */
    _play() {
      const _this = this;
      let pageIndex = _this.currentPageIndex;
      _this._timer = setInterval(() => {
        pageIndex++;
        if (pageIndex >= _this.sliders.length) {
          pageIndex = 0;
        }
        _this._slider.goToPage(pageIndex);
      }, 3000);
    }
  }
}
</script>

<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

.main{
    position: absolute;
    top:2rem;
    bottom: 0;
    display: flex; 
    overflow: hidden;
    width: 100%;
}

.title{
  margin:10px 0;
}
.slider {
  position: relative;
  min-height: 1px;
}
.slider .slider-group {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.slider .slider-group .slider-item {
  float: left;
  overflow: hidden;
  text-align: center;
}
.slider .slider-group .slider-item a {
  display: block;
  width: 100%;
  overflow: hidden;
  text-decoration: none;
}
.slider .slider-group .slider-item img {
  display: block;
  width: 100%;
}
.slider .dots {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 12px;
  text-align: center;
  font-size: 0;
}
.slider .dot {
  display: inline-block;
  margin: 0 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #dfdfdf;
}
.slider .dot.active {
  width: 20px;
  border-radius: 5px;
  background: #dfdfdf;
}
</style>