// Array Buffer

function print(...args){ console.log(...args) }

let buffer = new ArrayBuffer(16) // 16 bytes fixed size
print(buffer.byteLength)

// create view object
let view = new Uint16Array(buffer)
print(Uint16Array.BYTES_PER_ELEMENT)
print(view.byteLength)
print(view.length)

// write into buffer
view[0] = 2550
view[2] = 4000

// iteration
for(let num of view){
	print(num)
}

print("-------------------")
// Typed Array (Uint8Array, Uint16Array, ...) common term

// passing array
let arr1 = new Uint8Array([1,2,3,4,5,6])
// print(arr8[0])
for(let num of arr1){
	print(num)
}
print(arr1.buffer)

print("-------------------")
// passing an object
let arr2 = new Uint8Array({
	'0': 'A',
	'1': 'b'
})

print(arr2.length)
print(arr2.buffer)
for(let num of arr2){
	print(num)
}

print("-------------------")
// passing another typed array
let arr3 = new Uint8Array(new Uint16Array([256,257,3,4,5,6]))
for(let num of arr3){
	print(num)
}
print(arr3.BYTES_PER_ELEMENT)
print(arr3.byteLength)
print(arr3.buffer)

print("-------------------")
// TypedArray methods
let arr4 = new Uint8Array([0,0,0,0,0])
// set method
arr4.set([10,20,30], 2)
for(let num of arr4)
	print(num)
//subarray
print(arr4.subarray(1,3))

// Data view
let dataView = new DataView(new Uint8Array([255,256,257,258]).buffer)
print(dataView.getUint8(1), dataView.getUint16(1))