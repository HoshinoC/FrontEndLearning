// 导入express
const express = require('express')

// 创建服务器实例对象
const app = express()

// 创建一个中间件mv，本质上是一个函数
// 三个参数req, res, next
const mv = (req, res, next) => {
    // 中间件函数中一定要调用next()传递给下一个中间价
    console.log('This is middleware mv')
    /*
    中间件的作用是：中间件和路由之间的req和res是共享的。
    因此可以在上游中间件中为req和res添加一些属性，在下游就可以直接访问
    案例是添加 当前请求的时间 这个属性
     */
    req.startTime = Date.now()
    next()
}

// 通过app.use()设置全局生效的中间件
// 全局生效意味着服务器每次处理请求都会经过该中间件
app.use(mv)

// 定义多个全局中间件,会按照定义顺序进行调用
app.use((req, res, next) => {
    console.log('This is another middleware')
    next()
})

// 再次定义一个中间件函数，该函数用来测试局部生效的中间件
const partialmw1 = (req, res, next) => {
    console.log('partially effect middleware 1')
    next()
}

// 启动服务器
app.listen(80, () => {
    console.log('server initiate')
})

// 测试，挂载两个路由
// 这两个路由处理之前都会经过mv中间件
app.get('/', (req, res) => {
    console.log('This is a Get request')
    console.log(req.startTime)
})

app.post('/', (req, res) => {
    console.log('This is a post request')
    console.log(req.startTime)
})

// 测试，挂载一个路由
// partialmw1只在该路由生效
// 但在partialmw1之前，两个全局路由还是会生效，需要注意
// 多个局部生效的中间件就再添加参数（函数名）即可
app.get('/user', partialmw1, (req, res) => {
    console.log('This is a Get user request')
})