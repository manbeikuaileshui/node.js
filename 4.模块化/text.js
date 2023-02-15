const zjdb = require('./zijidebao/index')
// 格式化时间的功能
const dtStr = zjdb.dateFormat(new Date())
console.log(dtStr);

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp</span></h1>'
const str = zjdb.htmlEscape(htmlStr)
console.log(str);

const str2 = zjdb.htmlUnEscape(str)
console.log(str2);
