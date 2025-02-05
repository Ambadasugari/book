s = "hello world"
c = "l"
cnt = 0

function fun(c, s, cnt) {
    for (i = 0; i < s.length; i++) {
        if (s[i] == c) {
            cnt++
        }
    }
    return cnt
}
console.log(fun(c, s, cnt))