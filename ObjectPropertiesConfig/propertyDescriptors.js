'use strict';
function sep() {console.log('--------------------------------------------------')}


var person = {
    firstName: "Vyshnav",
    lastName: "Raj S",
    age: 21,
    sayHi(){
        return "Hi " + this.fristName
    }
}


// Get individual property descriptor
let descr = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log(descr)

sep();

// Get the property descriptors
let descrs = Object.getOwnPropertyDescriptors(person)
console.log(descrs)

sep();

// Define a new property
Object.defineProperty(person, "isWorking", {
    value: true,
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(person)

sep();

var aNewObj = Object.defineProperties({}, {
    title: {
        value: "A brand new title!!",
        configurable: true,
        enumerable: true, // if false wont get printed in the console
        // writable: true
    },
    description: {
        value: "A short description about the title",
        configurable: true,
        enumerable: true,
        writable: true
    }
})

console.log(aNewObj)

console.log(Object.getOwnPropertyDescriptor(aNewObj, 'title'))

sep();

// Modifying property with writeble: false
// aNewObj.title = "11111111111111111" // Error

// Enumerable to false
Object.defineProperty(aNewObj, 'title', {
    value: 'Updated title!!',
    enumerable: false
})

console.log(aNewObj) // title not printed

sep();

// configurable to false
Object.defineProperty(aNewObj, 'title', {
    configurable: false,
    enumerable: true
})

console.log(aNewObj)
// Try to delete the property
// delete aNewObj.title // Error