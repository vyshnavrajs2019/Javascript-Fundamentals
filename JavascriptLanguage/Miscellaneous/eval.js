'use strict';

// Eval

let codeString = '5 + 10 + 20'
let result = eval(codeString)
console.log(result) // 35

// Variable declaration within eval
let codeString2 = 'let a=5; console.log(a + 5)'
eval(codeString2)

let outerVar  = 100
eval('console.log(outerVar + 100)')

// Can change outer variables
eval('outerVar = 200')
console.log(outerVar) // 200

// try to get the variable a declared within eval on line no. 10
// console.log(a) // Error: ReferenceError

let myVar = 200
{
	let myVar = 400
	console.log(eval('myVar')) // 400
	console.log(window.eval('myVar')) // 200 - a way to access outer variables
}