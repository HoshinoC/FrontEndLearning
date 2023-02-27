// 导入express
const express = require('express')

// 创建服务器实例对象
const app = express()

// 挂载路由
app.get('/', (req, res) => {
    // 人为地制造一个错误
    // 如果没有错误级别路由，服务器会直接崩溃
    throw new Error('inner error')
    res.send('User get request')
})

// 错误级别中间件处理函数
// 四个参数
const mw = function(err, req, res, next){
    console.log(err.message)
    next()
}

// 注意，一定要定义在所有路由之后，特殊
// 可以捕获错误，上述错误出现时就不会崩溃
app.use(mw)

// 启动服务器
app.listen(80, () => {
    console.log('server initiate')
})
