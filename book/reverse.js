s = "hello world"
s = s.split(" ")
t = []

function fun(s, t) {
    for (i = 0; i < s.length; i++) {
        w = s[i]
        s1 = ""
        for (j = 0; j < w.length; j++) {
            s1 = w[j] + s1
        }
        t.push(s1)
    }
    ans = []
    for (i = (t.length) - 1; i >= 0; i--) {
        ans.push(t[i])
    }
    return ans
}
d = fun(s, t)
console.log(d.join(" "))