let obj = {
	name: "Object1",
	age: "1",
	anotherProps: "Yes",
	anObj: {
		hi: 'yes',
		arr: [1,2,3,4,5]
	}
}

let entries = Object.entries(obj)

let newObj = Object.fromEntries(entries)

console.log(newObj)

// still its not deep cloning
newObj.anObj.arr[1] = 1000

console.log(newObj)
console.log(obj)


// keys, values

console.log(Object.keys(obj))
console.log(Object.values(obj))