// Form submit

form.onsubmit = function(event){
	if(query.value.length < 5){
		alert("Your query must have atleast 5 characters")
		event.preventDefault()
	} else {
		alert("Leaving the website...")
	}
}