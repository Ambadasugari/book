a = ["rat", "tar", "art", "car"]
temp = []
for (i = 0; i < a.length; i++) {
    t = a[i].split("")
    t.sort()
    temp.push(t)
}
console.log(temp)
s = temp[0]
var c = 0
for (i = 0; i < temp.length; i++) {
    console.log(temp[i], s)
    if (s.join("") == temp[i].join("")) {
        c++
    }
}
console.log(c)
if (c == a.length) {
    console.log(true)
} else {
    console.log(false)
}