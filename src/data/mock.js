const Mock = require('mockjs');
Mock.mock('/home/banner', 'get', require('./data'));
Mock.mock('/user/userInfo', 'post', require('./userinfo'));
Mock.mock('/goods/recommend', 'post', require('./recommend'));