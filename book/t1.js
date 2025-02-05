console.log(1);
console.log(2);

const promise = new Promise((res, rej) => {
    res(3);
});

promise.then((fulfil) => console.log(fulfil));

setTimeout(() => { console.log(5) }, 3000);
setTimeout(() => { console.log(7) }, 0);

console.log(6);