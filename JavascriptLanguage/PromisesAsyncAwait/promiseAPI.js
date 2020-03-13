'use strict';

// Promise All

Promise.all([
	fetch("http://localhost:5500/index.html"),
	fetch("http://localhost:5500/style.html"),
	fetch("http://localhost:5500/index2.html"),
])
.then(function(responses){
	responses.map(response => console.log("SUCCESS", response, response.status))
})
.catch(function(err){
	console.log("ERROR", err)
})

// Promise all settled

Promise.allSettled([
	// fetch("http://127.0.0.1:5500/index.html"),
	new Promise((res, rej) => rej("Hoo!!!")),
	new Promise((res, rej) => rej("Hoo!!!"))
])
.then(function(responses){
	console.log(...responses)
})

// Promise race

Promise.race([
	fetch("https://www.facebook.com"),
	fetch("https://www.airbnb.com"),
	fetch("index.html")
])
.then(function(resp){
	console.log("SUCCESS-------------", resp)
})
.catch(function(err){
	console.log("ERROR-----------", err)
})

// Promise.reject

Promise.reject("A rejected promise")
.catch(err => console.log(err))

// Promise.resolve
Promise.resolve("A resolved promise")
.then(resp => console.log(resp))