/**
 * Created by whichone on 2019/3/1.
 */
//��������ʽ�����ں�ʱ��---��ʽ�����ָ����ʽ�����ں�ʱ��---��װ��һ������
function mydate(dt){
    var year=dt.getFullYear();
    var month=dt.getMonth()+1;
    var day=dt.getDate();
    var hour=dt.getHours();
    var minutes=dt.getMinutes();
    var second=dt.getSeconds();
    var week=dt.getDay();
    month=month<10?"0"+month:month;
    day=day<10?"0"+day:day;
    hour=hour<10?"0"+hour:hour;
    minutes=minutes<10?"0"+minutes:minutes;
    second=second<10?"0"+second:second;
    console.log("������");
    return year+"��"+month+"��"+day+"�� "+hour+":"+minutes+":"+second+" ����"+week;
}