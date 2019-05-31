<template>
    <label class="radio">
            <i class="cicle" :class="[{'cicleSelect':select===mylabel}]"></i>
            <input class="inputradio" type="radio" v-model="select" :value="mylabel" @click="upInput">
            <slot></slot> 
            <!-- <input type="radio" class="inputradio" v-model="model" :value="label" @click="upInput">
            <slot></slot> -->
            <!-- <input class="radio-icon" type="radio" :name="name" :value="value" @change="upInput">
            <span class="radio-content">{{text}} {{value}}</span> -->
    </label>
</template>

<script>
export default {
    data(){
        return {
           
        }
    },
    props: {
        mylabel: "",
        value: "",
    },
    computed: {
        select:{
            get(){
                return this.value;
            },
            set(val){
                this.$emit("input", val);
            }
        }
    },
    //  computed: {
       
    //     model: {
    //         get() {
    //             return this.value;
    //         },
    //         set(val) {
    //             this.$emit("input", val);
    //         }
    //     }
    // },
    // props:{
    //     name:{
    //         type: String,
    //         default:''
    //     },
    //     sex:{
    //         type: [String, Number, Boolean],
    //         default:''
    //     },
    //     value:{
    //         type: [String, Number, Boolean],
    //         default:''
    //     },
    //     text:{
    //         type: [String, Number],
    //         default:''
    //     }
    // },
    methods: {
        upInput(e){
            this.$emit('change', e.target.value);
        }
    },
}
</script>

<style lang="scss" scoped>
.radio{
    position: relative;
    .cicle{
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid red;
        border-radius: 12px;
    }
    .cicleSelect{
        position: relative;
    }
    .cicleSelect::after{
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        background: red;
        border-radius: 16px;
        -webkit-border-radius: 16px;
        -moz-border-radius: 16px;
        position: absolute;
        top: 2px;
        left: 2px;
        transform: scale(1);
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        transition: all ease-in-out 300ms;
        -webkit-transition : all ease-in-out 300ms;
        -moz-transition : all ease-in-out 300ms;
    }
    .inputradio{
        position: absolute;
        top:0;
        left:0;
        height: 20px;
        width: 20px;
        border:1px solid red;
            background: green;
        -webkit-appearance: none;
        opacity: 0;
    }
}

// input[type=radio]{
//        /*去除浏览器默认样式*/
//        -webkit-appearance: none;
//        -moz-appearance: none;
//        appearance: none;
//        /*自定义样式*/
//        width: 20px;
//        height: 20px;
//        border:1px solid red;
//        border-radius: 20px;
//        -webkit-border-radius: 20px;
//        -moz-border-radius: 20px;
//        outline: none;
//        position: relative;
//    }
//    input[type=radio]::after{
//       content: '';
//       display: block;
//        width: 14px;
//       height: 14px;
//       background: red;
//       border-radius: 14px;
//       -webkit-border-radius: 14px;
//       -moz-border-radius: 14px;
//       position: absolute;
//       top: 2px;
//       left: 2px;
//       transform: scale(0);
//       -webkit-transform: scale(0);
//       -moz-transform: scale(0);
//       transition: all ease-in-out 300ms;
//       -webkit-transition : all ease-in-out 300ms;
//       -moz-transition : all ease-in-out 300ms;
//    }
//   input[type=radio]:checked::after{
//       transform: scale(1);
//       -webkit-transform: scale(1);
//       -moz-transform: scale(1);
//   }
</style>
