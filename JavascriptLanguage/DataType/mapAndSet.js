'use strict';

let map = new Map([['name', 'vyshnav'], ['age', 21], ['college', 'tkmce']])

// Loop
for(let [key, val] of map.entries()){
	console.log(key, val)
}

// Get the name from map
console.log(map.get('name'))

// Set the working property
map.set('working', true)

console.log(map)

// Get the size of map
console.log(map.size)

// Check if a key exists
console.log(map.has('working'))

// delete particular key from map
console.log(map.delete('name')) // return true/false depending on whether key was present or not
console.log(map)

// clear the map
map.clear()

console.log(map)

// Chaining
map.set("name", "vyshnav")
.set("age", 21)
.set("college", "TKMCE")

console.log(map)


// iteration

for(let key of map.keys()){
	console.log(key, map.get(key))
}

for(let val of map.values()){
	console.log(val)
}

for(let [key, val] of map.entries()){
	console.log(key, "=>", val)
}

console.log('----------------------------------')

map.forEach((val, key, map_) => {
	console.log(val, key, map_)
})

// Copy key, val from a regular object
let obj = {
	name: "vyshnav",
	age: 21
}

let vyshnav = new Map(
	Object.entries(obj)
)

console.log(vyshnav)

// Creating a regular obj from entries
// let vyshnavObj = Object.fromEntries(map.entries()) // works in browser

// console.log(vyshnavObj)



// Set
let set = new Set(['new york', 'san jose', 'palo alto'])
set.add('melno park')
console.log(set)

// Delete an item
set.delete('san jose')
console.log(set)

set.delete('invalid item')
console.log(set)

// Check if item exists
console.log(set.has('melno park'))

// Get the size
console.log(set.size)

// iterate
for(let item of set){
	console.log(item)
}


console.log('-----------------------------------')
for(let item of set.entries()){
	console.log(item)
}
console.log('-----------------------------------')
for(let item of set.values()){
	console.log(item)
}
console.log('-----------------------------------')
for(let item of set.keys()){
	console.log(item)
}
console.log('-----------------------------------')
set.forEach((val, valueAgain, set_) => {
	console.log(val, valueAgain, set_)
})

// clear the set
set.clear()
console.log(set)