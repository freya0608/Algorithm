/**
 * Created by freya on 2017/4/5.
 */
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
insertionSort(array);

//每次拿到依次拿到一个数字，插入到它的合适的位置，然后依次向后遍历