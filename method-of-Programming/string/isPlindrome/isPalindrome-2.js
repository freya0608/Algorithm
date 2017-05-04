/**
 * Created by freya on 2017/5/5.
 */
function isPalindrome(s) {
    if(s==null||s.length<1){
        return false;
    }
    var m = s.length /2;
    var first = m-1;
    var second = s.length-m;

    while (first>=0){
        if(s[first]!=s[second]){
            return false;
        }
        --first;
        ++second;
    }
    return true;
}
s = 'shhs';
isPalindrome(s);