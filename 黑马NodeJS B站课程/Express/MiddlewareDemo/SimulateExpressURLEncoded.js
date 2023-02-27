// 实现类似于express.urlencoded()解析功能的中间件
// 导入express
const express = require('express')
// 导入querystring
const qs = require('querystring')

// 创建服务器实例对象
const app = express()

// 定义一个中间件，并全局注册
app.use((req, res, next) => {
    // 定义一个变量str 接收从客户端发送过来的数据
    let str = ''
    // 监听req的data事件，当有客户端发送过来数据时会触发该事件
    /*
    由于客户端发送的数据量比较大，可能会将数据分割后发送到服务器
    这就可能造成了data事件每次被触发，获得的只是完整数据一部分，需要我们手动拼接成完整数据
     */
    req.on('data', (chunk) => {
        // chunk是获取到的数据的一部分，需要进行拼接
        str += chunk
    })

    //监听req的end事件，end事件被触发时说明客户端发过来的请求体接收完毕了
    req.on('end', () => {
        // 打印完整的请求数据str
        // str最后形式与查询字符串形式相同
        // console.log(str)
        // 把字符串格式的请求数据解析为对象格式，通过queryString模块
        const body = qs.parse(str)
        // 挂载到req的body属性上，来让下游中间件使用
        req.body = body
        // 别忘了next调用
        next()
    })
})

// 测试，挂载路由
app.post('/', (req, res) => {
    res.send(req.body)
})


// 启动服务器
app.listen(80, () => {
    console.log('server initiate')
})