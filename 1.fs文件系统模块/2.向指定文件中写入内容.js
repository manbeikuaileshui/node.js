// 1.导入fs文件系统模块
const fs = require('fs');
// 2.调用fs.weiteFile()方法，写入文件的内容
    // 参数1：表示文件的存放路径
    // 参数2：表示要写入的内容
    // 参数3：回调函数
fs.writeFile('./files/0.txt', '123', function (err) {
    // 如果文件写入成功，则err的值为null
    // 如果文件写入失败，则err的值为错误对象
    if (err) {
        return console.log('文件写入失败！' + 'err.message');
    }
    console.log('文件写入成功');
})