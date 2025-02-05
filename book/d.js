const ar = [];
const s1 = {
    fn: "Raj",
    ln: "Kishore",
    age: "21",
    sub: "maths"
};
const s2 = {
    fn: "arvind",
    ln: "arekallu",
    age: "21",
    sub: "dm"
};
const s3 = {
    fn: "venky",
    ln: "golla",
    age: "80",
    sub: "biology"
};
const s4 = {
    fn: "lok",
    ln: "nara",
    age: "21",
    sub: "civil"
};
const s5 = {
    fn: "chenna",
    ln: "keshav",
    age: "23",
    sub: "sanskrit1"
};

// Create an array of first names (fn) and sort it
const f = [s1.fn, s2.fn, s3.fn, s4.fn, s5.fn];
f.sort(); // Sort the first names alphabetically
console.log(f); // Output: [ 'Raj', 'arvind', 'chenna', 'lok', 'venky' ]

// Push the student objects into the ar array
ar.push(s1);
ar.push(s2);
ar.push(s3);
ar.push(s4);
ar.push(s5);

// Sort the ar array of objects by the first name (fn) alphabetically
ar.sort((a, b) => a.fn.localeCompare(b.fn));

// Log the sorted array of student objects
console.log(ar);