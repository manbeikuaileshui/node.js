// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的IP地址
    user: 'root',  // 登录账号
    password: '123456789',  // 登录密码
    database: 'my_bd_01'  // 指定要操作的数据库
})

// 3.更新数据
// 要更新的数据对象
const user2 = {
    id: 2,
    username: 'aaa',
    password: '000'
}
// 要执行的语句
const sqlStr2 = 'UPDATE users SET username=?, password=? WHERE id=?'
// 调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr2, [user2.username, user2.password, user2.id], (err, results) => {
    if (err) {
        return console.log(err.message)
    }
    if (results.affectedRows === 1) {
        console.log('更新数据成功')
    }
})

// 4.更新数据的便携方式
// 要更新的数据对象
const user3 = {
    id: 3,
    username: 'df',
    password: '3445'
}
// 待执行的SQL语句
const sqlStr3 = 'UPDATE users SET ? WHERE id=?'
// 调用db.query()执行SQL语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr3, [user3, user3.id], (err, results) => {
    if (err) {
        return console.log(err.message)
    }
    if (results.affectedRows === 1) {
        console.log('更新数据成功')
    }
})