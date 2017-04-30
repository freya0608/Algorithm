/**
 * Created by freya on 2017/4/17.
 */
function mergeSort(array) {

    function sort(array, first, last) {
        first = (first === undefined) ? 0 : first
        last = (last === undefined) ? array.length - 1 : last
        if (last - first < 1) {
            return;
        }
        var middle = Math.floor((first + last) / 2);
        sort(array, first, middle);
        sort(array, middle + 1, last);

        var f = first,
            m = middle,
            i,
            temp;

        while (f <= m && m + 1 <= last) {
            if (array[f] >= array[m + 1]) { // 这里使用了插入排序的思想
                temp = array[m + 1];
                for (i = m; i >= f; i--) {
                    array[i + 1] = array[i];
                }
                array[f] = temp;
                m++
            } else {
                f++
            }
        }

        return array;
    }

    return sort(array);
}

var  array = [7,3,5,6,8,9];
mergeSort(array);



// 归并操作(Merge)，也叫归并算法，指的是将两个已经排序的序列合并成一个序列的操作。
// 归并排序算法依赖归并操作。
// 归并排序有多路归并排序、两路归并排序 , 可用于内排序，也可以用于外排序。