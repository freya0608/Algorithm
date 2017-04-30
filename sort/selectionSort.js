/**
 * Created by freya on 2017/4/5.
 */
function selectionSort(arr) {
    var temp;
    var minIndex;
    var minValue;
    for(var i = 0;i<=arr.length-1;++i){
        minIndex = i;

        //在后面的剩下的数组中找最小值
        for (var j = i+1;j<=arr.length-1;++j){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
                minValue = array[minIndex];
            }
        }

        //将最小值依次排放从左到右排放
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var  array = [7,3,5,6,8,9];
selectionSort(array);