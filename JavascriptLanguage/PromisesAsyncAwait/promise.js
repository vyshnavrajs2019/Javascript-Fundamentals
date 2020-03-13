'use strict';

function sep() {console.log('--------------------------------------------------')}

let promise = new Promise(function(resolve, reject, ){
	setTimeout(function(){
		let num = Math.random()
		if(num >= 0.5)
			resolve("Yes the number is greater than or equal to 0.5")
		reject("Sorry! the number is smaller than 0.5")
	}, 1000)
})

promise
.then(function(result){
	console.log("Then", result)
})
.catch(function(result){
	console.log("Error", result)
})
.finally(() => alert("Promise ready")) // does not work in nodejs