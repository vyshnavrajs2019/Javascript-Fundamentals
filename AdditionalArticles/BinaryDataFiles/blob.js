// Blob

function print(...args){ console.log(...args) }

let blob = new Blob([new Uint8Array([72, 101, 108, 108, 111]), ' ', 'world'], {type: 'text/plain'})

print(blob.slice())

// Blob as URL
let a = document.createElement("a")
a.download = "hello-world.txt"
a.innerHTML = "Download Now"
a.href = URL.createObjectURL(blob)

document.body.append(a)
// can download only once
a.onclick = function(){
	setTimeout(()=>URL.revokeObjectURL(a.href))
	alert(a.href)
}