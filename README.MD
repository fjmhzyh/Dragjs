a light js library that makes your elements draggable
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
	  .dragBox{
	  	width:200px;
	  	height:200px;
	  	border:1px solid #c9c9c9;
	  	box-shadow:2px 2px 10px #ccc;
	  }
  </style>
</head>
 <body>
	 <div id="box1" class='dragBox'></div>
	 <div id="box2" class='dragBox'></div>
	 <div id="box3" class='dragBox'></div>
   <script>
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	Drag.enable(box1)  
	Drag.enable(box2) 
	Drag.enable(box3)   
	// box is draggable now!
   </script>
 </body>
</html>
```

## Docs
```bash
Drag.enable(element,options）	// enable 
Drag.disable(element）	// disable
options ={
	handle:dom,				   // 拖动的把手,接受一个DOM元素
	outScreen: false,	       // 是否可以拖出屏幕外
	autoCenter: false,	       // 元素自动居中
	autoCenterWhenResize: false,   // 屏幕缩放时,元素自动居中
	dragStart:function(){},	       // 拖动开始事件
	dragging:function(){},         // 正在拖动事件
	dragEnd:function(){},          // 拖动结束事件
}
```
