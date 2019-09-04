/**
 * students.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
var fs = require('fs')
var dbPath = './db.json'
/**
 * 获取学生列表
 * return []
 */
exports.find = function (callback){
	fs.readFile(dbPath,'utf8', function (err,data) {
		if(err){
			return callback(err)
		}
		callback(null,JSON.parse(data).students)

	})
}
//根据id查找单个学生
exports.findById = function (id,callback){
	fs.readFile(dbPath,'utf8', function (err,data) {
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		var ret = students.find(function (item){
			return item.id == parseInt(id)
		})
		callback(null,ret)

	})
}
/**
 * 添加保存学生
 */
exports.save = function (student,callback){
	fs.readFile(dbPath,'utf8', function (err,data) {
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		//处理id，在最后一个id上加一
		student.id = students[students.length-1].id+1
		//把用户传递的对象保存在数组中
		students.push(student)
		//把对象数据转为字符串
		var fileData = JSON.stringify({students:students})
		//把把字符串保存在文件中
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err)
			}
			//没有错误err为null
			callback(null)
		})

	})

}
/**
 * 更新学生
 */
exports.update = function (student,callback){
	fs.readFile(dbPath,'utf8', function (err,data) {
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		//把id统一为数字类型
		student.id = parseInt(student.id)
		//要修改谁就把谁找出来
		//当某个遍历项符合返回item.id==student.id时终止遍历，返回遍历项
		var stu = students.find(function (item){
			return item.id == student.id
		})
		for(var key in student){
			stu[key] = student[key]
		}

		//把对象数据转为字符串
		var fileData = JSON.stringify({students:students})
		//把把字符串保存在文件中
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err)
			}
			//没有错误err为null
			callback(null)
		})

	})
}
/**
 * 删除学生
 */
exports.delete = function (id,callback){
	fs.readFile(dbPath,'utf8',function(err,data){
		if(err){
			return callback(err)
		}
		var students = JSON.parse(data).students
		

		//findIndex方法专门用来根据条件查找元素下标
		var deleteId = students.findIndex(function (item){
			return item.id == parseInt(id)
		})
		//从数组中删除元素
		students.splice(deleteId,1)
		//把对象数据转为字符串
		var fileData = JSON.stringify({students:students})
		//把把字符串保存在文件中
		fs.writeFile(dbPath,fileData,function(err){
			if(err){
				return callback(err)
			}
			//没有错误err为null
			callback(null)
		})
	})


}