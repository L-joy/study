/**
 * Created by whichone on 2019/7/4.
 */
var fs=require('fs')
fs.writeFile('C:/Users/whichone/WebstormProjects/nodejs/文件写入/file.txt',
	'大家好，我是nodejs',function(err){
		console.log('文件写入成功')
	}
)
