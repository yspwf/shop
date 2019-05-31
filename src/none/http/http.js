import axios from 'axios';

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        return Promise.reject(error);
    }
);



export default {
    post:function(url, data={}){
        return new Promise((resolve, reject)=>{
            axios.post(url, data).then(response =>{
                resolve(response);
            }, err => {
                reject(err);
            });
        });
    },
    get:function(url, params={}){
        return new Promise((resolve, reject)=>{
            axios.get(url,{
                params:params
            }).then(response => {
                resolve(response);
            }, err => {
                reject(err);
            });
        });
    }
}