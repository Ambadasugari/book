const d = {
    fn: "aman",
    ln: "hello",
    age: 300,
    hob: ["cooking", "reading", "learning"],
    isbest: true,
    add: {
        fa: "kurnool",
        la: "nandikotkur"
    }
}
d.fn = (d.fn)[0].toUpperCase() + (d.fn).slice(1)
d.ln = (d.ln)[0].toUpperCase() + (d.ln).slice(1)
console.log(d)
l = d.hob
for (i = 0; i < l.length; i++) {
    l[i] = l[i][0].toUpperCase() + l[i].slice(1)
}
d.hob = l
a = d.add
console.log(d)