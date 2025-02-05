a = "madam"
o = a
a = a.split("")
t = ""
ans = a.map(ele => t = ele + t)
if (t == o) {
    console.log("palindrome")
} else {
    console.log("not")
}