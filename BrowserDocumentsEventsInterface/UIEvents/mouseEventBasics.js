// Mouse Events Basics

function writeToDiv(event){
	div1.innerHTML += '<p>Type: ' + event.type + ' | Which: ' + event.which + '</p>'
}

button1.addEventListener('mousedown', writeToDiv)
button1.addEventListener('mouseup', writeToDiv)
button1.addEventListener('mouseover', writeToDiv)
// button1.addEventListener('mousemove', writeToDiv)
button1.addEventListener('mouseout', writeToDiv)
button1.addEventListener('mouseleave', writeToDiv)
button1.addEventListener('click', writeToDiv)
button1.addEventListener('dblclick', writeToDiv)

clear.onclick = function(){
	div1.innerHTML = ''
}

// Modifiers

button2.onclick = function(event){
	if(event.shiftKey && event.ctrlKey)
		alert("You did!!")
}