/**
 * app.js入门模块
 * 
 */
var express = require('express')

var router = require('./router.js')
var bodyParser = require('body-parser')
var app = express()
app.engine('html',require('express-art-template'))
app.use('/node_modules/',express.static('./node_modules/'))
app.use('/public/',express.static('./public/'))

//配置模板引擎和body-parser一定要在app.use(router)挂载路由之前
//配置bodyparser中间件（专门用来解析表单post请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
//把路由容器挂载到app服务中 
app.use(router)

app.listen(3000,function () {
	// body...
	console.log('running...')
})
module.exports = app