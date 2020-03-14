// Event delegation

function displayMenu(menuType){
	alert(menuType + ' popped up')
}

document.body.addEventListener('click', function(event){
	let target = event.target
	if(target.tagName != 'BUTTON')
		return
	if(target.type != 'button')
		return
	displayMenu(target.innerHTML)
})