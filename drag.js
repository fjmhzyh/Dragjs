;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldDrag = window.Drag;
		var api = window.Drag = factory();
		api.noConflict = function () {
			window.Drag = OldDrag;
			return api;
		};
	}
}(function () {
	function Dragdrop(){
		// 用户配置项
		this.el = null,   // 要拖动的元素
		this.config = {
			outScreen: false,	// 是否可以拖出屏幕外
			autoCenter: false,	// 元素自动居中
			autoCenterWhenResize: false,//屏幕缩放时,元素自动居中
			dragStart:false,
			dragging:false,
			dragEnd:false,
		},

		// 必要参数
		this.args = {
			draggable: false,
			diffX: 0,
			diffY: 0,
			maxX:0,
			maxY:0
		}
	}
	Dragdrop.prototype ={
		handlers:{},
		on:function(type,handler){
			if(typeof this.handlers[type] == 'undefined'){
				this.handlers[type] = [];
			}
			this.handlers[type].push(handler)
		},
		fire:function(type,data){
			if(this.handlers[type] instanceof Array){
				var handlers = this.handlers[type];
				for(var i=0,len = handlers.length;i<len;i++){
					handlers[i](data);
				}
			}
		}
	}
	function handler(e,d,el,o){
		var e = e || window.event;
		var target = e.target || e.srcElement;
		switch(e.type){
			case 'mousedown':
				if(el.contains(target)){
					o.draggable = true;
					o.diffX =	e.clientX - el.offsetLeft;
					o.diffY =	e.clientY - el.offsetTop;
					d.fire('dragStart')
				}
				break;
			case 'mousemove':
				if(el && o.draggable && el.className.indexOf('the-draggable-box') > -1){
					var x = e.clientX - o.diffX;
					var y = e.clientY - o.diffY;
					if(o.outScreen == false){
						x =	Math.min( o.maxX , Math.max(0,x));
						y = Math.min( o.maxY , Math.max(0,y));
					}
					el.style.left = x + 'px';
					el.style.top = y + 'px';
					d.fire('dragging')
				} 
				break;
			case 'mouseup':
				d.fire('dragEnd') 
				o.draggable = false;
				break;
		}
	};
	function autoCenter(el,o){
		el.style.left = o.maxX / 2 + 'px';
		el.style.top = o.maxY / 2 + 'px';
	};
	// 有bug
	function autoCenterWhenResize(o){
		window.onresize = function(e,o){ autoCenter(e,o)}
	};
	function enable(el,options){
		var d = new Dragdrop();
		var o = null
		for(key in options){
			d.config[key] =options[key];
		}
		d.el = el;
		o = Object.assign(d.config,d.args);
		var style = el.currentStyle? el.currentStyle : window.getComputedStyle(el, null);
		if(style.position != 'absolute'){
			el.style.position = 'absolute';
		} 
		el.classList.add('the-draggable-box');

		if(o.dragStart){
			d.on('dragStart',o.dragStart)
		}
		if(o.dragging){
			d.on('dragging',o.dragging)
		}
		if(o.dragEnd){
			d.on('dragEnd',o.dragEnd)
		}

		o.maxX = document.documentElement.clientWidth - el.offsetWidth;
		o.maxY = document.documentElement.clientHeight - el.offsetHeight;
		if(o.autoCenter){
			autoCenter(el,o)
		}
		if(o.autoCenterWhenResize){
			autoCenterWhenResize(el,o)
		}
		document.addEventListener('mousedown',function(e){ handler(e,d,el,o) });
		document.addEventListener('mousemove',function(e){ handler(e,d,el,o) });
		document.addEventListener('mouseup',function(e){ handler(e,d,el,o) });
		console.log(d.args)
	};
	function disable(el){
		el.classList.remove('the-draggable-box');
	};
	return {
		enable:enable,
		disable:disable
	}
}));


