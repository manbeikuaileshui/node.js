// 在一个自定义模块中，默认情况下，module.exports = {}

// 向 module.exports 对象上挂载 username 属性
module.exports.username = 'zs'
// 向 module.exports 对象上挂载 sayHello 方法
module.exports.sayHello = function () {
    console.log('Hello!')
}

const age = 20
// module.exports.age = age

exports = {
    nickname: '小黑',
    sayHi() {
        console.log('Hi!');
    }
}

// export对象
// exports.username = 'zs'
// exports.sayHi = function () {
//     console.log('Hi!');
// }