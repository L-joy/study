var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use('/public/',express.static('./public/'))
//配置使art-template模板引擎
app.engine('html', require('express-art-template'))

//配置bodyparser中间件（专门用来解析表单post请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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


app.get('/',function (req,res) {

	res.render('index.html',{comments:comments})
})
app.get('/post',function (req,res) {
	res.render('post.html')
})
//当以POST请求、post时，执行指定的处理函数
app.post('/post',function (req,res){
	//console.log('收到请求')
	//1.获取表单post请求体数据
	//2.处理
	//3.发送响应
	var comment = req.body
	comment.datatime = '2019-7-6'
	comments.unshift(comment)
	res.redirect('/')
	
})
// app.get('/pinglun',function (req,res) {
// 	var comment = req.query
// 	comment.datatime = '2019-7-6'
// 	comments.unshift(comment)
// 	res.redirect('/')
// })
app.listen(3000,function () {
	console.log('running...')
})