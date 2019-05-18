<template>
    <div class="main">
        <transition :name="switchover">
            <router-view></router-view> 
        </transition>
        <bottom v-if="tagnav"></bottom>
    </div>
</template>

<script>
import bottom from './components/bottom.vue';
export default {
    data(){
        return {
            switchover:'left',
            tagnav: true
        }
    },
    watch: {
        $route(to, from){
            console.log(to);
            if(to.meta.index==0){
                this.switchover=""
                return ;
            }
            if(to.meta.index >= 4){
                this.tagnav = false;
            }else{
                this.tagnav = true;
            }
            if(to.meta.index < from.meta.index){
                console.log('right');
                this.switchover="right"
            }else{
                console.log('left');
                this.switchover="left"
            }
        }
    },
    components:{
        bottom:bottom
    }
}
</script>

<style lang="scss" scoped>
.main{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

/*
.left-enter,.left-leave-to{
    transform: translate(-100%, 0);
}
.left-leave,.left-enter-to{
    transform: translate(100%, 0);
}
.left-enter-active,.left-leave-active{
    transition: all 0.3s;
}
*/

/*
.left-enter{
  transform:translateX(100%);
}
.left-enter-to{
  transform:translateX(0);
}
 
.left-enter-active{
   opacity: 1;
  transition:all 0.3s linear;
}
.left-leave{
  transform:translateX(-100%);
}
.left-leave-to{
  transform:translateX(0);
}
.left-leave-active{
    opacity: 0.5;
    transition:all 0.1s linear;
}



.right-enter{
  transform:translateX(0);
}
.right-enter-to{
  transform:translateX(-100%);
}
 
.right-enter-active{
   opacity: 0;
  transition: 0.3s;
}
.right-leave{
  transform:translateX(0);
}
.right-leave-to{
  transform:translateX(100%);
}
.right-leave-active{
  opacity: 0;
  transition: 0.3s;
}
*/

 .left-enter{
    opacity: 1;
    transform:translateX(100%);
 }
 .left-enter-active{
    transition:all 0.21s linear;
 }
 .left-enter-to{
    opacity: 1;
    transform:translateX(0);
 }
 .left-leave{
    opacity: 0;
    transform:translateX(0);
 }
 .left-leave-active{
     transition:all 0.11s linear;
 }
 .left-leave-to{
    opacity: 0;
    transform:translateX(-100%);
 }


 .right-enter{
    opacity: 1;
    transform:translateX(-100%);
 }
 .right-enter-active{
    transition:all 0.21s linear;
 }
 .right-enter-to{
    opacity: 1;
    transform:translateX(0);
 }
  .right-leave{
    opacity: 0;
    transform:translateX(100%);
 }
 .right-leave-active{
     transition:all 0.11s linear;
 }
 .right-leave-to{
    opacity: 0;
    transform:translateX(100%);
 }

</style>

