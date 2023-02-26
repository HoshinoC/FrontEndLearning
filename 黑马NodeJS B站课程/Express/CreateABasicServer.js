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