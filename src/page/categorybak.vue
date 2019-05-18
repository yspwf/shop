<template>
<div class="goods">
            <div class="menu-wrapper" ref="menuwrapper">
                <ul>
                    <li  class="menu-item">
                        <span class="text">
                                菜单11111
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单2222
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单3333
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单4444
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li><li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                    <li  class="menu-item">
                        <span class="text">
                                菜单5555
                        </span>
                    </li>
                   
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodwrapper">
               
            </div>
        </div>  
</template>

<script>
import BScroll from 'better-scroll';
export default {
    data(){
        return {
            //currentIndex:0,
            goods:[
                {id:1, name:"商品11", foods:[{id:11,name:"子商品11"},{id:22,name:"子商品22"},{id:22,name:"子商品22"}]},
                {id:2, name:"商品22", foods:[{id:11,name:"子商品11"},{id:22,name:"子商品22"},{id:22,name:"子商品22"},{id:22,name:"子商品22"},{id:22,name:"子商品22"},{id:22,name:"子商品22"}]},
                {id:3, name:"商品33", foods:[{id:11,name:"子商品11"},{id:22,name:"子商品22"},{id:22,name:"子商品22"},{id:22,name:"子商品22"}]},
                {id:4, name:"商品44", foods:[{id:11,name:"子商品11"},{id:22,name:"子商品22"}]},
            ],
            listHeight:[],
            scrollY: 0,
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
            // this.scroll = new BScroll(this.$refs.foodwrapper, {
            //     probeType:3
            // });
             this.scroll = new BScroll(this.$refs.menuwrapper, {
                probeType:3
            });
            // this.scroll.on('scroll', (pos)=>{
            //     console.log(Math.abs(pos.y));
            // });
            //执行滚动
            //this._initScroll();

            //计算高度
            //this._caculateHeight();
        });
    },
    
 
}
</script>

<style>



       .goods {
            position: absolute;
            top: 0px;
            bottom: 0px;
            display: flex;
            /* overflow: hidden; */
            /* background: #fff; */
        }

        .goods .menu-wrapper {
            /* flex: 0 0 80px;
            width: 80px;
            background: #f3f5f7; */
            border:1px solid red;
        }

        /* .goods .menu-wrapper .current {
            position: relative;
            z-index: 10;
            margin-top: -1px;
            background: #FFFFFF;
            font-weight: 700;
            font-size: 14px;
        } */

        .goods .menu-wrapper .menu-item {
            /* display: table; */
            height: 54px; 
            /* width: 80px;
            line-height: 14px;
            padding: 0 12px;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            box-sizing: border-box; */
        }

        /* .goods .menu-wrapper .menu-item {
            display: table;
            height: 54px;
            width: 80px;
            line-height: 14px;
            padding: 0 12px;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            box-sizing: border-box;
        }

        .goods .menu-wrapper .menu-item .icon {
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 2px;
            -webkit-background-size: 12px 12px;
            background-size: 12px 12px;
            background-repeat: no-repeat;
            vertical-align: top;
        }

        .goods .menu-wrapper .menu-item .text {
            display: table-cell;
            width: 56px;
            vertical-align: middle;
            font-size: 12px;
            text-align: center;
        } */

        /* .goods .menu-wrapper .menu-item .decrease {
            background-image: url(img/decrease_2@2x.png);
        }

        .goods .menu-wrapper .menu-item .discount {
            background-image: url(img/decrease_2@2x.png);
        }

        .goods .menu-wrapper .menu-item .guarantee {
            background-image: url(img/decrease_2@2x.png);
        }

        .goods .menu-wrapper .menu-item .invoice {
            background-image: url(img/decrease_2@2x.png);
        }

        .goods .menu-wrapper .menu-item .special {
            background-image: url(img/decrease_2@2x.png);
        } */

        /* .goods .foods-wrapper {
            flex: 1;
        }

        .goods .foods-wrapper .title {
            padding-left: 14px;
            height: 26px;
            line-height: 26px;
            border-left: 2px solid #d9dde1;
            font-size: 12px;
            color: rgb(147, 153, 159);
            background: #F3F5F7;
        }

        .goods .foods-wrapper .current {
            color: #42B983;
            font-size: 14px;
            transition: all .5s;
            line-height: 27px;
        }

        .goods .foods-wrapper .food-item {
            display: flex;
            /* margin: 18px 0 18px 0; *
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            padding-bottom: 18px;
                background: #efefef;
        }

        .goods .foods-wrapper .food-item:last-child {
            border-bottom: 0px solid rgba(7, 17, 27, .1);
            margin-bottom: 0;
        }

        .goods .foods-wrapper .food-item .icon {
            flex: 0 0 57px;
            margin-right: 10px;
            margin-left: 10px;
        }

        .goods .foods-wrapper .food-item .content {
            position: relative;
            flex: 1;
        }

        .goods .foods-wrapper .food-item .content .name {
            margin: 2px 0 8px 0;
            height: 14px;
            line-height: 14px;
            font-size: 14px;
            color: rgb(7, 17, 27);
        }

        .goods .foods-wrapper .food-item .content .desc {
            margin-bottom: 8px;
            line-height: 10px;
            font-size: 10px;
            color: rgb(147, 153, 159);
        }

        .goods .foods-wrapper .food-item .content .extra {
            font-size: 10px;
            color: rgb(147, 153, 159);
            line-height: 10px;
        }

        .goods .foods-wrapper .food-item .content .extra .count {
            margin-right: 12px;
        }

        .goods .foods-wrapper .food-item .content .price {
            font-weight: 700;
            line-height: 24px;
        }

        .goods .foods-wrapper .food-item .content .price .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
        }

        .goods .foods-wrapper .food-item .content .price .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
        }

        .goods .foods-wrapper .food-item .content .cartcontrol-wrapper {
            position: absolute;
            right: 6px;
            bottom: 12px;
        } */
</style>
