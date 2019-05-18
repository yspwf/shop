<template>
<div class="goods">
            <div class="menu-wrapper" ref="menuwrapper">
               
                   <div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                       <div>
                           菜单5555
                       </div>
                    <!-- <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                       菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li>
                    <li  class="menu-item">
                        菜单5555
                    </li> -->
                   
                </div>
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
           
            
        }
    },
    mounted() {
        this.$nextTick(()=>{
             this.scroll = new BScroll(this.$refs.menuwrapper, {});
            
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

        .goods .menu-wrapper div>div{
            /* display: table; */
            height: 54px; 
            /* width: 80px;
            line-height: 14px;
            padding: 0 12px;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            box-sizing: border-box; */
        }

</style>
