var fs = require('fs')

//文件操作中相对路径可以省略./
fs.readFile('data/a.txt',function (err,data) {
	if(err){
		return console.log('文件读取失败')
	}
	console.log(data.toString())
})
//在模块加载中，相对路径中./不能省略
//require('data/b.js')//报错

console.log(require('./data/b.js'))