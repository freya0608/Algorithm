/**
 * Created by freya on 2017/5/1.
 */
function LeftShiftOne(s, n) {
    var t=s[0];
    for(var i=1;i<n;i++){
        s[i-1] = s[i];
    }
    s[n-1] = t;
}

function LeftRotateOne(s, n, m) {
    while (m--){
        LeftShiftOne(s,n);
    }
    return s;//["c", "d", "e", "f", "a", "b"]
}

var s=['a','b','c','d','e','f'];
LeftRotateOne(s,6,2);