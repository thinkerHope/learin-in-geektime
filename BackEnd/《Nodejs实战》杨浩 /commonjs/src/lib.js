// exports作为对象导出，默认为{}，可以在上面附加属性
exports.hello = 'world';

exports.add = function (a, b) {
    return a + b;
}

exports.geekbang = { hello: 'world' };

// 可以理解为导出自定义的exports
module.exports = function minus(a, b) {
    return a - b;
}

setTimeout(() => {
    // 可以在导出该模块的地方改变exports
    console.log(exports);
}, 2000);
