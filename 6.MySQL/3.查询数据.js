// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的IP地址
    user: 'root',  // 登录账号
    password: '123456789',  // 登录密码
    database: 'my_bd_01'  // 指定要操作的数据库
})

// 3.查询 user 表中所有的用户数据
db.query('SELECT * FROM users', (err, results) => {
    // 查询失败
    if (err) {
        return console.log(err.message)
    }
    console.log(results);
})