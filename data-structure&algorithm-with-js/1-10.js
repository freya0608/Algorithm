/**
 * Created by Administrator on 2016/12/25.
 */
function curve(arr,amount) {
    for(var i=0;i<arr.length;++i){
        arr[i]+=amount;
    }
}
var grades = [77,73,74,81,90];
curve(grades,5);
alert(grades);
