// 导入mysql模块
const mysql = require('mysql')

// 建立与mysql数据库的连接
const db = mysql.createConnection({
    host: '127.0.0.1',   // 数据库的IP地址
    user: 'root',    // 登录数据库的账号
    password: 'admin',  // 登录数据库的密码
    database: 'my_db_01'   // 指定操作哪个数据库
})

// 测试mysql是否正常工作
// db.query('select 1', (err, result) => {
//     // 如果出错，输出错误信息
//     if(err){
//         return console.log(err.message)
//     }
//     console.log(result)
// })

// 查询users表中的所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, result) => {
//     if(err){
//         return console.log(err.message)
//     }
//     // select执行的结果是一个数组
//     console.log(result)
// })

/*
// 向users表中插入一条数据
// 定义要插入的对象
const user  = {
    username: 'Spider-man',
    password: 'pcc321'
}
// 写SQL语句，？表示占位符
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
// 通过db.query执行SQL
db.query(sqlStr, [user.username, user.password], (err, result) => {
    if(err){
        return console.log(err.message)
    }
    if(result.rowsAffected === 1){
        console.log('Insert success')
    }
})
 */

// 快速向users表中插入数据
// 向表中添加数据时，如果数据对象的每个属性和数据表的字段一一对应，可以快速插入
const user  = {
    username: 'Spider-man',
    password: 'pcc321'
}
// 快速插入
const sqlStr = 'INSERT INTO users SET ?'
db.query(sqlStr, user, (err, result) => {
    if(err){
        return console.log(err.message)
    }
    if(result.rowsAffected === 1){
        console.log('Insert success')
    }
})
