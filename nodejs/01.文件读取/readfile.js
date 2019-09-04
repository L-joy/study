/**
 * Created by whichone on 2019/7/4.
 */
var fs = require('fs')
fs.readFile('./file.txt',function(err,data){
	console.log(data.toString())
})

