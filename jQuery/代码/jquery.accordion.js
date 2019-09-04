/**
 * Created by whichone on 2019/4/30.
 */
$.fn.accordion= function (arr,width) {
    arr=arr||[];
    width=width||0;
    var $li=this.find("li");
    var boxLength=this.width();
    var maxLength=boxLength-($li.length-1)*width;
    var avgLength=boxLength/$li.length;
    $li.each(function (i,e) {
        $(e).css("backgroundColor",arr[i]);
    });
    //��liע���������¼�
    $li.on("mouseenter", function () {
        $(this).stop().animate({width:maxLength}).siblings().stop().animate({width:width});
    });
    //��liע������뿪�¼�
    $li.on("mouseleave", function () {
        $li.stop().animate({width:avgLength});
    });
};