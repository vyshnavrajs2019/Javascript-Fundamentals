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


// isFinite and isNaN

console.log(isFinite(Infinity))
console.log(isFinite(212.222))
console.log(isFinite(3.0))
console.log(isFinite("28738923.2932"))

console.log(isNaN(34.00041))
console.log(isNaN("34.4440001"))
console.log(isNaN("  3232.090 "))
console.log(isNaN(" 341a"))


// Comparison using Object.is
// Does not type cast
console.log(Object.is(NaN, NaN))
console.log(Object.is(23.00, 23))


// Type conversion
// To integer
console.log(parseInt("   23.444 a  "))
console.log(parseInt("  111  ", 2)) // binary to decimal conversion
console.log(parseInt("34px"))
console.log(parseInt("34.34.45"))

// To float
console.log(parseFloat("   2323e-2a  "))
console.log(parseFloat(23.434e-1))
console.log(parseFloat("34.45.56"))