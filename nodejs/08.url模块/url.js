var url = require('url')

var obj = url.parse('/pinglun?name=易烊千玺&message=加油你最棒',true)
console.log(obj)
console.log(obj.query.name)
console.log(obj.query.message)