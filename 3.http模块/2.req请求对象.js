// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.为服务器实例绑定request事件，监听客户端的请求
    // req是请求对象，包含了与客户端相关的数据和属性
server.on('request', req => {
    // req.url是客户端请求的URL地址
    const url = req.url
    // req.method是客户端请求的method类型
    const method = req.method
    const str = `Your request url is ${url}, and request method is ${method}`
    console.log(str)
})
// 4.启动服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080')
})