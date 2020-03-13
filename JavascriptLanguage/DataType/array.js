let array = [1,2,3]

// Length
console.log(array.length)

// Push pop  - O(1) time complexity
console.log(array.push(10)) // returns length of the array after push operation
console.log(array.pop()) // returns the element poped

// Shift unshift - insert at start of the array  - O(n) time complexity
console.log(array.unshift(0)) //returns the length of the array after unshift
console.log(array.shift()) // return the element removed from the start

console.log([].shift()) // undefined since length is 0

let myarr = array
console.log(myarr === array) // copy by reference

// Loops
for(let i=0; i< array.length; i++){
	console.log(array[i])
}

for(let index in array){
	console.log(index, array[index])
}

for(let element of array){
	console.log(element)
}

array.forEach((value, index, array_) => {
	console.log(value, index, array_)
})

// toString
console.log(array.toString())

// multi dimensional array
let mArray = [
	[1,2,3,4,5],
	[2,3,4,5,6],
	[3,4,5,6,7]
]

console.log(mArray)
console.log(mArray.toString())

console.log(array.reverse()) // reverse inplace
console.log(array.sort((a, b) => -a + b)) // sort inplace
console.log(array.reduce((prev, val) => prev * val))