// Cross Window Communication

function print(...args){ console.log(...args) }

print(iframe.contentWindow)
print(iframe.contentWindow.document) 
print(iframe.contentDocument === iframe.contentWindow.document)

// print('GOOGLE', iframe1.contentWindow)
// print('GOOGLE', iframe1.contentWindow.document)
// print('GOOGLE', iframe1.contentWindow.document.body) // undefined

// wrong document
let oldDoc = iframe.contentDocument
iframe.onload = function(){
	let newDoc = iframe.contentDocument
	print('OldDoc == NewDoc', oldDoc == newDoc)
	// post messages

print('TOP', iframe.contentWindow.top == window);

sender.addEventListener('change', function(){
	iframe.contentWindow.postMessage(sender.value, '*')
})}
