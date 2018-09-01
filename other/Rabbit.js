function Rabbit(){
     var  rabbitNum = 1;
     for(var i = 1 ; i < 20 ; i++){
         rabbitNum = getMonthNum(i);
         console.log("兔子第   "+i+"  个月的总数为："+rabbitNum);
     }
 }

 function getMonthNum(x) {
     var  initRabbit = 1;
     if(x === 1 || x === 2){
         return initRabbit;
     }
     initRabbit = getMonthNum(x-1) + getMonthNum(x-2);
     return initRabbit;
}

Rabbit();



