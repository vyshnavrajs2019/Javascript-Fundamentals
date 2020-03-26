// Character Classes

let str = "+7(903)-123-45-67"
// Collect all numbers together
let result = str.match(/\d/g).join('')
console.log(result)

str = "House, city, District, State123456, 673616"
// Get the pincode
result = str.match(/\s\d\d\d\d\d\d/)[0].match(/\d\d\d\d\d\d/)[0]
console.log(result);

str = "Is there CSS4?"
result = str.match(/\w\w\w\d/)[0]
console.log(result);


// Inverse classes
str = "+7(903)-123-45-67"
// Get all characters other than digits
result = str.match(/\D/g).join('')
console.log(result);
// Get all numbers
result = str.replace(/\D/g, '')
console.log(result);

// dot
str = "Line 1.\nLine 2.\nLin3"
result = str.match(/./g).join('')
console.log(result);

// to match \n
result = str.match(/1..Line/s)
console.log(result[0]);
