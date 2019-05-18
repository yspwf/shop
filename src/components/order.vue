<template>
    <div class="bottom">
        {{allstatus}}  
        <div class="bottomNav">
            <div class="servericon">
               <div class="checkbox">
                    <!-- <input type="checkbox" name="" id=""> -->
                    <input type='checkbox' id='checkbox' @click="allselect" v-model="status">
                    <label for="">全选</label>
                </div>
            </div>
            <div class="btn">
                <button class="buy">去结算</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
             allstatus: this.status
        }
    },
    props:{
        select:{
            type: Boolean,
        }
    },
    computed: {
        status(){
            return this.$store.state.carts.every((item, index, array)=>{
                 return item.select == true;
            });
        }
    },
     
    methods:{
        allselect(){
            this.$emit('change');
        },
        statusChange(){
            this.allstatus = false;
        }
    }
}
</script>


<style lang="scss" scoped>
$back:#fff;
$flex:flex;
$between: space-between;
$around: space-around;
.bottom{
    background: $back;
}
.bottomNav{
    position: fixed;
    bottom: 0;
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: $around;
    background: $back;
    .servericon{
        display: $flex;
        width: 70%;
        .checkbox{
                width: 30%;
                height: 1rem;
                display: flex;
                height: 1rem;
                justify-content: center;
                align-items: center;
                margin-right: 0.2rem;
            input[type=checkbox]{
                // margin: 50px;
                /*同样，首先去除浏览器默认样式*/
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                /*编辑我们自己的样式*/
                position: relative;
                 width: 25%;
                height: 0.5rem;
                background: transparent;
                border: 1px solid #d0d0d0;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                outline: none;
                cursor: pointer;
                padding: 0;
            }
            input[type=checkbox]:after{
                content: '✔';
                position: absolute;
                left: 0;
                top: 0;
                display: block;
                width: 100%;
                height: 0.5rem;
                background: #fb7777;
                color: #fff;
                line-height: 0.5rem;
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.45rem;
    /*
                content: '✔';
                position: absolute;
                left:0;
                top:0;
                display: block;
                width: 100%;
                height: 1rem;
                background: #fb7777;
                color: #fff;
                line-height: 1rem;
                /*增加动画*
                -webkit-transition: all ease-in-out 100ms;
                -moz-transition: all ease-in-out 100ms;
                transition: all ease-in-out 100ms;
                /*利用border-radius和opacity达到填充的假象，首先隐藏此元素*
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 0;
                font-size: 0.5rem;
                */
            }
            input[type=checkbox]:checked:after{
                -webkit-border-radius: 50%;
                -moz-border-radius: 50%;
                border-radius: 50%;
                opacity: 1;
            }
            label{
                padding-left: 0.2rem;
            }

        }

    }
    .btn{
        display: $flex;
        justify-content: $between;
        width: 30%;
        box-sizing: border-box;
        button{
            width: 100%;
            height: 1rem;
            border:none;
            color:#fff;
            font-size: 0.35rem;
             outline: none;
        }
        .add{
            background: linear-gradient(to right, #ffc449, #ff9a00);
        }
        .buy{
            background: #ff3a3a;
        }
    }
}

</style>
