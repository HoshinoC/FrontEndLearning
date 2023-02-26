// 导入express
const express = require('express')

// 创建web服务器实例app
const app = express()

// listen方法启动web服务器
/*
参数1：端口
参数2：回调函数
*/
app.listen(80, () => {
    console.log('express server initiate completely')
})

// 监听客户端的get请求
/*
参数1：客户端请求的URL地址
参数2：请求对应的回调函数
    req: 请求对象客户端包括的相关信息
    res: 响应对象服务端包括的相关信息
 */
app.get('/user', (req, res) => {
    // 通过服务器端res的send方法响应请求
    // 返回的是一个json对象
    res.send({name: 'zs', age: 20, gender: '男'})
})

// 监听客户端的post请求
// 默认没有post方法，需要安装body-parser这个包
// 参数与上面相同
app.post('/user', (req, res) => {
    res.send('Connect successfully')
})