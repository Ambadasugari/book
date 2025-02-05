a = "A1BC243EZ1Z3H6"

function fun(s) {
    l1 = []
    l2 = []
    for (i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            l1.push(s[i])
        } else {
            l2.push(s[i])
        }
    }
    return { l1, l2 }
}
console.log(fun(a))