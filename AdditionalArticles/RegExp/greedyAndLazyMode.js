// Greedy and Lazy Mode

let regexp = /".+"/g
let str = 'a "witch" and her "broom" is one'

console.log(str.match(regexp))

regexp = /".+?"/g
console.log(str.match(regexp));
