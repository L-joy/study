var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function (req,res) {
	console.log('收到')
	fs.readFile('./01.html',function (err,data) {
		res.setHeader('Content-Type','text/html;charset=utf-8')
	    res.end(data)
	})
})
server.listen(3000,function () {
	console.log('服务器启动')
})