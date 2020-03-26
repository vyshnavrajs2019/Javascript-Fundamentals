// RegExp

// match

let str = "This Is a dummy Sentence. This is another sentence!!"

// case insensitive
let result = str.match(/is/i)
// result
console.log(result)
// index
console.log(result.index)
console.log(result.input)

// global match
result = str.match(/is/g)
console.log(result)
// console.log(result.input) // undefined

// global and case-insenstive
result = str.match(/is/gi)
console.log(result)
console.log(result.length)

// if no match
result = str.match(/svr/gi) // null instead of []
console.log(result)
// Error if result.length

// Therefore better approach would be
result = str.match(/svr/gi) || []
console.log(result.length)

// Replace

str = "We will, we will"
result = str.replace(/We/i, 'I')
console.log(result)

// global replace
result = str.replace(/We/ig, 'I')
console.log(result)

// $& 	inserts the whole match
// $` 	inserts a part of the string before the match
// $' 	inserts a part of the string after the match
// $n 	if n is a 1-2 digit number, then it inserts the contents of n-th parentheses, more about it in the chapter Capturing groups
// $<name> 	inserts the contents of the parentheses with the given name, more about it in the chapter Capturing groups
// $$ 	inserts character $

str = "I love HTML"
result = str.replace(/HTML/, "$$...")
console.log(result)

// Test

result = /HTmL/i.test(str)
console.log(result) // bool true if present else false