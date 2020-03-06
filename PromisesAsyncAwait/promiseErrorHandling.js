'use strict';

function getAPromise(index){
	return new Promise((resolve, reject) => {
		let num = Math.random()
		if(num > 0.5)
			resolve("Yes " + index)
		reject("No " + index)
	})
}

getAPromise(1)
.then((result)=>{
	console.log(result)
	return getAPromise(2)
})
.then((result)=>{
	console.log(result)
	return getAPromise(3)
})
.catch((err) => {
	console.log(err)
})
.then(() => {
	console.log("This runs anyway")
	return getAPromise(4)
})
.then((result)=>{
	console.log(result)
})


// Unhandled exception

new Promise((resolved, reject)=>{
	reject("Failed!!")
})

setTimeout(() => console.log("Script not died"), 10000)