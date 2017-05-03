/**
 * Created by freya on 2017/5/3.
 */
function isPalindrome(s) {
    if(s==null||s.length<1){
        return false;
    }
    var front = 0;
    var back = s.length -1;

    while (front<back){
        if(s[front] != s[back]){
            return false;
        }
        ++front;
        --back;
    }
    return true;
}
s = 'shhs';
isPalindrome(s);//时间复杂度o(n),空间复杂度o(1)