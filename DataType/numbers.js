let num = 50.55

// Round the number
console.log(num.toFixed(1))

// Convert the number to exponential form
console.log(num.toExponential(2))

console.log(num.toPrecision(10))

// Convert number to binary, or any other format depending on the radix
console.log(num.toString(16))

console.log(num.valueOf())


// Math library

console.log(Math.log(10))
console.log(Math.log10)
console.log(Math.log2(10))
console.log(Math.log10(10))
console.log(Math.PI)
console.log(Math.max(...[1,2,3,4,5,6]))
console.log(Math.max(1,5,2,10,11,1,2))
console.log(Math.min(0,-1,20,2,2,-10))
console.log(Math.pow(10, 2))
console.log(Math.random())
console.log(Math.round(23746.2389407230))
console.log(Math.round(23.928))
console.log(Math.sign(-92))
console.log(Math.sign("0  ")) // string arg gets converted to number since hint is number
console.log(Math.sin(0.5*Math.PI)) // sin(pi/2)
console.log(Math.floor(234.9999))
console.log(Math.ceil(34.1))
console.log(Math.trunc(34)) // removed the part after the decimal point