// Keyboard Events

let body = document.body

function displayInfo(event){
	body.innerHTML += event.key +', '+ event.code +', '+ event.repeat + '<br/>'
}

body.addEventListener('keydown', displayInfo)
body.addEventListener('keyup', displayInfo)