'use strict';

function sep() {console.log('--------------------------------------------------')}

function callback(){
	// do some taks
	console.log("Callback executed")
}

setTimeout(callback, 1000)

sep()

// Callback in Callback

setTimeout(function(){
	console.log("callback 1")
	setTimeout(function(){
		console.log("callback 2")
		setTimeout(function(){
			console.log("callback 3")
			setTimeout(callback, 1000)
		}, 1000)
	}, 1000)
}, 1000)