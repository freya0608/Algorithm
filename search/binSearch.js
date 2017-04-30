/**
 * Created by freya on 2017/4/5.
 */

function binSearch(arr, data) {
    var upperBound = arr.length-1;
    var lowerBound = 0;
    while (lowerBound<=upperBound){
        var mid = Math.floor((upperBound+lowerBound)/2);
        if(arr[mid]<data){
            lowerBound = mid+1;
        }else if(arr[mid]>data){
            upperBound = mid-1;
        }else {
            return mid+'和'+arr[mid];
        }
    }
    return -1;
}

function insertionSort(array) {
    function swap(array, i, j) {
        var temp  = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    for(var i=0;i<array.length;i++){

        //如果比这个数字大，那么依次向后移动，然后找到它的位置，
        for(var j=i;j>0;j--){
            if(array[j-1]>array[j]){
                swap(array,j-1,j);
            }else {
                break;
            }
        }
    }
    return array
}
var  array = [7,3,5,6,8,9];
var arr = insertionSort(array);
binSearch(arr ,3);//返回已经排好序的数字




