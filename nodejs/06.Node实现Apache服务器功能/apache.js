var http = require('http')
var fs = require('fs')
var server = http.createServer()
server.on('request',function (req,res) {
   var url=req.url
   console.log(url)
   var wwwDir='F:/web前端/www'
   var filePath='/index.html'
   if(url!='/'){
   	 filePath=url
   	 fs.readFile(wwwDir+filePath,function (err,data) {
   	 	if(err){
   	 		return res.end('404 not found')
   	 	}
   	 	res.end(data)
   	 })
   }
})
server.listen(5000,function () {
	console.log('服务器启动......')
})