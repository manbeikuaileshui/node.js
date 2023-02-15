// 1.1导入http模块
const http = require('http')
// 1.2导入fs文件系统模块
const fs = require('fs')
// 1.3导入path路径处理模块
const path = require('path')

// 2.1创建web服务器
const server = http.createServer()
// 2.2监听web服务器的request事件
server.on('request', (req, res) => {

    // 3.1获取客户端请求的url地址
    // /clock/index.html
    // /clock/index.css
    // /clock/index.js
    const url = req.url
    // 3.2把请求的url地址映射为本地文件的存放路径
    // const fpath = path.join(__dirname, url)
    // 5.1预定义空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        // 5.2如果请求的路径是/，则手动指定文件的存放路径
        fpath = path.join(__dirname, '/clock/index.html')
    } else {
        // 5.3如果请求的路径不为/，则动态拼接文件的存放路径
            // /index.html
            // /index.css
            // /index.js
        fpath = path.join(__dirname, '/clock', url)
    }

    // 4.1根基映射过来的文件路径读取本地文件
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
        // 4.2读取失败，向客户端响应固定的错误消息
        if (err) {
            return res.end('<h1>404 Not fount.</h1>')
        }
        // 4.3读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})
// 2.3启动web服务器
server.listen(80, () => {
    console.log('server listen at http://127.0.0.1')
})
