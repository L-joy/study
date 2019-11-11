/**
 * Created by whichone on 2019/3/5.
 */
/**
 * 根据id属性的值，返回对应的标签元素
 * @param id id属性的值，string类型
 * @returns {Element}元素对象
 */
function my$(id){
    return document.getElementById(id);
}

//设置任意标签中的任意文本内容
function setInnerText(element,text){
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
//获取任意标签中的文本内容
function getInnerText(element){
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

//为任意元素，绑定任意事件-----任意的元素，事件的类型，事件处理函数
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//为任意的元素解绑事件
function removeEventListener(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}
//获取任意一个父级元素的第一个子元素
function getFirstElementChild(element){
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node= element.firstChild;
        while(node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }

}

//获取任意一个父级元素的最后一个子元素
function getLastElementChild(element){
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node= element.lastChild;
        while(node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}
//封装动画函数--------设置任意的一个元素，变速移动到指定的目标位置
//@param element----元素；json----对象（键值对）
function animate(element,json,fn) {
    //先清理定时器
    clearInterval(element.timeId);
    //定时器的id值存储在对象的一个属性中
    element.timeId = setInterval(function () {
        var flag=true;//默认全部达到目标
        for(var attr in json) {
            if(attr=="opacity"){//获取当前元素的透明度
                //获取元素的当前透明度，并放大100倍
                var current = getStyle(element, attr)*100;
                //目标透明度放大100倍
                var target=json[attr]*100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){//获取当前层级
                element.style[attr]=json[attr];
            }else{//普通元素
                //获取元素的当前位置
                current = parseInt(getStyle(element, attr));
                target=json[attr];
                //每次移动的位置
                step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if(current!=target){
                flag=false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);//所有属性全部到达目标时清理定时器
            //所有属性到达目标才能使用这个函数，必须有传入的函数
            if(fn){
                fn();
            }
        }
        //测试代码
        console.log("目标位置：" + target + "当前位置：" + current + "移动步数：" + step);
    }, 20);
}
//兼容代码-----获取任意一个元素的任意一个样式属性的值----字符串类型
function getStyle(element, attr) {
    //判断浏览器支不支持这个方法
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }

}
//获取页面向上或者向左卷曲出去的距离
function getScroll(){
    return {
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    };
}