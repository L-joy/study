//app application 应用程序
//把当前模块所有的依赖项都声明在文件模块最上面

var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')
var comments = [
   {
   	 name:'千玺',
   	 age:18,
   	 message:'加油',
   	 datatime:'2019-7-4'
   },
   {
   	 name:'千玺',
   	 age:18,
   	 message:'加油',
   	 datatime:'2019-7-4'
   },
   {
   	 name:'千玺',
   	 age:18,
   	 message:'加油',
   	 datatime:'2019-7-4'
   },
   {
   	 name:'千玺',
   	 age:18,
   	 message:'加油',
   	 datatime:'2019-7-4'
   },
   {
   	 name:'千玺',
   	 age:18,
   	 message:'加油',
   	 datatime:'2019-7-4'
   }
   ]
http
  .createServer(function (req,res) {
  	//使用url.parse方法将路径解析为一个方便操作的对象，第二个参数为true时表示直接将
    //查询字符串转为对象（通过query属性访问）
     var  parseObj = url.parse(req.url,true)
     //单独获取不包括查询字符串路径部分
     var pathname = parseObj.pathname
  	 if (pathname === '/') {
  	 	fs.readFile('./views/index.html',function (err,data) {
  	 		if(err){
  	 			return res.end('404 not found')
  	 		}
  	 		var htmlStr = template.render(data.toString(),
  	 			{comments: comments})
  	 		res.end(htmlStr)
  	 	})

  	 }else if(pathname === '/post'){
  	 	fs.readFile('./views/post.html',function (err,data) {
  	 		if(err){
  	 			return res.end('404 not found')
  	 		}
  	 		res.end(data)
  	 	  })

  	 }else if(pathname.indexOf('/public/')===0){
  	 	fs.readFile('.'+pathname,function (err,data) {
  	 		if(err){
  	 			return res.end('404 not found')
  	 		}
  	 		res.end(data)
  	 	})
  	 }else if(pathname === '/pinglun') {
  	 	//console.log(parseObj.query)
  	 	//获取表单提交的数据parseObj.query
  	 	var comment = parseObj.query
  	 	comment.datatime = '2019-7-5'
  	 	comments.push(comment)
  	 	/**
  	 	 * 服务器这时已把数据存储好，接下来就是让用户重新请求'/'
  	 	 * 
  	 	 */
  	 	res.statusCode = 302
  	 	res.setHeader('Location','/')
  	 	res.end()

  	 }else{
  	 	fs.readFile('./views/404.html',function (err,data) {
  	 		if(err){
  	 			return res.end('404 not found')
  	 		}
  	 		res.end(data)
  	 	})
  	 }
  })
  .listen(3000,function () {
  	console.log('running')
  })