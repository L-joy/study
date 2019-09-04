/**
 * Created by whichone on 2019/5/7.
 */
$(function () {
    //��ʼ��fullpage���
    //1.����ÿһ����Ļ�ı�����ɫ
    //2.������Ļ���ݵĶ��뷽ʽ   Ĭ���Ǵ�ֱ����    �ĳɶ�������
    //3.���õ�����  ������
    //4.��������ĳһ����ʱ�� �ص�
    $("#main").fullpage({
        //���ò���
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad: function (link,index) {
            //index ��� 1��ʼ
            $(".section").eq(index-1).addClass('now');
        },
        //��������л���һҳ
        //����������ʼ��ϻ��߲��������Ⱦ���
        afterRender: function () {
            //��������л���һҳ
            $('.more').on('click', function () {
                $.fn.fullpage.moveSectionDown();
            });
        },
        //�뿪ĳ��ҳ��ʱ����
        onLeave: function (index,nextindex,direction) {
            if(index==2&&nextindex==3){
                $('.section').eq(index-1).addClass('leaved');
            }
        },
        //ҳ���л���ʱ��  Ĭ��700
        scrollingSpeed:1000

    });
});