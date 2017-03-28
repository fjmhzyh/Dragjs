a light js library that makes your element draggable and other useful functions are also included. 
------
## Installation
```bash
$ npm install element-drag --save
```

## How To Use
```bash
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
  <script src='drag.js'></script>
  <style>
  #box{position:absolute;width:300px;height:300px;border:1px solid #c9c9c9;border-radius:5px;box-shadow:2px 2px 10px #ccc;}
  </style>
</head>
 <body>
	 <div id="box" class='dragBox'></div>
   <script>
      // 启用拖动功能
      var box = document.getElementById('box');
   		Drag.enable(box,{
			outScreen:false,	
			autoCenter:true,
			autoCenterWhenResize:true,
			dragStart:function () {
				console.log('开始拖动')
			},
			dragging:function(){
				console.log('正在拖动')
			},
			dragEnd:function(){
				console.log('拖动结束')
			}
		})
   </script>
 </body>
</html>
```
