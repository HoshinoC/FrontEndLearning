// 路由对象相关代码

// 导入express
const express = require('express')

// 创建路由对象
const router = express.Router()

// 处理GET请求
router.get('/get', (req, res) => {
    // 拿到查询字符串对象
    const query = req.query
    // 返回一个对象
    req.send({
        status: 0,              // 返回状态 0表示成功 1表示失败
        message: 'GET请求成功',   // 详细描述
        data: query             // 返回数据
    })
})

// 处理POST请求
router.post('/post', (req, res) => {
    // 获取url-encoded对象
    const body = req.body
    // 返回一个对象
    res.send({
        status: 0,              // 返回状态 0表示成功 1表示失败
        message: 'GET请求成功',   // 详细描述
        data: body             // 返回数据
    })
})

// 向外提供该路由对象
module.exports = router