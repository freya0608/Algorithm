/**
 * Created by freya on 2017/5/1.
 */
function reverseString(s, from, to) {
    while (from<to){
        var t = s[from];
        s[from++] = s[to];
        s[to--] = t;
    }
}
function leftRotateString(s, n, m) {
    m%=n;
    reverseString(s,0,m-1);
    reverseString(s,m,n-1);
    reverseString(s,0,n-1);
    return s; //["c", "d", "e", "f", "a", "b"]
}

var s=['a','b','c','d','e','f'];
leftRotateString(s,6,2);