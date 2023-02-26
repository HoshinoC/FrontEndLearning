// 导入express
const express = require('express')

// 创建服务器实例对象
const app = express()

// 导入路由模块
const routerEx1 = require('./RouterEx1')

// 注册路由模块
app.use(routerEx1)

// 启动服务器，监听
app.listen(80, () => {
    console.log('server initiate')
})