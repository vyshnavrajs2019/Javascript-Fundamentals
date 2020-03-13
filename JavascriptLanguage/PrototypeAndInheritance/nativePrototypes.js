'use strict';

function sep() {console.log('--------------------------------------------------')}

// Native prototypes

let obj = {}

console.log(obj.constructor === Object.prototype.constructor)
console.log(obj.__proto__ === Object.prototype)

console.log(Object.prototype.__proto__) // no more prototype

sep();

// Array prototypes

let array = [1,2,3,4]

console.log(array.__proto__ === Array.prototype)
console.log(array.__proto__.__proto__ === Object.prototype)
console.log(array.__proto__.__proto__.__proto__)


sep();
// Changing native prototypes

// Adding a show method to strings

String.prototype.makeHTMLHeading = function(){
    console.log("<h1>" + this.toUpperCase() + "</h1>")
}

"boom!".makeHTMLHeading()

"hey there".makeHTMLHeading()

sep();

// Borrowing

String.prototype.join = Array.prototype.join

let string = "hello world!!"

console.log(string.join("->"))