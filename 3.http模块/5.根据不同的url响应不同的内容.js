// 1.导入http模块
const http = require('http')
// 2.创建web服务器实例
const server = http.createServer()
// 3.为服务器实例绑定request事件，监听客户端的请求
    // req是请求对象，包含了与客户端相关的数据和信息
    // res是响应对象，包含了与服务器相关的数据和信息
server.on('request', (req, res) => {
    // 获取客户请求的url地址
    const url = req.url
    // 设置默认的内容为 404 Not found!
    let content = '<h1>404 Not found!</h1>'
    // 判断用户的请求地址
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    // 设置Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 把内容响应给客户端
    res.end(content)
})
// 4.启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})