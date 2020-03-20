// XMLHttpRequest

function print(...args){ console.log(...args) }

// create XMLHttpRequest object
let xhr = new XMLHttpRequest()

// configure
xhr.open(
	'GET',
	'/sample.json'
)

// set request headers
xhr.setRequestHeader('Content-Type', 'application/json')

// send request
xhr.send()

// set a timeout
// xhr.timeout = 100 // optional

// set response type
// xhr.responseType = 'arraybuffer'
// xhr.responseType = 'json'

// listen to xhr response for events
xhr.onload = function(){
	print("ON LOAD EVENT")
	print(xhr.status, xhr.statusText)
	print(xhr.response)
}

xhr.onerror = function(event){
	print(event)
}

xhr.onprogress = function(event){
	print(event.loaded, event.total)
}

xhr.ontimeout = function(event){
	print(event)
}

// Aborting request
xhr.onabort = function(){
	print('Request aborted')
}
// xhr.abort()


// Upload events
// loadstart – upload started.
// progress – triggers periodically during the upload.
// abort – upload aborted.
// error – non-HTTP error.
// load – upload finished successfully.
// timeout – upload timed out (if timeout property is set).
// loadend – upload finished with either success or error.

xhr.upload.onload = function(){
	print('Upload complete')
}

xhr.upload.onprogress = function(){
	print('Uploading...')
}