/*
	author	: 	chaoluo
	date 	:   2014.7.22
	判断指定容器上发生的滑动方向
*/
function Guesture(id){
	this.dom = document.getElementById(id);
	this.flag = false;
}
Guesture.prototype = {
	init : function(f){
		var x0,y0,x,y;
		if(this.dom){
			this.dom.addEventListener('touchstart',function(e){
				//手指处于按下状态
				this.flag = true;

				//保存按下时的初始坐标
				x0 = e.touches[0].pageX;
				y0 = e.touches[0].pageY;
			});
			this.dom.addEventListener('touchmove',function(e){
				if(this.flag){
					x = e.touches[0].pageX;
					y = e.touches[0].pageY;
				}
			});
			this.dom.addEventListener('touchend',function(e){
				this.flag = false;
				/*
					1、向左；
					2、向右；
					3、向下；
					4、向上；
				*/
				var _guesture = 0;
				if(x-x0 > 20){
					_guesture = 2;
				}
				if(x0 -x > 20){
					_guesture = 1;
				}
				if(y - y0 > 20){
					_guesture = 3;
				}
				if(y0 -y > 20){
					_guesture = 4;
				}
				if(_guesture === 0){
					return;
				}else{
					f(_guesture);
					_guesture = 0;
					return;
				}
			});
		}
	}
};
