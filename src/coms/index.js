import button from './button.vue';
import radio from './radio.vue';

// const {sButton, sRadio} = (Vue)=>{
//     Vue.component(sButton, button);
//     Vue.component(sRadio, radio);
// }

import toast from './toast.js';
//import toast from './toast.vue';

const sVue = {
    install:function(Vue){
        Vue.component('sButton', button)
        Vue.component('sRadio', radio)
        //Vue.component('sToast', toast)
        
        Vue.prototype.$toast = toast.installTost
    }
}

export default sVue;
