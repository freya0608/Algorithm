/**
 * Created by freya on 2017/4/5.
 */
function quickSort(arr) {
    if(arr.length<=1){
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];//存放比基准数大的元素
    var right = [];//存放比基准数小的元素
    for(var i=0;i<arr.length;i++){
        console.log('基准值：'+pivot+'当前元素'+arr[i]);
        if(arr[i]<pivot){
            console.log('移动'+arr[i]+'到左边');
            left.push(arr[i]);
        }else {
            console.log('移动'+arr[i]+'到右边');
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));//用递归将数据链接起来；
}
var  array = [7,3,5,6,8,9];
quickSort(array);