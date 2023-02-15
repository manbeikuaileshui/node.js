// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',  // 数据库的IP地址
    user: 'root',  // 登录账号
    password: '123456789',  // 登录密码
    database: 'my_bd_01'  // 指定要操作的数据库
})

// 3.删除数据
// 要执行的SQL语句
const sqlStr4 = 'DELETE FROM users WHERE id=?'
// 调用db.query()执行SQL语句的同时，为占位符指定具体的值
// 注意：如果SQL语句中含有多个占位符，则必须使用数组为每个占位符指定具体的值
// 如果SQL语句中只有个一个占位符，则可以省略数组
db.query(sqlStr4, 15, (err, results) => {
    if (err) {
        console.log(err.message)
    }
    if (results.affectedRows === 1) {
        console.log('删除数据成功')
    }
})

// 4.标记删除，使用 UPDATE 语句替代 DELETE 语句，只更新数据的状态，并没有真正删除
// 要执行的SQL语句
const sqlStr = 'UPDATE users SET status=1 WHERE id=?'
db.query(sqlStr, 25, (err, results) => {
    if (err) {
        console.log(err.message)
    }
    if (results.affectedRows === 1) {
        console.log('删除数据成功')
    }
})
