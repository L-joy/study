var http = require('http')
var fs = require('fs')
var url = require('url')
var server = http.createServer()
server.on('request',function (request,response) {
   var parseObj = url.parse(request.url,true)
   var parseName = parseObj.path
   if(parseName === '/'){
   	fs.readFile('./index.html',function (err,data) {
   		if(err){
   			return response.end('404 not found')
   		}
   		response.end(data)
   	})
   }else if(parseName === '/a'){
   	 console.log(parseObj.query)
   	 response.end()
   }
})
server.listen(5000,function () {
	console.log('running...')
})