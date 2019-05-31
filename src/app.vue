<template>
    <div>
        <router-view></router-view>
        <!-- <s-bottom></s-bottom> -->
    </div>
</template>

<script>
//import sBottom from './page/bottom.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        //sBottom
    },
    watch: {
        $route(to, from){
            //console.log(to.name);
            this.bottomChange(to.name);
            // switch(to.name){
            //     case 'home':
            //         _this.$store.bottomCurrent = 1;
            //         break;
            //     case 'find':
            //         _this.$store.bottomCurrent = 2;
            //         break;
            //     case 'mine':
            //         _this.$store.bottomCurrent = 3;
            //         break;
            //     default :
            //         console.log('error');
            //         break;
            // }
        }
    },
    methods: {
        bottomChange(name){
           console.log(name);
            switch(name){
                case 'home':
                    this.$store.state.bottomCurrent = 1;
                    break;
                case 'find':
                    this.$store.state.bottomCurrent = 2;
                    break;
                case 'mine':
                    this.$store.state.bottomCurrent = 3;
                    break;
                default :
                    this.$store.state.bottomCurrent = 100;
                    break;
            }
        }
    },
}
</script>