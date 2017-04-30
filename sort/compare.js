/**
 * Created by freya on 2017/4/19.
 */

function compare(value1, value2) {
    if(value1<value2){
        return -1;
    }else if(value1>value2){
        return 1;
    }else {
        return 0;
    }


    //return value1-value2;第二种方法。
}

var values = [0,5,10,2,30,20];
values.sort(compare);
console.log(values);

//[0, 2, 5, 10, 20, 30]

