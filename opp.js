//方向枚举
var DirectionEnum = {
  RIGHT: 1,
  LEFT: 2,
  UP: 3,
  DOWN: 4,
};

//蛇身节点
var snakeNote = function(obj){

	this.x = obj.x;
	this.y = obj.y;
	this.element = obj.element;
}

snakeNote.prototype = {

	x : null,
	y : null,
	element : null,
	color : null,
}

//对象信息
var opp = function (obj) {

	this.firstOpp();
	this.change(function(){

	
	});
	this.initSnake();
}

opp.prototype = {

	//方向
	direction : null,
	//第一个方法
	firstOpp: function (){

		
	},
	//改变
	change :function (fn){

		fn();
	},
	//地图
	backDiv : document.getElementById('gameBackDiv'),
	//记录蛇节点
	snakeNotes : new Array(),
	//记录食物
	foodNote : null,
	//初始化蛇身
	initSnake : function(){
		//清空全部数据
		this.snakeNotes.splice(0,this.snakeNotes.length)
		var backDiv = document.getElementById('gameBackDiv');
		backDiv.innerHTML = '';
		var snakeHead = document.createElement("div");
		snakeHead.setAttribute('class','snakNote');
		snakeHead.style.top = '50px';
		snakeHead.style.left = '50px';
		var snakeNoteTemp = new snakeNote({'x':50,'y':50,"element":snakeHead});
		backDiv.appendChild(snakeHead);
		this.snakeNotes.push(snakeNoteTemp);
		this.creatFood();
	},
	//移动
	snakeMove : function(Direction){
		
		switch (Direction){

			//右
			case DirectionEnum.RIGHT:{

				for (var i = this.snakeNotes.length - 1; i >= 0; i--) {
					
					var snakeNoteSave = this.snakeNotes[i];
					if (i!= 0) {

						//中间跟随改变
						var snakeBefore = this.snakeNotes[i-1];
						snakeNoteSave.x = snakeBefore.x;
						snakeNoteSave.y = snakeBefore.y;
						snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';
						snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
					    
					} else {

						//头部改变
						snakeNoteSave.x += 10;
					    snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';

					}
				}

			}
			break;
			//左
			case DirectionEnum.LEFT:{

				for (var i = this.snakeNotes.length - 1; i >= 0; i--) {
					
					var snakeNoteSave = this.snakeNotes[i];
					if (i!= 0) {

						//中间跟随改变
						var snakeBefore = this.snakeNotes[i-1];
						snakeNoteSave.x = snakeBefore.x;
						snakeNoteSave.y = snakeBefore.y;
						snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';
						snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
					    
					} else {

						//头部改变
						snakeNoteSave.x -= 10;
					    snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';
					}
					
				}
			}
			break;
			//下
			case DirectionEnum.DOWN:{

				for (var i = this.snakeNotes.length - 1; i >= 0; i--) {
					
					var snakeNoteSave = this.snakeNotes[i];
					if (i!= 0) {

						//中间跟随改变
						var snakeBefore = this.snakeNotes[i-1];
						snakeNoteSave.x = snakeBefore.x;
						snakeNoteSave.y = snakeBefore.y;
						snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';
						snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
						
					} else {

						
						//头部改变
					    snakeNoteSave.y += 10;
					    snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
					}
					
				}
			}
			break;
			//上
			case DirectionEnum.UP:{

				for (var i = this.snakeNotes.length - 1; i >= 0; i--) {
					
					var snakeNoteSave = this.snakeNotes[i];
					if (i!= 0) {

						//中间跟随改变
						var snakeBefore = this.snakeNotes[i-1];
						snakeNoteSave.x = snakeBefore.x;
						snakeNoteSave.y = snakeBefore.y;
						snakeNoteSave.element.style.left = snakeNoteSave.x + 'px';
						snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
						
					} else {

						//头部改变
					    snakeNoteSave.y -= 10;
					    snakeNoteSave.element.style.top = snakeNoteSave.y + 'px';
						
					}
					
				}
			}
			break;
		}
		var snakeHead = this.snakeNotes[0];
		//alert('食物' + this.foodNote.x + '' + this.foodNote.y + '头部' + snakeHead.x + '' + snakeHead.y);
		//判断是否吃到食物
		if (snakeHead.x == this.foodNote.x && snakeHead.y == this.foodNote.y) {
			var snakeLast = this.snakeNotes[this.snakeNotes.length - 1];
			var snakeBody = document.createElement("div");
			var fx,fy;
		    snakeBody.setAttribute('class','snakNote');
		    this.backDiv.removeChild(this.foodNote.element);
		    //再出创建食物
		    this.creatFood();
			switch (Direction){
			//右
			case DirectionEnum.RIGHT:{

				fx =  snakeLast.x - 10;
				fy =  snakeLast.y;
				snakeBody.style.top = fy + 'px';
		        snakeBody.style.left = fx + 'px';

			}
			break;
			//左
			case DirectionEnum.LEFT:{

				fx =  snakeLast.x + 10;
				fy =  snakeLast.y;
				snakeBody.style.top = fy + 'px';
		        snakeBody.style.left = fx + 'px';

			}
			break;
			//下
			case DirectionEnum.DOWN:{

				fx =  snakeLast.x;
				fy =  snakeLast.y - 10;
				snakeBody.style.top = fy + 'px';
		        snakeBody.style.left = fx + 'px';

			}
			break;
			//上
			case DirectionEnum.UP:{

				fx =  snakeLast.x;
				fy =  snakeLast.y + 10;
				snakeBody.style.top = fy + 'px';
		        snakeBody.style.left = fx + 'px';

			}
			break;
		}
		    this.backDiv.appendChild(snakeBody);
		    var snakeNoteTempE = new snakeNote({'x':fx,'y':fy,'element':snakeBody});
		    this.snakeNotes.push(snakeNoteTempE);
		}
		//判断是否是结束
		if(snakeHead.x >= 500 || snakeHead.x <= -10 || snakeHead.y <= -10 || snakeHead.y >= 500)
		{
			alert('死了');
			this.initSnake();
		}
	},
	//创建食物
	creatFood : function(){

		var fx = GetRandomNum(0,500);
		fx = (fx - fx % 10);
		var fy = GetRandomNum(0,500);
		fy = (fy - fy % 10);
		var foodNote = document.createElement("div");
		foodNote.setAttribute('class','foodNote');
		foodNote.style.top = fy + 'px';
		foodNote.style.left = fx + 'px';
		this.foodNote = new snakeNote({'x':fx,'y':fy,"element":foodNote});
		this.backDiv.appendChild(foodNote);
		//这里需要做判断不能出现在自身的坐标中
		//{}
	},
}

//获取随机数
function GetRandomNum(Min,Max)
{
var Range = Max - Min;
var Rand = Math.random();
return(Min + Math.round(Rand * Range));
}  

var fOpp = new opp();

//键盘按下按钮
document.onkeydown = function(){
    var oEvent = window.event;
    switch (oEvent.keyCode){

    	case 37:{

    		//左
    		fOpp.direction = DirectionEnum.LEFT;
    	}
    	break;
    	case 38:{

    		//上
    		fOpp.direction = DirectionEnum.UP;
    	}
    	break;
    	case 39:{

    		//右
    		fOpp.direction = DirectionEnum.RIGHT;
    	}
    	break;
    	case 40:{

    		//下
    		fOpp.direction = DirectionEnum.DOWN;
    	}
    	break;

    }
    fOpp.snakeMove(fOpp.direction);
}

