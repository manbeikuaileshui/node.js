// 1.导入mysql模块
const mysql = require('mysql')
// 2.建立与MySQL数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1', // 数据库的 IP 地址
    user: 'root', // 登录数据库的账号
    password: '123456789', // 登录数据库的密码
    database: 'my_bd_01' // 指定要操作的哪个数据库
})
// 3.检测mysql模块能否正常工作
db.query('SELECT 1', (err, results) => {
    if (err) {
        return console.log(err.message)
    }
    // 4.只要能打印出 [ RowDataPacket { '1': 1 } ] 的结果，就证明数据库连接正常
    console.log(results)
})