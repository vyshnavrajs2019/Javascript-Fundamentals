// File
function print(...args){ console.log(...args) }

let f = null;

file.onchange = function(){
	f = file.files[0]
	print('File name', f.name)
	print('Last modified', file.lastModified)

	// File reader
	let reader = new FileReader(f)
	// reader.readAsText(f)
	reader.readAsArrayBuffer(f)


    // loadstart – loading started.
    // progress – occurs during reading.
    // load – no errors, reading complete.
    // abort – abort() called.
    // error – error has occurred.
    // loadend – reading finished with either success or failure.
	
	reader.onloadstart = function(event){ print(event.type) }
	reader.onprogress = function(event){ print(event.type) }
	reader.onloadend = function(event){ print(event.type) }

	reader.onload = function(){
		print(reader.result)
	}

	reader.onerror = function(){
		print(reader.error)
	}
}