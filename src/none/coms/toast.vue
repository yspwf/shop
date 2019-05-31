<template>
    <div class="wraper" v-if="show"> 
        {{text}}
    </div>
</template>

<script>
export default {
    data(){
        return {
            show:''
        }
    }
}
</script>

<style lang="scss" scoped>
.wraper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0,0,0,.35);
    border: 1px solid #e6e4e4;
    text-align: center;
    color:#fff;
    padding: 10px 30px;
    border-radius: 5px;
}
</style>
