// Converting Number to String

let myNumber = 475890
console.log(myNumber, typeof myNumber)

// Convert the number to a string 
let myString = String(myNumber)
console.log(myString, typeof myString)

// Converting string back to number
let oldNumber = parseInt(myString)
// oldNumber = Number(myString) // get the same result as above
// oldNumber = myString - 0 // get the same result as above
// oldNumber = +myString // get the same result as above
console.log(oldNumber, typeof oldNumber)


// Converting to float
let myFloat = parseFloat(myNumber)
console.log(myFloat, typeof myFloat) // type of float is number

let floatString = "34756.67"
// myFloat = parseFloat(floatString)
// myFloat = +floatString
myFloat = Number(floatString)
console.log(myFloat, typeof myFloat)

// Implicit conversions
console.log("6" / "2")
// alert(26) // converts 26 to String before alerting


// Not a Number : NaN

let str = "234s"
console.log(Number(str))

// This works as it perform strip operation before the convertion
str = "    234    "
console.log(+str)
console.log(Number(str))

console.log(Number(undefined))
// console.log(-undefined)
console.log(Number(null))
console.log(-null) // gives -0 as output
// console.log(-true)
// console.log(+false)


// Boolean conversion
console.log(Boolean(NaN))
console.log(Boolean(undefined))
console.log(Boolean(''))
console.log(Boolean('                 ')) // Gives true
console.log(Boolean(0))
console.log(Boolean(1))
console.log(Boolean(-1))
console.log(Boolean(2))