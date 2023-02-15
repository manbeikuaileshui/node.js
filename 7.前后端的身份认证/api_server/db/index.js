// 引入模块
const mysql = require('mysql')

// 连接数据库
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'my_bd_01'
})

// 暴露出去
module.exports = db