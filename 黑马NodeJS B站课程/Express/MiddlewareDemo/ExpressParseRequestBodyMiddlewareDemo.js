// 导入express
const express = require('express')

// 创建服务器实例对象
const app = express()

// 设置express.json中间件，用来解析客户端发送过来的表单数据
app.use(express.json())

// 设置express.urlencoded中间件，用来解析客户端发送过来的表单数据
app.use(express.urlencoded({extended:false}))

// 挂载路由,测试json格式的提交
app.post('/', (req, res) => {
   // 可以通过req.body，可以接受客户端发送过来的请求体数据
   // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
   console.log(req.body)
   res.send('ok')
})

// 挂载路由,测试url-encoded格式的提交
app.post('/user', (req, res) => {
   console.log(req.body)
   res.send('ok')
})

// 启动服务器
app.listen(80, () => {
   console.log('server initiate')
})