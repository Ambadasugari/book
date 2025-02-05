let a1 = [1, 2, 3, 1, 1];
let a2 = [3, 2, 5];
let a3 = [7, 2, 3];
let commonElements = [];
for (let i of a1) {
    if (a2.includes(i) && a3.includes(i)) {
        commonElements.push(i);
    }
}

console.log(commonElements);