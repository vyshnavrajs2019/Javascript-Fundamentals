'use strict';

function sep() {console.log('--------------------------------------------------')}

let promise = new Promise(function(resolve, reject){
	setTimeout(function(){
		let num = Math.random()
		if(num >= 0.5)
			resolve("Yes >= 0.5")
		reject("No < 0.5")
	}, 1000)
})

promise
.then(function(result){
	console.log(result)
	return "Chain 1"
})
.then(function(result){
	console.log(result)
	return "Chain 2"
})
.then(function(result){
	console.log(result)
	return "Chain 3"
})
.catch(function(result){
	console.log(result)
})

sep();

// Returning promises

let promise2 = new Promise(function(resolve, reject){
	setTimeout(function(){
		let num1 = Math.random()
		let num2 = Math.random()
		if(num1 > num2)
			resolve(`Yes ${num1} > ${num2}`)
		reject(`No ${num1} <= ${num2}`)
	}, 1000)
})

promise2
.then(function(result){
	console.log(result)
	return new Promise(function(resolve, reject){
		setTimeout(function(){
			let num1 = Math.random()
			let num2 = Math.random()
			if(num1 > num2)
				resolve(`Yes ${num1} > ${num2}`)
			reject(`No ${num1} <= ${num2}`)
		}, 1000)
	})
})
.then(function(result){
	console.log(result)
})
.catch(function(result){
	console.log("Oh!!!", result)
})

sep();

// Fetch

fetch("http://127.0.0.1:5500/index.html")
.then(function(response){
	return response.text()
})
.then(function(content){
	console.log(content)
})
.catch(function(err){
	console.log("Failedddd")
})