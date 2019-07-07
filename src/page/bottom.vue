<template>
    <div class="bottom">
        <div class="bottomNav">
            <div :class="{current: current==1}" @click="block('home')">首页</div>
            <div :class="{current: current==2}" @click="block('find')">发现</div>
            <div :class="{current: current==3}" @click="block('mine')">我的</div>
            <!-- <router-link to="/home/index">首页</router-link>
            <router-link to="/home/index">首页</router-link>
            <router-link to="/home/index">首页</router-link> -->
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
        }
    },
    computed: {
        current(){
            return this.$store.state.bottomCurrent;
        }
    },
    // watch: {
    //     $route(to, from){
    //         console.log(to);
    //         switch(to.name){
    //             case 'home':
    //                 this.current = 'home';
    //                 break;
    //             case 'find':
    //                 this.current = 'find';
    //                 break;
    //             case 'mine':
    //                 this.current = 'mine';
    //                 break;
    //             default :
    //                 console.log('error');
    //                 break;
    //         }
    //     }
    // },
    methods: {
        block(value){
            switch(value){
                case 'home':
                    this.$router.replace('/home/home');
                    break;
                case 'find':
                    this.$router.replace('/home/find/good');
                    break;
                case 'mine':
                    this.$router.replace('/home/mine');
                    break;
                default :
                    console.log('error');
                    break;
            }
        }
    },
}
</script>

<style lang="scss" scoped>
.bottom{
    background: #fff;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    .bottomNav{
        width: 100%;
        flex: 1;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .current{
            background: #ff984d;
            color: #fff;
        }
        div{
            height: 1.5rem;
            line-height: 1.5rem;
            width: 33.333%;
            text-align: center;
            font-size: 0.4rem;
        }
    }
}
</style>
