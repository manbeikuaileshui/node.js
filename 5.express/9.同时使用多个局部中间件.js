const express = require('express')
const app = express()

// 1.定义中间件函数
const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件1')
    next()
}
const mw2 = (req, res, next) => {
    console.log('调用了局部生效的中间件2')
    next()
}
// 2.创建路由
app.get('/', mw1, mw2, (req, res) => {
    res.send('Homme page.')
})
app.get('/user', [mw1, mw2], (req, res) => {
    res.send('Homme page.')
})

app.listen(80, () => {
    console.log('http://127.0.0.1')
})