s = "hello world welcome to world"
s = s.split(" ")
ma = 0
ans1 = ""
let ans = s.map(ele => {
    if (ele.length > ma) {
        ma = ele.length
        ans1 = ele
    }
})
console.log(ans1)