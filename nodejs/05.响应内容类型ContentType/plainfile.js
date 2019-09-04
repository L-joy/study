//http://tool.oschina.net/commons/——http content-type对照表

var http = require('http')
var server = http.createServer()
server.on('request',function (req,res) {
	//服务器发送的数据默认是utf-8的
	//但浏览器解析时按照自己的默认编码解析
	//例如中文操作系统默认编码格式是GBK
	res.setHeader('Content-Type','text/plain;charset=utf-8')
	res.end('hello 世界')
})
server.listen(3000,function () {
	console.log('服务器启动')
})