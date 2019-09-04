var fs = require('fs')
//express提供了一种更好的方式——专门用来包装路由
var express = require('express')
var Student = require('./students.js')
/**
 * router.js路由模块
 */
//1.创建一个路由容器
var router = express.Router()
//2.把路由都挂载到router路由容器中
router.get('/students',function (req,res) {
	//第二个参数为可选参数
	// fs.readFile('./db.json','utf8',function(err,data){
	// 	if(err){
	// 		return res.status(500).sender('Server error')
	// 	}
	// 	res.render('index.html',{
	// 	fruits:['苹果','香蕉','西瓜','荔枝'],
	// 	// JSON.parse()方法把json字符串转为js对象
	// 	students:JSON.parse(data).students
	// })
	Student.find(function(err,students){
       if(err){
			return res.status(500).sender('Server error')
		}
		res.render('index.html',{
		fruits:['苹果','香蕉','西瓜','荔枝'],
		// JSON.parse()方法把json字符串转为js对象
		students:students
	    })
	})
	 
})
//渲染添加学生页面
router.get('/students/new',function(req,res){
	res.render('new.html')

})
router.post('/students/new',function(req,res){
	//1.获取post表单数据
	//2.处理-将数据保存在db.json文件中
	//3.发送响应
	Student.save(req.body,function(err){
		if(err){
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
	
})
//渲染编辑学生页面
router.get('/students/edit',function(req,res){
	//1.在客户端的列表页中处理链接问题（需要有id参数）
	//2.获取要编辑的学生id
	//3.渲染编辑页面
	//  根据id把学生信息查出来
	//  使用模板引擎渲染页面
	
	Student.findById(parseInt(req.query.id),function(err,student){
		if(err){
			return res.status(500).send('Server error')
		}
		res.render('edit.html',{student:student})

	})
})
//处理编辑学生
router.post('/students/edit',function(req,res){
	//1.获取表单数据req.body
	//2.更新updata
	//3.发送响应
	Student.update(req.body,function(err){
		if(err){
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
	
	
})
//处理删除学生
router.get('/students/delete',function(req,res){
	//1.获取要删除的id
	//2.根据id执行删除操作
	//3.根据操作结果发送响应数据
	Student.delete(req.query.id,function(err){
		if(err){
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
})

//3.把router导出
module.exports=router
//这样不方便
// module.exports = function(app){
//    app.get('/',function (req,res) {
// 	//第二个参数为可选参数
// 	fs.readFile('./db.json','utf8',function(err,data){
// 		if(err){
// 			return res.status(500).sender('Server error')
// 		}
// 		res.render('index.html',{
// 		fruits:['苹果','香蕉','西瓜','荔枝'],
// 		// JSON.parse()方法把json字符串转为js对象
// 		students:JSON.parse(data).students
// 	})

// 	})
// 	// body...
// 	//res.send('Hello World')
	
//    })
//    app.get('/students/new',function(req,res){

//    })
//    app.get('/students/new',function(req,res){
	
//    })
//    app.get('/students/new',function(req,res){
	
//    })
//    app.get('/students/new',function(req,res){
	
//    })
//    app.get('/students/new',function(req,res){
	
//    })
//    app.get('/students/new',function(req,res){
	
//    })
//    app.get('/students/new',function(req,res){
	
//    })
// }
