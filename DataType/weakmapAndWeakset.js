let map = new WeakMap()

let john = {
	name: "John",
	age: 21
}

let nafi = {
	name: "Nafi",
	age: 21
}

// Set key, value
map.set(john, "Nissan")
map.set(nafi, "Freelancer")

// Get value form weak map
console.log(map.get(john))

// delete item
console.log(map.delete(nafi)) // return true / false depending on whether key was present or not

console.log(map.get(nafi)) // undefined

john = null
console.log(map.get(john)) // undefined

john = {name: 'John'}
map.set(john, 'Nissan')
console.log(map.has(john))

// Use case

// Caching

let cache = new WeakMap()

function search(obj){
	console.log('Searching....')
	if(!cache.has(obj)){
		let wait = 0
		while(wait < 1000000000)
			wait += 1
		let result = Math.random() * wait
		cache.set(obj, result)
	}
	console.log('Found the result')
	return cache.get(obj)
}


let gk = {
	name: 'GK'
}

let km = {
	name: 'KM'
}

console.log(search(gk), 'first time')
console.log(search(gk), 'second time')
console.log(search(km), 'first time')
console.log(search(km), 'second time')


// Weak Set

let set = new WeakSet()

// add items
set.add(gk)
set.add(km)

// check item exists
console.log(set.has(gk))
console.log(set.has(km))

// delete item
set.delete(gk)
console.log(set.has(gk))