<template>
    <div class="good">
        <div class="recommend" v-for="(item, index) in recommendInfo" :key="index">
            <div class="intro">
                <div class="name">
                   <div class="headimg">
                       <img :src="item.headimg">
                   </div>
                   <div>{{item.name}}</div>
                </div>
                <h4 class="title">{{item.title}}</h4>
                <div class="content">{{item.intro}}</div>
                <div class="views">
                    <i class="viewsicon"></i>
                    <a href="javascript:void(0)">{{item.click}}人看过</a>
                </div>
            </div>
            <div class="goodsimg">
                <img :src="item.img">
            </div>
        </div>
        <!-- <div class="recommend">
            <div class="intro">
                <div class="name">
                   <div class="headimg">
                       <img src="/src/static/images/head.png">
                   </div>
                   <div>昵称</div>
                </div>
                <h4 class="title">标题标题标题标题标题</h4>
                <div class="content">简单描述简单描述简单描述简单描述</div>
                <div>
                    <a href="javascript:void(0)">点赞</a>
                </div>
            </div>
            <div class="goodsimg">
                <img src="/src/static/images/4.jpg">
            </div>
        </div> -->
    </div>
</template>

<script>
import axios from 'axios';
import { constants } from 'crypto';
export default {
    data(){
        return {
            recommendInfo:''
        }
    },
    mounted(){
        this.$nextTick(()=>{
            axios.post('/goods/recommend').then((data)=>{
                this.recommendInfo = data.data.data;
                console.log(this.recommendInfo);
            });
        })
    }
}
</script>

<style lang="scss" scoped>
    $fontSize:0.35rem;
    $titleSize:0.4rem;
    .good{
        .recommend{
            display: flex;
            padding: 0.2rem;
            background: #fff;
            margin: 0.2rem 0;
            .intro{
                width: 70%;
                div{
                    padding:0.05rem 0;
                }
                h4{
                    padding:0.05rem 0;
                }
                .name{
                    font-size: $fontSize;
                    display: flex;
                    align-items: center;
                    .headimg{
                        width: 15%;
                        margin-right: 0.3rem;
                    }
                }
                .title{
                    font-size:$titleSize;
                    color: #333;
                }
                .content{
                    font-size: $fontSize;
                    color:#9e9e9e;
                }
                .views{
                    display: flex;
                    .viewsicon{
                        display: block;
                        background: url('../static/images/icon/click.png') no-repeat center center;
                        background-size: contain;
                        text-align: right;
                        width:6%;
                        margin-right: 1%;
                    }
                    
                }
            }
            .goodsimg{
                width: 30%;
                img{
                    height: 3rem;
                }
            }
        }
    }
</style>
