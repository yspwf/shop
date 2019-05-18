<template>
    <div class="header">
        {{title}}
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            required: true,
            default:'精选百货'
        }
    }
}
</script>

<style scoped>
    .header{
        width: 100%;
        text-align: center;
        height: 1rem;
        line-height: 1rem;
        background: #ff6161;
        color: #fff;
        font-size: 0.45rem;
    }
</style>