<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"/>
	<title>Document</title>
</head>
<body>
   <script>
      var oReq = new XMLHttpRequest();
      //当请求加载成功之后要调用指定的函数
      oReq.onload = function () {
      	console.log(oReq.responseText)
      }
      oReq.open("get", "data.json",true);
      oReq.send();
   </script>
</body>
</html>