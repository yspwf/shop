<template>
     <div class="pro">
            <div class="categoryTitle">
                <i></i>
                <label for="">{{title}}</label>
            </div>
            <div class="list">
                <router-link to="/detail" class="listLink" v-for="(item, index) in list" :key="index">
                    <div class="listimg">
                        <img :src="item.img">
                    </div>
                    <font  class="listname">{{item.proname}}</font>
                    <div  class="listprice"> 
                       <span class="actual">￥{{item.privilege}}</span>
                        <span class="privilege">￥{{item.actual}}</span>
                    </div>
                    <div  class="tags">
                        <label for="" v-for="(tag, index) in item.tags" :key="index">{{tag}}</label>
                    </div>
                </router-link>
                 <!-- <router-link to="" class="listLink">
                    <div class="listimg">
                        <img src="/src/static/images/pro.jpg">
                    </div>
                    <font  class="listname">商品是为了出售而生果</font>
                    <div  class="listprice"> 
                       <span class="actual">￥199</span>
                        <span class="privilege">￥234</span>
                    </div>
                    <div class="tags">
                        <label for="">爆款</label>
                        <label for="">劵</label>
                    </div>
                </router-link>
                <router-link to="" class="listLink">
                    <div class="listimg">
                        <img src="/src/static/images/pro2.jpg">
                    </div>
                    <font  class="listname">商品是为了出售而生</font>
                    <div  class="listprice"> 
                       <span class="actual">￥199</span>
                        <span class="privilege">￥234</span>
                    </div>
                    <div  class="tags">
                        <label for="">爆款</label>
                        <label for="">劵</label>
                    </div>
                </router-link>
                <router-link to="" class="listLink">
                    <div class="listimg">
                        <img src="/src/static/images/pro1.jpg">
                    </div>
                    <font  class="listname">商品是为了出售而生</font>
                    <div  class="listprice"> 
                        <span class="actual">￥199</span>
                        <span class="privilege">￥234</span>
                    </div>
                    <div  class="tags">
                        <label for="">爆款</label>
                        <label for="">劵</label>
                    </div>
                </router-link> -->
            </div>
            <div class="more">
                <router-link to="">查看更多</router-link>
            </div>
        </div>
</template>


<script>
export default {
    data(){
        return {

        }
    },
    props:{
        title:{
            type: String,
            required: true
        },
        list:{
            type:Array,
            default: function(){
                return '';
            }
        }
    }
}
</script>


<style scoped>
.pro{
    margin-bottom: 0.3rem;
    /* background: #fff; */
    background: linear-gradient(to bottom, #f7f7f7, #fff);
    padding-top: 0.5rem;
}
.categoryTitle{
    width: 100%;
    height: 1.2rem;
    border-radius: 0 0 100% 100%/0 0 50% 50%;
    background: linear-gradient(to right,#f9c346,#fd9e15);
    text-align: center;
    color: #fff6f6;
    font-size: 0.4rem;
    line-height: 1.1rem;
    display: flex;
    -webkit-display:flex;
    justify-content: center;
}
.categoryTitle i{
    display: block;
    width: 6%;
    height: 1.1rem;
    background: url('../static/images/new.png') center center no-repeat;
    background-size: contain;
    margin: 0 0.1rem;
}
.list{
    display: flex;
    -webkit-display:flex;
    padding: 0.5rem 0;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 1px solid #e8e8e8;
}

.list .listLink{
    width: 32%;
    color: #333;
    border: 0.2rem;
    border-radius: 0.2rem;
    box-shadow: 1px 2px 11px 0px #e2e2e2;
    margin: 0.25rem 0;
    display: flex;
    -webkit-display:flex;
    flex-direction: column;
}
.list .listLink .listimg{
    height: 2.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
}
.list .listLink .listimg img{
        border-radius: 0.2rem 0.2rem 0 0;
}
.list .listLink .listname,.list .listLink .listprice, .list .listLink .tags{
    padding:0.08rem;
}
.list .listLink .listprice .actual{
    color:red;
}
.list .listLink .listprice .privilege{
    color:#666;
    text-decoration: line-through;
}
.list .listLink .tags{
    padding-bottom: 0.15rem;
}
.list .listLink .tags label{
    border: 1px solid red;
    padding: 0 0.15rem;
    border-radius: 5px;
    color: red;
    margin-right: 0.1rem;
}
.more{
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 1.35rem;
}
</style>
