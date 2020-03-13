'use strict';

// BigInt

let myBigInt = 5n; // not supported in node
console.log(myBigInt, typeof myBigInt)

// Math operator
console.log(myBigInt + 10n) // 15n
// console.log(myBigInt + 10) // TypeError
console.log(myBigInt / 10n, 5/2) // difference is that bigint division chop off the decimal part whereas number divison does not
// convert bigint to number
console.log(Number(5n) + 50)

// Comparisons
console.log(10 > 10n, 10 < 10n, 10 == 10n, 10n == 10n);

// Boolean operations
console.log(0n == false, 1n == true, 2n == true) // true true false
if(5n){ // but this works
	console.log(true);
}
