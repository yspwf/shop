<template>
    <div class="login">
        <div class="loginout">
            
            <!-- <div class="loginselect">
                <router-link to="/loginin">登录</router-link> <router-link to="/register">注册</router-link>
            </div> -->
        </div>
        <div class="account">
            <!-- <router-view></router-view> -->
           <div class="accounticon">
                <i class="phone"></i>
                <input type="text" placeholder="请输入手机号" v-model="userinfo.username">
            </div>
            <div class="accounticon">
                <i class="pwd"></i>
                <input type="password" placeholder="请输入密码" v-model="userinfo.password">
            </div>
            <div class="acoountbtn">
                <!-- <v-touch tag="span" v-on:tap="login">登录</v-touch> -->
                <span @click="login">登录</span>
            </div>
        </div>
    </div>
</template>

<script>
//import {get,post} from '../http';
//import {post,fetch,patch,put} from '../http'
import axios from 'axios';
export default {
    data(){
        return {
            userinfo:{
                username:'',
                password:''
            }
        }
    },
    methods: {
        login(){
           axios.post('/user/userInfo',{id:34}).then(function(response){
               if(response.data.result=='success'){
                  
                   const res = this.$store.commit('userLogin',response.data);
                   //console.log(this.$store.state.login);
                   //console.log('44');
                   //router.push('/mine');
                   this.$router.replace('/home/mine'); 
                }
           }.bind(this)).catch(function(error){
               console.log(error);
           });
        }
    },
   
}
</script>

<style scoped>
.login{
    height: 100%;
}
    .loginout{
        background: #fff;
        
        height: 100%;
    }
    .loginimg{
        width: 15%;
        height: 2rem;
        background: #fff;
        margin: 0 auto;
        border-radius: 2rem;
        text-align: center;
    }
    .loginimg img{
        width: 80%;
        height: 1.5rem;
        vertical-align: -webkit-baseline-middle;
    }
    .loginselect{
        display: flex;
        -webkit-flex:flex;
        justify-content: center;
        padding: 0.3rem 0;
        padding-bottom: 5rem;
    }
    .loginselect a{
        font-size: 0.5rem;
        display: inline-block;
        width: 20%;
        text-align: center;
        color: #efefef;
    }
    .account{
        width: 80%;
        margin: 0 auto;
        position: absolute;
        left: 10%;
        top: 4.3rem;
        display: flex;
        -webkit-flex:flex;
        flex-direction: column;
        background: #fff;
        border-radius: 15px;
    }
    .account .accounticon{
        display: flex;
        -webkit-flex: flex;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
        margin: 0.2rem 1rem;
        padding: 0.03rem 0;
    }
    .account .accounticon .phone,.account .accounticon .pwd{
        width: 10%;
        display: inline-block;
        height: 1rem;
    }
    .account .accounticon .codeicon{
        width: 20%;
    }
    .account .accounticon .phone{
        background:#fff url('../static/images/icon/phone.png') no-repeat 50% 70%;
        background-size: contain;
    }
    .account .accounticon .pwd{
        background:#fff url('../static/images/icon/pwd.png') no-repeat 50% 70%;
        background-size: contain;
    }
    .account input{
        width: 90%;
        height:1rem;
        border:none;
        outline: none;
        font-size: 0.6rem;
        text-align: left;
    }
     .account .acoountbtn{
         text-align: center;
     }
    .account .acoountbtn span{
        width: 80%;
        text-align: center;
        border-radius: 2rem;
        background: linear-gradient(to right,#ff9c06, #ff8181);
        display: inline-block;
        margin: 1rem 0;
        font-size: 0.5rem;
        color: #fff;
        height: 1rem;
        line-height: 1rem;
    }
    .code{
        font-size: 0.4rem;
        width: 45%;
        text-align: center;
        height: 0.8rem;
        line-height: 0.8rem;
        background: #0f9e6a;
        color: #fff;
        border-radius: 1rem;
        margin-top: 0.25rem;
    }
</style>
