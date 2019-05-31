<template>
    <div>
       <!-- <router-view></router-view>  -->
       <transition name="fade"> 
　　　　　　<router-view></router-view>
　　　　</transition>
       <s-bottom v-if="show"></s-bottom>
    </div>
</template>

<script>
import sBottom from './bottom.vue';
export default {
    data() {
　　　　return {
　　　　　　transitionName: 'slide-right',
　　　　}
　　},
    components:{
         sBottom
    },
    computed: {
        show(){
            if(this.$store.state.bottomCurrent == 100){
                return false;
            }else{
                return true;
            }
        }
    },
    watch: {
        $route(to, from){
            //console.log(to);
            let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
    　　　　　　if(isBack) {
    　　　　　　　　this.transitionName = 'slide-right';
    　　　　　　}else{
    　　　　　　    this.transitionName = 'slide-left';
    　　　　　  }
    　　        this.$router.isBack = false
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


//  .fade-enter{
//     opacity: 1;
//     transform:translateX(100%);
//  }
//  .fade-enter-active{
//     transition:all 0.21s linear;
//  }
//  .fade-enter-to{
//     opacity: 1;
//     transform:translateX(0);
//  }
//  .fade-leave{
//     opacity: 0;
//     transform:translateX(0);
//  }
//  .fade-leave-active{
//      transition:all 0.11s linear;
//  }
//  .fade-leave-to{
//     opacity: 0;
//     transform:translateX(-100%);
//  }


 .fade-enter{
    opacity: 1;
    transform:translateX(-100%);
 }
 .fade-enter-active{
    transition:all 0.21s linear;
 }
 .fade-enter-to{
    opacity: 1;
    transform:translateX(0);
 }
.fade-leave{
    opacity: 0;
    transform:translateX(100%);
 }
 .fade-leave-active{
     transition:all 0.11s linear;
 }
 .fade-leave-to{
    opacity: 0;
    transform:translateX(100%);
 }



// .slide-left-enter,
//  .slide-right-leave-active {
    
//     -webkit-transform: translate(100%, 0);
//     transform: translate(100%, 0);
// }

// .slide-left-leave-active,
// .slide-right-enter {
//     -webkit-transform: translate(-100%, 0);
//     transform: translate(-100% 0);
// }
</style>
