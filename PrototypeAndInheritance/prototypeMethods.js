'use strict';

function sep() {console.log('--------------------------------------------------')}

// Prototype methods

// Object.create

let animal = {
    eats: true
}

let rabbit = Object.create(animal, {
    jumps: {
        value: true,
        enumerable: true,
        configurable: true
    }
})

// console.log(rabbit)

for(let key in rabbit){
    console.log(key, rabbit[key])
}

sep();

// Object.getPrototypeOf

console.log(Object.getPrototypeOf(rabbit) === animal)

// Object.setPrototypeOf

Object.setPrototypeOf(rabbit, {})

console.log(rabbit.constructor === Object.prototype.constructor)

sep();

// How to use __proto__ as a key

let dict = Object.create(null)

dict['name'] = "vyshnav"
dict['__proto__'] = "yeah!!!"

console.log(dict.name)
console.log(dict.__proto__)

// console.log(dict.toString()) // Error

console.log(Object.keys(dict))