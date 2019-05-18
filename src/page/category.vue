<template>
<div>
     <headTop></headTop>
      <div class="top">
        <div class="category">
            <div class="left" ref="left">
                <div class="menu">
                    <div class="menucate current">推荐分类</div>
                    <div class="menucate">新品</div>
                    <div class="menucate">居家</div>
                    <div class="menucate">餐厨</div>
                    <div class="menucate">美护</div>
                    <div class="menucate">数码</div>
                    <div class="menucate">服饰</div>
                    <div class="menucate">鞋靴</div>
                    <div class="menucate">箱包</div>
                    <div class="menucate">文体</div>
                    <div class="menucate">婴童</div>
                    <div class="menucate">杂货</div>
                </div> 
            </div> 

            <div class="right" ref="right">
                <div class="categorySelect">
                    <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                    <br/><br/><br/>
                     <div class="hot">
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                        <label for="">夏装</label>
                    </div>
                </div>
            </div>
        </div>
     </div>
</div>
</template>

<script>
import header from '../components/header.vue';
import bottom from '../components/bottom.vue';

import BScroll from 'better-scroll';
export default {
    data(){
        return {
           
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
           // this.Lscroll = new BScroll(this.$refs.left, {});

            this.Rscroll = new BScroll(this.$refs.right, {});
            
        });
    },
    components:{
        headTop:header,
        bottom:bottom
    }
}
</script>

<style scoped>
.top{
    /* padding: 0 0.15rem; */
}
.cateTop{
    /* position: relative;
    border:1px solid blue; */
}
.category{
    position: absolute;
    top:1.5rem;
    bottom: 0;
    display: flex;
    overflow: hidden;
    width: 100%;
}
.category .left{
    width: 20%;
}
.category .left .menu{

}
.category .left .menu .menucate{
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.35rem;
}
.category .left .menu .current{
    background: #fff;
}

.category .right{
    width: 80%;
    background: #fff;
}
</style>
