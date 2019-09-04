//node中没有全局变量，只有模块变量
/**
 * require方法有两个作用：
 * 1.加载文件模型并执行里面的代码
 * 2.拿到被加载文件模块导出的接口对象：exports
 *
 * 每个文件模块都提供一个对象：exports；
 * exports默认是一个空对象，把所需被外部访问的成员变量挂载在对象exports中即可
 */
var foo='aaa'
var bExports = require('./b.js')
console.log(foo)
console.log(bExports.foo)
console.log(bExports.add(10,20))

