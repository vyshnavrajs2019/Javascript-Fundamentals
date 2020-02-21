/*
    8 different data types
        Number
        String
        Boolean
        null
        undefined
        object
        Symbol
        BigInt
*/

// Number
let myNum = 200
console.log(myNum + " Type: " + typeof myNum)

// No zero division error
let possitiveInfinity = 1 / 0
console.log(possitiveInfinity)

let negativeInfinity = -1 / 0
console.log(negativeInfinity)

// Also negative zero supported
console.log(0, -0)

// keyword Infinity
console.log(Infinity, -Infinity)

// Checking if 1/0 equals Infinity

console.log(Infinity == 1/0)
console.log(Infinity == 1 / (-0)) // does not work as intended output is false

console.log(Infinity === 1/0)

// BigInt
// Not supported in nodejs
// Chrome, Firefox supports
// let myBigNumber = 1234567890123456789012345678901234567890n
// console.log(myBigNumber, "Type:", typeof myBigNumber)

// String
let myString = "Vyshnav Raj S"
console.log(myString + " Type: " + typeof myString)

// Boolean
let isGood = true
let isBad = false
console.log(isGood, "Type:", typeof isGood)
console.log(isBad, "Type:", typeof isBad)

// null
let myNull = null
/*
    type of null is object
    it is a bug in ECMAScript, and the type should be null
*/
console.log(myNull, "Type:", typeof myNull)

// undefined
let myUndefined = undefined
console.log(myUndefined, "Type:", typeof myUndefined)

// Object
let person = {
    fristName: "Vyshnav",
    lastName: "Raj S"
}
console.log(person, "Type:", typeof person)

// Symbol

let id = Symbol()
console.log(id, "Type:", typeof id)

// Are two symbols equal
console.log(Symbol() == Symbol() || id == Symbol()) // false