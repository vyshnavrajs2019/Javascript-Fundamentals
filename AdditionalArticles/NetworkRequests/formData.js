// Form Data

const POST_URL	= 'https://javascript.info/article/fetch/post/user'

form.onsubmit = async function(event){
	event.preventDefault()
	// try out formData methods
	tryFormDataMethods(event)
	let reponse = await fetch(POST_URL, {
		method: 'POST',
		body: event.target
	})
	let result = await reponse.json()
	if(result.ok){
		console.log("User created!!")
	} else {
		console.log(result.status)
	}
}

function tryFormDataMethods({ target: form }){
	// convert it into a form
	let formData = new FormData(form)
	// add a new field and its value to form data
	formData.append('resume', 'This is the resume')
	// check if a field exists
	console.log(formData.has('resume'))
	// delete a field 
	formData.delete('resume')
	// get a field value
	console.log(formData.get('name'))
}