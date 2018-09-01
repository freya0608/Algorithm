


function dyadic(){

    var arr = [[1,2,3,4],[4,12,33,43],[14,22,33,44],[15,26,63,4]];

    var size = arr.length;
    var len = 2 * arr.length-1;

    for(var k=0;k<len;k++){
        //规律是第 K的 列号-行号=size-1-k
        for(var i=0;i<size;i++){
            for(var j=0;j<size;j++){
                if(j-i === size-1-k){
                    var result = arr[i][j]+" ";
                }
            }
        }
      return result;
    }
}

dyadic();