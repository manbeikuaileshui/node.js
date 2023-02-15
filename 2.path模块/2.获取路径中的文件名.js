const path = require('path');

// 定义文件的存放路径
const fpath = '/a/b/c/index.html';
// 获取路径中文件的文件名
console.log(path.basename(fpath));
console.log(path.basename(fpath, '.html'));