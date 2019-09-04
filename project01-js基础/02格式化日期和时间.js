/**
 * Created by whichone on 2019/3/1.
 */
//案例：格式化日期和时间---格式化后的指定格式的日期和时间---封装成一个函数
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
    console.log("年月日");
    return year+"年"+month+"月"+day+"日 "+hour+":"+minutes+":"+second+" 星期"+week;
}