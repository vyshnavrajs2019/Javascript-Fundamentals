// Unicode

console.log('😄'.length)

// Unicode property
let str = "A ბ ㄱ a"
let result = str.match(/\p{L}/gu)
console.log(result);


// hexadecimal numbers
let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
console.log("number: xAF".match(regexp))

// currency
regexp = /\p{Sc}\d/gu;
str = `Prices: $2, €1, ¥9`;
console.log( str.match(regexp) )