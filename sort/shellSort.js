/**
 * Created by freya on 2017/4/6.
 */
function shellSort(arr) {
    function swap(arr, i, k) {
        var temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    var gap = Math.floor(arr.length);
    while (gap>0){
        for (var i = gap;i<arr.length;i++){
            for(var j= i;0<j;j-=gap){
                if(arr[j-gap]>arr[j]){
                    swap(arr,j-gap,j);
                }else {
                    break;
                }
            }
        }
        gap = Math.floor(gap/2);
    }
    return arr;
}
var  array = [7,3,5,6,8,9];
shellSort(array);