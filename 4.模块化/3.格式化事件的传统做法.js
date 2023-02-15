// 导入格式化时间的自定义模块
const TIME = require('./4.data')

// 调用格式化时间的函数
const dt = new Date()
const newDT = TIME.dateFormat(dt)
console.log(newDT)