import axios from 'axios';

const service = axios.create({
    baseURL: '/api',
    timeout: 20000,
    crossDomain: true
});


service.interceptors.request.use(config => {
    return config
}, function (error) {
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    if(response.status === 200){
        return  response.data;
    }
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;
