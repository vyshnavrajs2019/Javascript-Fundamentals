// Text Decoder

function print(...args){ console.log(...args) }

let decoder = new TextDecoder()
let arr = new Uint8Array([72, 101, 108, 108, 111])
print(decoder.decode(arr)) // Hello

// Text Encoder

let encoder = new TextEncoder()
let arr2 = encoder.encode("Hello")
print(arr2)
// encodeInto
let arr4 = new Uint8Array(new ArrayBuffer(5))
encoder.encodeInto("Hello", arr4)
print(arr4)
print(decoder.decode(arr4))