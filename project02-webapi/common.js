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