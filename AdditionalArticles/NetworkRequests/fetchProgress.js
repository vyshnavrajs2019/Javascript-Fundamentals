// Fetch Progress

const URL_TO_LOAD = 'crawler.mkv'

async function loadURL(){
	let response = await fetch(URL_TO_LOAD)
	let reader = response.body.getReader()
	let totalLength = +response.headers.get('Content-Length')
	let recievedTotal = 0
	// infinite loop
	while(true){
		const { done, value } = await reader.read()
		if(done)
			break
		recievedTotal += value.length
		// percentage loaded
		text.innerHTML = ((recievedTotal / totalLength) * 100).toFixed(2) + "%"
	}
} 

loadURL()