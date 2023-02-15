// 1.导入express模块
const express = require('express')

// 2.创建Web服务器
const app = express()

// 4.在这里，调用 express.static() 方法，快速的对外提供静态资源
app.use(express.static('./clock'))
app.use('/clock', express.static('./clock'))
app.use(express.static('./files'))
app.use('/files', express.static('./files'))

// 3.启动服务器
app.listen(80, () => {
    console.log('express sever running at http://127.0.0.1')
})