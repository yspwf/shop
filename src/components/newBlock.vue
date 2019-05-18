<template>
    <div class="newmain">
       <div class="newTitle">
           <i></i>
           {{title}}
           <i></i>
       </div>
       <div class="list">
           <router-link to="" class="listLink" v-for="(item, index) in data" :key="index">
                    <div class="listimg">
                        <img :src="item.img">
                    </div>
                    <font  class="listname">{{item.proname}}</font>
                    <div  class="listprice"> 
                        <span class="actual">￥{{item.actual}}</span>
                        <span class="privilege">￥{{item.privilege}}</span>
                    </div>
                    <div  class="tags">
                         <label for="" v-for="(tag, index) in item.tags" :key="index">{{tag}}</label>
                        <!-- <label for="">爆款</label>
                        <label for="">劵</label> -->
                    </div>
            </router-link>
           <!-- <router-link to="" class="listLink">
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
            </router-link>
             <router-link to="" class="listLink">
                    <div class="listimg">
                        <img src="/src/static/images/pro.jpg">
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
            </router-link> -->
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
            type:String,
            default:'未知主题'
        },
        data:{
            type:Array,
            default:''
        }
    }
}
</script>

<style scoped>
.newmain{
    padding: 0.5rem 0 2rem;
    background: linear-gradient(to bottom, #fbfbfb, #fff);
}
.newmain .newTitle{
    display: flex;
    -webkit-display:flex;
    justify-content: center;
    font-weight: bolder;
    font-size: 0.4rem;
}
.newmain .newTitle i{
    display: block;
    width: 20%;
    border-bottom: 1px solid #cecece;
    height: 0;
    margin:0.28rem 0.2rem 0;
}
.list{
    display: flex;
    -webkit-display:flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    flex-wrap: wrap;
}


.list .listLink{
    width: 49%;
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
    height: 3.5rem;
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
</style>
