// 导入express
const express = require('express')
// 导入ApiRouter中的router对象
const apiRouter = require('./ApiRouter')
// 导入cors解决跨域
const cors = require('cors')

// 创建服务器实例对象
const app = express()

// 解析url-encoded中间件
app.use(express.urlencoded({extended: false}))

// 配置JSONP跨域访问请求处理，注意要在cors前面配置
app.get('/api/jsonp', (req, res) => {
    // 获取到客户端定义的回调函数名称（在查询字符串中）
    const callback = req.query.callback
    // 定义要发送到客户端的数据对象
    const data = {
        name: 'zs',
        age: 22
    }
    // 拼接出一个函数调用
    const scriptStr = `${callback}(${JSON.stringify(data)})`
    // 把该拼接的字符串，响应给客户端
    // 返回的是一个函数调用的字符串callback(data)
    /* 虽然是一个字符串，但由于这次请求发生在script标签的src属性当中
    返回的字符串会被当作script标签中的内容看待，如下面所示
    <script>
        callback(data)
    </script>
    因此会执行客户端当中同名的callback函数，从而实现了数据从服务器端到客户端的传输
     */
    res.send(scriptStr)
})

// 在路由之前，配置cors跨域访问
app.use(cors())

// 全局注册路由对象，并且加上一个路径
// 访问示例：localhost:80/api/...(对应路由URL)
app.use('/api', apiRouter)

// 启动服务器
app.listen(80, () => {
    console.log('Server Initiate')
})