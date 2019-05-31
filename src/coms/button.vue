<template>
    <button class="btn" :class="[computedType]">{{text}}</button>
</template>

<script>
export default {
    data(){
        return {
            
        }
    },
    props:{
        text:{
            type: String,
            default: '提交'
        },
        btnType:{
            type: String,
            default: ''
        }
    },
    computed: {
        computedType(){
            return this.btnType ? `btn-${this.btnType}` : '';
        }
    },
}
</script>

<style lang="scss" scoped>
.btn{
    border:none;
    outline: none;
    padding: 0.25rem 0.575rem;
    font-size: 0.35rem;
    border-radius: 0.2rem;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-primary{
     color: #fff;
    background-color: #007bff;
     border-color: #007bff;
}
.btn-success{
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
}
.btn-info {
  color: #fff;
  background-color: #17a2b8;
  border-color: #17a2b8;
}
.btn-warning {
  color: #111;
  background-color: #ffc107;
  border-color: #ffc107;
}
.btn-danger {
  color: #fff;
  background-color: #dc3545;
  border-color: #dc3545;
}
.btn-light {
  color: #111;
  background-color: #f8f9fa;
  border-color: #f8f9fa;
}
.btn-dark {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
}
</style>
