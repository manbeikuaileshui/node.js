// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.为服务器实例绑定request事件，监听客户端的请求
    // req是请求对象，包含了与客户端相关的数据和属性
    // res是响应对象，包含了与服务器相关的数据和属性
server.on('request', (req, res) => {
    // req.ul是客户端请求的URL地址
    const url = req.url
    // req.method是客户端请求的method类型
    const method = req.method
    const str = `您请求的 url 地址是： ${url}, 请求的 method 类型是： ${method}`
    // 为了防止中文显示乱码的问题，需要设置响应头 Content - Type 的值为text/html; charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    console.log(str);
    // 调用res.end()方法，向客户端响应一些内容
    res.end(str)
})
// 4.启动服务器
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})