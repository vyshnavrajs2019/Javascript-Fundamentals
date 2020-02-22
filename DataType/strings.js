'use strict';

let chars = "0123456789abcdefghijklmnopqrstuvwxyz"

console.log(chars.length)
console.log(chars.charAt(10)) // character at the specified index
console.log(chars.charAt(-10000)) // character at an invalid index is ''
console.log(chars[-100]) // undefined for invalid index
console.log(chars[20])
console.log(chars.charCodeAt(0)) // ascii value
console.log(chars.charCodeAt(10))
console.log(chars.charCodeAt(100)) // NaN for invalid index
// console.log(chars[10] = 'A') // Error immutable

// Loop
for(let ch of chars)
	console.log(ch)

// Changing the case
console.log(chars.toUpperCase())
console.log(chars.toLowerCase())

// Searching
console.log(chars.indexOf("ab")) // index if substring found
console.log(chars.indexOf("bz")) // -1 if not a substring
console.log(chars.indexOf("ab", 11)) // 2nd arg specifies the starting index

console.log(chars.lastIndexOf("ab")) // backward search begins from the last character
console.log(chars.lastIndexOf("ab", 9)) // backward search begins from the specified index

console.log(chars.includes("abc")) // return true if present else false
console.log(chars.includes("abz"))

console.log(chars.startsWith("0")) // return true if starts with the character specified else false
console.log(chars.startsWith("1"))

console.log(chars.endsWith("yz"))
console.log(chars.endsWith("zy"))

// Substring
console.log(chars.slice(10, 12)) // between start and end but excluding end
console.log(chars.slice(10)) // till the last character
console.log(chars.slice(-2, -1))

console.log(chars.substring(6, 2)) // end can be smaller than start
console.log(chars.substring(2, 6))
console.log(chars.substring(50,55)) // empty string
console.log(chars.substring(-5, -2)) // does not accept negative indices

console.log(chars.substr(1, 10)) // 2nd arg is length of the substring

// ASCII
console.log("AZC".codePointAt(1)) // for invalid index charCodeAt gives NaN whereas codePointAt gives undefined
console.log(String.fromCharCode(...[48,49,50,51])) // Generates the string from ascii
console.log(String.fromCharCode(67, 68))
console.log(String.fromCodePoint(67, 68, 69)) // As above