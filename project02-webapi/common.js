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