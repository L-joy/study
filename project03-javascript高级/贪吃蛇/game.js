/**
 * Created by whichone on 2019/3/28.
 */
//自调用函数---游戏对象
((function () {
    var that=null;
    //游戏对象的构造函数
    function Game(map) {
        this.food = new Food();
        this.snake = new Snake();
        this.map = map;
        that=this;
    }

    //游戏对象初始化
    Game.prototype.init = function () {
        //食物初始化
        this.food.init(this.map);
        //小蛇初始化
        this.snake.init(this.map);
        //小蛇自己跑起来
        this.runSnake(this.food,this.map);
        //调用按键的方法
        this.bindKey();
//            setInterval(function () {
//                that.snake.move(that.map);
//                that.snake.init(that.map);
//            }, 100);

    };

    //小蛇自动移动
    Game.prototype.runSnake = function (food,map) {

        var timeId=setInterval(function () {
            this.snake.move(food,map);
            this.snake.init(map);
            //横坐标的最大点
            var maxX=map.offsetWidth/this.snake.width;
            //纵坐标的最大点
            var maxY=map.offsetHeight/this.snake.height;
            //蛇头横坐标
            var headX=this.snake.body[0].x;
            //蛇头纵坐标
            var headY=this.snake.body[0].y;
            if(this.snake.body[0].x>=maxX||this.snake.body[0].x<0){
                clearInterval(timeId);
                alert("哎呀");
            }
            if(this.snake.body[0].y>=maxY||this.snake.body[0].y<0){
                clearInterval(timeId);
                alert("哎呀");
            }
        }.bind(that), 150);
    };

    //设置用户按键，改变小蛇移动的方向
    Game.prototype.bindKey= function () {
        //获取用户的按键，改变小蛇方向------为document注册键盘按下事件
        //先为document元素绑定事件-----e:事件处理参数----this为document
        document.addEventListener("keydown", function (e) {
            //获取按键的值
            switch (e.keyCode){
                case 37:this.snake.direction="left";break;
                case 38:this.snake.direction="top";break;
                case 39:this.snake.direction="right";break;
                case 40:this.snake.direction="bottom";break;
            }

        }.bind(that),false);
    };
    window.Game = Game;
})(window));