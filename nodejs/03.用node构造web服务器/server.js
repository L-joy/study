//1.加载http核心模块
var http = require('http')
//2.创建一个web服务器
var server = http.createServer()
//3.提供数据服务
server.on('request',function (req,res) {
	var url=req.url
	console.log(url)
	console.log('收到请求')
	res.write('hello')
	res.write(' nodejs')
	res.end()
})
//4.绑定端口号，启动服务器
server.listen(3000,function () {
	console.log('服务器启动了，可以通过127.0.0.1:3000进行访问')
})
