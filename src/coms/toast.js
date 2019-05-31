import Vue from 'vue';

import toast from './toast.vue';
import { createBrotliCompress } from 'zlib';
import { POINT_CONVERSION_HYBRID } from 'constants';

// toast.installTost = function(){
//     const notice = Vue.extend(toast);
//     const toastDom = new notice({
//         el:document.createElement('div'),
//         data(){
//             return {
//                 text:'ewrwer',
//                 show: true
//             }
//         }
//     }).$mount();
//     // document.body.appendChild(toastDom.$el);
//     // setTimeout(() => {toastDom.show = false}, 500);
// }


toast.installTost = {
    msg:function(text){
        const notice = Vue.extend(toast);
        const toastDom = new notice({
            el:document.createElement('div'),
            data(){
                return {
                    text: text,
                    show: true
                }
            }
        }).$mount();
        return toastDom;
        // document.body.appendChild(toastDom.$el);
        // setTimeout(() => {toastDom.show = false}, 500);
    },
    success:function(msg='成功'){
        const obj = this.msg(msg);
        document.body.appendChild(obj.$el);
        setTimeout(() => {obj.show = false}, 500);
    },
    error:function(msg='网络错误'){
        const obj = this.msg(msg);
        document.body.appendChild(obj.$el);
        setTimeout(() => {obj.show = false}, 500);
    },

}

export default toast;