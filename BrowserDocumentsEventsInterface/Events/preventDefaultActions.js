// Prevent Default Browser Actions

function handleClick(event){
	let input = event.target.previousElementSibling
	let query = input.value
	alert('Query: ' + query)
	let result = confirm("Block google search?")
	if(result === true)
		event.preventDefault()
}