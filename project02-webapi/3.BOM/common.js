/**
 * Created by whichone on 2019/3/5.
 */
/**
 * ����id���Ե�ֵ�����ض�Ӧ�ı�ǩԪ��
 * @param id id���Ե�ֵ��string����
 * @returns {Element}Ԫ�ض���
 */
function my$(id){
    return document.getElementById(id);
}

//���������ǩ�е������ı�����
function setInnerText(element,text){
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
//��ȡ�����ǩ�е��ı�����
function getInnerText(element){
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}

//Ϊ����Ԫ�أ��������¼�-----�����Ԫ�أ��¼������ͣ��¼�������
function addEventListener(element,type,fn){
    if(element.addEventListener){
        element.addEventListener(type,fn,false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else{
        element["on"+type]=fn;
    }
}
//Ϊ�����Ԫ�ؽ���¼�
function removeEventListener(element,type,fn){
    if(element.removeEventListener){
        element.removeEventListener(type,fn,false);
    }else if(element.detachEvent){
        element.detachEvent("on"+type,fn);
    }else{
        element["on"+type]=null;
    }
}
//��ȡ����һ������Ԫ�صĵ�һ����Ԫ��
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

//��ȡ����һ������Ԫ�ص����һ����Ԫ��
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
//��װ��������--------���������һ��Ԫ�أ������ƶ���ָ����Ŀ��λ��
//@param element----Ԫ�أ�json----���󣨼�ֵ�ԣ�
function animate(element,json,fn) {
    //������ʱ��
    clearInterval(element.timeId);
    //��ʱ����idֵ�洢�ڶ����һ��������
    element.timeId = setInterval(function () {
        var flag=true;//Ĭ��ȫ���ﵽĿ��
        for(var attr in json) {
            if(attr=="opacity"){//��ȡ��ǰԪ�ص�͸����
                //��ȡԪ�صĵ�ǰ͸���ȣ����Ŵ�100��
                var current = getStyle(element, attr)*100;
                //Ŀ��͸���ȷŴ�100��
                var target=json[attr]*100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current/100;
            }else if(attr=="zIndex"){//��ȡ��ǰ�㼶
                element.style[attr]=json[attr];
            }else{//��ͨԪ��
                //��ȡԪ�صĵ�ǰλ��
                current = parseInt(getStyle(element, attr));
                target=json[attr];
                //ÿ���ƶ���λ��
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
            clearInterval(element.timeId);//��������ȫ������Ŀ��ʱ����ʱ��
            //�������Ե���Ŀ�����ʹ����������������д���ĺ���
            if(fn){
                fn();
            }
        }
        //���Դ���
        console.log("Ŀ��λ�ã�" + target + "��ǰλ�ã�" + current + "�ƶ�������" + step);
    }, 20);
}
//���ݴ���-----��ȡ����һ��Ԫ�ص�����һ����ʽ���Ե�ֵ----�ַ�������
function getStyle(element, attr) {
    //�ж������֧��֧���������
    if (window.getComputedStyle) {
        return window.getComputedStyle(element, null)[attr];
    } else {
        return element.currentStyle[attr];
    }

}
//��ȡҳ�����ϻ������������ȥ�ľ���
function getScroll(){
    return {
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    };
}