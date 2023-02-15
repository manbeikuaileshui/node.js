// 1.导入fs模块
const fs = require('fs');
// 2.调用fs.readFile()方法读取文件
    // 参数1：读取文件的存放路径
    // 参数2：读取文件时候采用的编码格式，一般默认指定utf-8
    // 参数3：回调函数，拿到读取失败和成功的结果 err dataStr
fs.readFile('./files/0.txt', 'utf-8', function (err, dataStr) {
    // 打印失败的结果
    // 如果读取失败，则err的值为错误对象，dataStr的值为undefined
    // 如果读取成功err的值为null
    if (err) {
        return console.log('读取文件失败！' + err.message);
    }
    // 打印成功的结果
    console.log('读取文件成功' + dataStr);
    })