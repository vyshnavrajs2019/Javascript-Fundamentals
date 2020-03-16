// Events Change Input

function print(...args){
	console.log(...args)
}

input.oninput = function(){
	print(this.value)
}

input.onchange = function(){
	print(this.value)
}

select.onchange = function(){
	print(this.value)
}

// Cut Copy Paste

input.oncut = input.onpaste = input.oncopy = function(event){
	print(event.type)
	print(event.clipboardData.getData('text/plain'))
}