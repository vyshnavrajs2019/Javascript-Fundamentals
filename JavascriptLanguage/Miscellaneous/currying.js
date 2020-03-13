'use strict';

function sum(x){
	return function(y){
		return function(z){
			return x + y +z
		}
	}
}

let result = sum(5)(10)(15)
console.log(result) // 30

// Adder

let add5 = sum(5)
let add5Plus10 = add5(10)

// add 50 to add5Plus10
console.log(add5Plus10(50))
