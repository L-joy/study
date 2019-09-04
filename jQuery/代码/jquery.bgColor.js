/**
 * Created by whichone on 2019/4/30.
 */

$.fn.bgColor= function (color) {
    //this是一个jq对象
    this.css("backgroundColor",color);
    return this;
};