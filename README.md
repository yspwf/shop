# vue+vue-router+webpack 创建商城 
shop project
基本的技术栈介绍
基于node创建基本环境
```
npm init  //创建项目

//下载npm 包
npm install webpack webpack-cli webpack-dev-server --save 
npm install vue vue-loader vue-template-compiler vue-style-loader vue-router --save
npm install style-loader css-loader --save
npm install url-loader file-loader --save
npm install node-sass sass-loader --save
npm install babel-loader @babel/core @babel/preset-env --save
npm install html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin --save
npm install vuex --save
npm install axios --save
npm install mockjs --save

//插件包
npm install swiper --save
```
以上的就是基本使用的npm包

vue使用
```
import Vue from 'vue';
import App from './app.vue';

new Vue({
  el:"#app",
  render:h=>h(App)
});
```
这样我们就创建了基本的vue环境
vue组件
```
//创建组件
<template>
    <div>
       {{msg}}  ---  {{content}}
    </div>
</tempalte>
<script>
   export default {
          name:"component",
          data(){
              return {}
          },
          props:{
              msg:{
                  type: String,  //类型限制
                  default: ''
              },
              content:{
                  type: [Array, Obeject], //类型限制
                  default: ''
              }
          }
   }
</script>

//使用组件
import test(组件名称) from '路径';
<test msg="测试消息" :content="content"></test>

<script>
export default {
    data(){
         return {
              content:[
                  {.........}
              ]
         }
    }
}
</script>

```

vue-router 使用
```
imprt Vue from 'vue';
import Router from 'vue-router';

import HOME from '路径';   普通用法
import HOME from r => require.ensure([], () => r(require('../page/index.vue')));   //优化懒加载  这里是webpack懒加载的方式

const routeList = [
    {
      path:'/',
      redirect:'/home'  //跳转
    },{
      path:'/home',
      name:'home',
      componenet:HOME,
      meta:{},
      child:[    //子路由
          {
            path:'index',
            name:'index'
            component:r => require.ensure([], () => r(require('../page/home.vue')));
          },
          {
            path:'find',
            name:'find'
            component:r => require.ensure([], () => r(require('../page/find.vue')));
          }
          .................
      ]
    }
]

```
vuex使用
```
import Vuex from 'vuex';

const store = new Vuex.Store({
        state:{
        },
        getter:{
        },
        mutations:{
        },
        actions:{
        }
});

new Vue({
    ..
    store
    ..
});
```
以上及vuex的基本结构，使用参考src/store目录下的文件

以上就是项目使用的基本技术，具体的使用方法请查看项目内的文件。

运行：
```
npm install  //加载npm包
npm run dev
npm run build  
```








