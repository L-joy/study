/**
 * Created by whichone on 2019/5/7.
 */
$(function () {
    //初始化fullpage组件
    //1.设置每一个屏幕的背景颜色
    //2.设置屏幕内容的对齐方式   默认是垂直居中    改成顶部对齐
    //3.设置导航栏  点容器
    //4.监听进入某一屏的时候 回调
    $("#main").fullpage({
        //配置参数
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad: function (link,index) {
            //index 序号 1开始
            $(".section").eq(index-1).addClass('now');
        },
        //点击更多切换下一页
        //最好在组件初始完毕或者插件内容渲染完毕
        afterRender: function () {
            //点击更多切换下一页
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
        },
        //离开某个页面时触发
        onLeave: function (index,nextindex,direction) {
            if(index==2&&nextindex==3){
                $('.section').eq(index-1).addClass('leaved');
            }
        },
        //页面切换的时间  默认700
        scrollingSpeed:1000

    });
});