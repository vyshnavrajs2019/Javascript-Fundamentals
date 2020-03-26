// Escaping, special characters

// Escaping
let str1 = "Chapter 5.1"
console.log(str1.match(/\d\.\d/)[0]); // \. is the . itself

let str2 = "Chapter 511"
console.log(str2.match(/\d\.\d/)); // null as there is not '.'

let str3 = "function g()"
console.log(str3.match(/g\(\)/));

let str4 = "1\\2"
console.log(str4.match(/\d\\\d/));