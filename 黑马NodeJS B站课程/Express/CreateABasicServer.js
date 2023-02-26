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


// 监听客户端对/的GET请求
app.get('/', (res, req) => {
    // 通过req.query可以获取到客户端发送过来的查询参数(URL中?以后部分)
    // 默认req.query是一个空对象
    res.send(req.query)
})

// 监听客户端对/user/:id的GET请求
/* :params表示这一部分是URL的动态部分
例子:现在客户端请求的地址是/user/1，那么该动态部分意思就是id = 1
 */
app.get('user/:id', (res, req) => {
    // 获取客户端请求的URL的动态部分
    res.send(res.params)
})