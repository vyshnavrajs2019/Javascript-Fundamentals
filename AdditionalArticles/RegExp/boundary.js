// Word boundary: \b

let str1 = "Hello Java"
let str2 = "Hello Javascript"
let str3 = str1 + "!"

let regx1 = /\bJava\b/

console.log(regx1.test(str1)); // true as the string is \bHello\b \bJava\b
console.log(regx1.test(str2));
console.log(regx1.test(str3));

console.log( "1 23 456 78".match(/\b\d\d\b/g) ) // 23,78
console.log( "12,34,56".match(/\b\d\d\b/g) ) // 12,34,56