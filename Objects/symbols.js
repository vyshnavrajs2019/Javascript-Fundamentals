'use strict';

let id1 = Symbol("id")
let id2 = Symbol("id")

// Check equaliy
console.log(id1 == id2)

// Get the symbol description
console.log(id1.description) // output is undefined in nodejs console

// Global symbol
let id = Symbol.for("id") // Symbol is created
let idAgain = Symbol.for("id") // symbol with key id is retrieved from global symabol

// Check if they are the same
console.log(id === idAgain)

// Get the key from the symbol
let key = Symbol.keyFor(id)

console.log(key)