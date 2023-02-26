// 引入express
const express = require('express')

// 创建服务器
const app = express()

// 将clock目录托管向外提供成静态资源
app.use(express.static('./clock'))

// 当托管多个目录的情况下，express.static()会根据目录的添加顺序查找文件
// 如果在这个位置托管files目录，客户端访问index.html， files里面的index.html不会显示，而还是显示clock中的
app.use(express.static('./files'))

// 挂载时加上路径前缀
// app.use('/files', express.static('./files'))

// 启动web服务器
app.listen(80, () => {
    console.log('express server initiate completely')
})