/**
 * Created by whichone on 2019/3/28.
 */
//自调用函数----食物的
((function () {
    var elements = [];//用来保存每个小方块食物的
    //食物就是一个对象，有高，有宽，有横纵坐标，先定义构造函数，然后创建对象
    function Food(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    }

    //为原型添加初始化函数----在页面上显示食物
    //食物要在地图上显示，所以需要地图这个参数
    Food.prototype.init = function (map) {
        //先删除这个小食物
        //外部不能访问
        remove();
        //创建食物div
        var div = document.createElement("div");
        //把div加到map中
        map.appendChild(div);
        //设置div样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //先脱离文档流
        div.style.position = "absolute";
        //横纵坐标随机产生
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";

        //把div加入到数组elements中
        elements.push(div);
    };

    //私有的函数----删除食物
    function remove() {
        //elements数组中有这个食物
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            //找到这个子元素的父级元素，然后让父级元素删了子元素
            ele.parentNode.removeChild(ele);
            //再把elements中的这个子元素删除
            elements.splice(0, 1);//删除索引0开始的1个元素
        }
    }

    //把Food暴露给window-----外部可以使用
    window.Food = Food;
})());