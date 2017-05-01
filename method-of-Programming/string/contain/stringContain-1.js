/**
 * Created by freya on 2017/5/1.
 */
function stringContain(a, b) {
    for(var i=0;i<b.length;i++){
        for(var j=0;(j<a.length && a[j] != b[i]);++j){
            if(j>a.length){
                return false;
            }
        }
    }
    return true
}
var a ='hahhah';
var b ='hahhahhhhks';
stringContain(a,b);