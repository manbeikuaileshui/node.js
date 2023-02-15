// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的IP地址
    user: 'root',  // 登录账号
    password: '123456789',  // 登录密码
    database: 'my_bd_01'  // 指定要操作的数据库
})

// 3.向users表中新增数据，其中username为fwkt吗，password为222
// 要插入到 users 中的数据对象
const user = {
    username: 'fwkt',
    password: '222'
}
// 待执行的 SQL 语句，其中英文的?表示占位符
const sqlStr = 'INSERT INTO users (username, password) VALUES (?, ?)'
// 使用数组的形式，依次为?占位符指定具体的值
db.query(sqlStr, [user.username, user.password], (err, results) => {
    // 失败
    if (err) {
        return console.log(err.message)
    }
    // 成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
    }
})

// 4.插入数据的便捷方式
const user1 = {
    username: 'zzx',
    password: '2343'
}
// 待执行SQL语句，其中英文的?表示占位符
const sqlStr1 = 'INSERT INTO users SET ?'
// 直接将数据对象当做占位符的值
db.query(sqlStr1, user1, (err, results) => {
    if (err) {
        return console.log(err.message)
    }
    if (results.affectedRows === 1) {
        console.log('插入数据成功！');
    }
})