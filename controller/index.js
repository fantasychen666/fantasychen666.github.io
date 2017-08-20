//图片的动态加载时通过读取li元素，然后获得li元素的data-src
//属性的值，赋予动态创建的图片的src，从而实现拖到创建。
function setImg(index){
	var oDiv = document.getElementById("pic");
	var oUl = oDiv.children[0];
	var aLi = oUl.children;
	if(aLi[index].dataset){
		var src = aLi[index].dataset.src;
	}
	else{
		var src = aLi[index].getAttribute("data-src");

	}
	var oImg = document.createElement("img");
	oImg.src = src;
	if(aLi[index].children.length==0){
		aLi[index].appendChild(oImg);
		aLi[index].setAttribute("style","background:none");
	}
}
console.log("999");

//获得对象距离页面顶端的距离
function getH(obj){
	var h = 0;
	while(obj){
		h += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return h;
}

//当页面的滚动条滚动时要时时判断当前li的位置
window.onscroll = function(){
	var oDiv = document.getElementById("pic");
	var oUl = oDiv.children[0];
	var aLi = oUl.children;
	for(var i = 0,len = aLi.length;i<len;i++){
		var oLi = aLi[i];
		//检查oLi是否在可视区域
		var t = document.documentElement.clientHeight+(document.documentElement.scrollTop||document.body.scrollTop);
		var h = getH(oLi);
		if(h<t){
			setTimeout("setImg("+i+")",800);
		}
	}
};
//当页面加载完成以后要主动运行一下
window.onload = function(){
	window.onscroll();
}


