// 1.1导入fs模块
const fs = require('fs');

// 1.2导入path模块
const path = require('path');

// 1.3定义正则表达式，分别匹配style和script标签
// \s：匹配空白字符 \S：匹配非空白字符 *：匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /<script>[\s\S]*<\/script>/;

// 2调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', (err, dataStr) => {
    // 2.1读取HTML文件失败
    if (err) {
        return console.log('读取HTML文件失败！' + err.message);
    }
    // 2.2读取HTML文件成功后，调用对应的方法，分别拆解出css、js、html文件。
    resolveCSS(dataStr);
    resolveJS(dataStr);
    resolveHTML(dataStr);
})

// 3定义处理CSS样式的方法
function resolveCSS(htmlStr) {
    // 3.1通过正则，提取对应的stle标签的内容
    const r1 = regStyle.exec(htmlStr);
    // 3.2将提取出来的css样式字符串，去掉style标签
    const newCSS = r1[0].replace('<style>', '').replace('</style>', '');
    // 3.3将处理的结果，写入到clock目录中的index.css文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCSS, err => {
        if (err) {
            return console.log('写入CSS样式失败！' + err.message);
        }
        console.log('写入CSS样式成功！');
    })
}
// 4定义处理JS脚本的方法
function resolveJS(htmlStr) {
    // 4.1通过正则，提取对应的script标签的内容
    const r1 = regScript.exec(htmlStr);
    // 4.2将提取出来的内容，去掉script标签
    const newJS = r1[0].replace('<script>', '').replace('</script>', '');
    // 4.3将处理的结果，写入到clock目录中的index.js文件里面
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJS, err => {
        if (err) {
            return console.log('写入JS文件失败！' + err.message);
        }
        console.log('写入JS文件成功！');
    })
}
// // 5定义处理HTML样式的方法
function resolveHTML(htmlStr) {
    // 5.1使用字符串的replace方法，把内嵌的style和script标签替换为link和script标签
    const newHTML = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>');
    // 5.2将替换完成之后的html代码，写入到index.html文件中
    fs.writeFile(path.join(__dirname, '/clock/index.html'), newHTML, err => {
        if (err) {
            return console.log('写入html文件失败！' + err.message);
        }
        console.log('写入html文件成功！');
    })
}
