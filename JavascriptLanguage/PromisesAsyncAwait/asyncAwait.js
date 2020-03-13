'use strict';

async function f() {
	let promise = new Promise((resolve, reject) => {
		let num = Math.random()
		if(num >= 0.5)
			setTimeout(resolve, 1000)
		else
			setTimeout(reject, 1000)
	})
	try{
		await promise
		console.log("Resolved")
	} catch(e){
		console.log("Rejected")
	}
}

f()