// Local storage

// set item
localStorage.setItem('name', 'vyshnav')

// set item with value an object
localStorage.setItem('aboutMe', JSON.stringify({
	name: 'vyshnav',
	age: 22,
	collge: 'TKMCE'
}, null, 4))

// get item
console.log(localStorage.getItem('aboutMe'))

// delete item
localStorage.removeItem('name')

// set item
localStorage.setItem('name', 'vyshnav')

// iterate
let keys = Object.keys(localStorage)
for(let key of keys){
	console.log(key, "=>", localStorage[key])
}

console.log("---------------------")

// key index
let key = localStorage.key(0)
console.log(key, localStorage[key])

// length
console.log(localStorage.length)

// clear
localStorage.clear()
console.log(localStorage.length)



// Session storage

// set item
sessionStorage.setItem('name', 'vyshnav')

// set item with value an object
sessionStorage.setItem('aboutMe', JSON.stringify({
	name: 'vyshnav',
	age: 22,
	collge: 'TKMCE'
}, null, 4))

// get item
console.log(sessionStorage.getItem('aboutMe'))

// delete item
sessionStorage.removeItem('name')

// set item
sessionStorage.setItem('name', 'vyshnav')

// iterate
keys = Object.keys(sessionStorage)
for(let key of keys){
	console.log(key, "=>", sessionStorage[key])
}

console.log("---------------------")

// key index
key = sessionStorage.key(0)
console.log(key, sessionStorage[key])

// length
console.log(sessionStorage.length)

// clear
sessionStorage.clear()
console.log(sessionStorage.length)


window.onstorage = function(event){
	console.log(
		'Type',
		event.type,
		'Key',
		event.key,
		'New value',
		event.newValue,
		'Old value',
		event.oldValue,
		'Url',
		event.url,
		'storageArea',
		event.storageArea
	)
}