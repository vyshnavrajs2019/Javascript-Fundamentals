// Anchors

let str = "This is my string"

// check if string starts with 'This'
console.log(/^this/i.test(str));

// check if string ends with 'string'
console.log(/string$/i.test(str));

// Check full string
// check time is in right format hr:min (04:37)

let correctTime = '12:45'
let incorrectTime = '12:456'

let reg = /^\d\d:\d\d$/
console.log(reg.test(correctTime))
console.log(reg.test(incorrectTime))

