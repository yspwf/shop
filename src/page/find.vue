<template>
    <div class="find">
        <div class="catogery">
            <router-link to="/home/find/good">优选</router-link>
            <router-link to="/home/find/recommend">达人推荐</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<style lang="scss" scoped>
.find{
    width:100%;
    .catogery{
        display:flex;
        width:100%;
        background:#fff;
        justify-content: center;
        a{
            height:1rem;
            width:15%;
            text-align:center;
            line-height:1rem;
            font-size: 0.35rem;
        }
    }
}
</style>