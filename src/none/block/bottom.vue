<template>
    <div class="bottom">
        <div class="bottomNav">
            <div :class="{current: current==1}" @click="block(1)">首页</div>
            <div :class="{current: current==2}" @click="block(2)">发现</div>
            <div :class="{current: current==3}" @click="block(3)">我的</div>
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
            return this.$store.state.num;
        }
    },
    methods: {
        block(value){
            this.$store.commit('current', value);
            switch(value){
                case 1:
                    this.$router.replace('/home/index');
                    break;
                case 2:
                    this.$router.push('/home/find');
                    break;
                case 3:
                    this.$router.push('/home/mine');
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
