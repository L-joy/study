
$(document).ready(function () {
    $('.navigation ul li a').on('click',function (e) {
        e.preventDefault();//阻止默认事件
        var activeSection = $(this).attr('href');//获取跳转页面
        var overlayChance = $(this).parent('li').attr('class');
        console.log(overlayChance);
        $('.section').removeClass('active');
        $('.close-section').addClass('active');
        $('.overlay').removeClass('home-overlay').addClass(overlayChance+'-overlay');
        $(activeSection).addClass('active');
        return false;
    });
    $('.close-section').on('click',function (e) {
        var overlayCloseChance = $('.section.active').attr('id');
        $('.section').removeClass('active');
        $('.close-section').removeClass('active');
        $('.overlay').removeClass(overlayCloseChance+'-overlay').addClass('home-overlay');
        $('.home-section').addClass('active');
        return false;
    });
    //轮播图插件
    $('.skill-slider').owlCarousel({
        item: 3,//可见个数
        autoplay: false,//是否自动播放
        loop: true,//无限循环
        dots: false,//是否显示点导航
        nav: true,//显示下一个按钮
        navText: ['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
        responsive: {//屏幕响应式
            0 : {
                item: 2
            },
            480 : {
                item: 3
            },
            768 : {
                item: 4
            },
            992 : {
                item: 3
            },
        }
    });
    // 图饼动画
    $('.chart').easyPieChart({
        barColor: '#fff',
        trackColor:'transparent',
        scaleColor:'transparent',
        lineCap: 'round',
        lineWidth: 3,
        size: 120,
        animate: {
            duration: 3000,
            enable: true
        }
    })

});
