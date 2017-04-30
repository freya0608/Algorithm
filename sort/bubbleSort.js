/**
 * Created by freya on 2017/4/5.
 */
function bubbleSort(array) {
    var length = array.length;
    var temp;
    for(var i=length-1;0<i;i--){
        for(var j=0;j<i;j++){
            if(array[j]>array[j+1]){
                temp = array[j];
                array[j]= array[j+1];
                array[j+1]=temp;
            }

        }
    }
    return array
}
var  arr = [7,3,5,6,8,9];
bubbleSort(arr);

//时间复杂度：o(n^2)
