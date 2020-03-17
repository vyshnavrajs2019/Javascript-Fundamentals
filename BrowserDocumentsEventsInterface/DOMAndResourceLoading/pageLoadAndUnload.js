function print(...args){
	console.log(...args)
}

function response(event){
	print(event.type)
}

// DOMContentLoaded
document.addEventListener('DOMContentLoaded', response)
// Load
window.addEventListener('load', response)


// readyState
document.onreadystatechange = function(event){
	print(document.readyState)
}