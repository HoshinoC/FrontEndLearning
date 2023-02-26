// 导入express
let express = require('express')

// 创建路由对象
let router = express.Router()

// 挂载路由，就是写对应的METHOD处理
// 与BasicUse/CreateABasicServer中的函数一样
router.get('/user/list', (req, res) => {
    res.send('Get user list')
})

router.post('/user/add', (req, res) => {
    res.send('Add new user')
})

// 向外导出路由对象
module.exports = router