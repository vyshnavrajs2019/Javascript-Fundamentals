let arr = [1,2,3,4,5,6,7,8]

// Splice
// remove item at index
console.log(arr.splice(1, 1)) // return an array of deleted items
console.log(arr)
// remove 2 items starting from index
console.log(arr.splice(1, 2)) // returns the deleted items array
console.log(arr)
// insert number or numbers
arr.splice(1, 0, ...[10,11,12])
console.log(arr)

// Slice
console.log(arr.slice(1, 5))
console.log(arr.slice(-5)) // till the end

// Concat
console.log(arr.concat([20,30,40], [50,60,70])) // does not modify the array in place
console.log(arr.concat(...[-1,-2,-3]))


// Search
console.log(arr.indexOf(10)) // returns the index
console.log(arr.lastIndexOf(100)) // no such item returns -1
console.log(arr.indexOf(12, 2)) // 2nd arg specifies the start index
console.log(arr.includes(10)) // returns true or false

console.log(arr)

// Find

console.log(
	arr.find((item, index) => {
		console.log(item, index)
		if(item == 10)
			return true // this returns the item
	})
)

// find index
console.log(
	arr.findIndex((item) => {
		if(item == 10)
			return true
	})
)

// Filter
console.log(
	arr.filter((item, idx) => {
		if(idx + 1 == item)
			return true
	})
)

// Map
console.log(
	arr.map((item) => {
		return item * item
	})
)

// Join
console.log(
	arr.join("=>")
)

// Split
console.log(
	"hello world".split("", 5)
)

// Array.isArray

console.log(
	Array.isArray([]),
	Array.isArray([1,2,3]),
	Array.isArray({}),
	Array.isArray("hello".split(""))
)