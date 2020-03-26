// Quantifiers

let str = "This is 5555."
console.log(str.match(/\d{4}/));

let str1 = "5555 55 555555"
console.log(str1.match(/(555)+/g));

// ?
console.log("This sentence cotains one 0".match(/0?/));

// *
console.log("".match(/1*/));
