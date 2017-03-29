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
  #box{position:absolute;width:300px;height:300px;border:1px solid #c9c9c9;box-shadow:2px 2px 10px #ccc;}
  </style>
</head>
 <body>
	 <div id="box" class='dragBox'></div>
   <script>
	var box = document.getElementById('box');
	Drag.enable(box)  // box is draggable now!
   </script>
 </body>
</html>
```

## Docs
```bash
Drag.enable(element,options）	// enable 
Drag.disable(element）	// disable
options ={
	outScreen: false,	       // 是否可以拖出屏幕外
	autoCenter: false,	       // 元素自动居中
	autoCenterWhenResize: false,   // 屏幕缩放时,元素自动居中
	dragStart:function(){},	       // 拖动开始事件
	dragging:function(){},         // 正在拖动事件
	dragEnd:function(){},          // 拖动结束事件
}
```
