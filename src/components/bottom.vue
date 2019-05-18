<template>
    <div class="bottom">
        <div class="bottomNav">
            <router-link to="/">首页</router-link>
            <router-link to="/category">分类</router-link>
            <router-link to="/find">发现</router-link>
            <router-link to="/mine">我的</router-link>
        </div>
    </div>
</template>


<style scoped>
.bottom{
    background: #fff;
}
.bottomNav{
    position: fixed;
    bottom: 0;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #fff;
}
.bottomNav a{
    height: 1.5rem;
    width: 100%;
    text-align: center;
}
</style>
