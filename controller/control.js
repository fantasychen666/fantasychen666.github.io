/*
* @Author: Administrator
* @Date:   2017-07-15 14:32:36
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-01 19:49:57
*/

'use strict';



(function() {
	if (typeof window.screenX === "number") {
		
		// CSS transform变换应用
		// 定义一个函数，
		var transform = function(element, value, key) {
			key = key || "transform";
			["-moz-", "-O-", "-ms-", "-webkit-", ""].forEach(function(prefix) {
				element.style[prefix + key] = value;	
			});	
			return element;
		};

		// 浏览器选择器API
		var $ = function(selector) {
			return document.querySelector(selector);
		};
		var $$ = function(selector) {
			return document.querySelectorAll(selector);
		};
		

		// 显示图片
		var Pic = '', arrayPic = [1,2,3,4,5,6,7,8,9], 
		rotate = 360 / arrayPic.length;//计算每个图片rotateY的角度
		arrayPic.forEach(function(i) {
			Pic = Pic + '<img id="pic'+ i +'" src="../img/'+ i +'.jpg" class="pic" />';	
		});
			
		// 元素
		var stage = $("#stage"),Container = $("#container"), indexPic = 0;
		// 元素
		var Pics = $$(".pic"), transZ = 150 / Math.tan((rotate / 2 / 180) * Math.PI);
		var leftBtn = $("#btn-left");
		var rightBtn = $("#btn-right");
		
	
		Container.innerHTML = Pic;//将图片放入Container

		Container.addEventListener("click", function() {
			transform(this, "rotateY("+ (1 * rotate * ++indexPic) +"deg)");	
		});
		
		rightBtn.addEventListener("click",function(){
			transform(Container, "rotateY("+ (1 * rotate * ++indexPic) +"deg)");	
		});

		leftBtn.addEventListener("click",function(){
			transform(Container, "rotateY("+(1 * rotate * --indexPic)+"deg)");	
		}); 
		
		arrayPic.forEach(function(i, j) {
			//设置图片rotateY的角度和Z方向位移的距离
			transform($("#pic" + i), "rotateY("+ j * rotate +"deg) translateZ("+ (transZ + 60) +"px)");	
		});	
	};
		
})();
