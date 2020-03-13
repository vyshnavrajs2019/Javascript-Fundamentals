'use strict';

// DOM Attributes and Properties

// DOM properties
Element.prototype.sayHi = function(){
	console.log(`Hi Iam ${this.tagName}`)
}

document.body.sayHi()
document.documentElement.sayHi()
document.head.sayHi()

// HTML Attributes
console.log(elem.type, elem.something); // text undefined
console.log(elem.getAttribute('type'), elem.getAttribute('something'));
// setAttribute
elem.setAttribute('anotherProp', 'Hey the prop is converted to lowercase')
console.log(elem.outerHTML, elem.getAttribute('anotherProp'));
// hasAttribute
console.log(elem.hasAttribute('something'), elem.hasAttribute('noprop'));
// removeAttribute
elem.removeAttribute('something')
console.log(elem.outerHTML)

// Property attribute synchronisation
// attribute => property
elem.type = "email"
console.log(elem.getAttribute('type'));
// property => atttribute
elem.setAttribute('type', 'text')
console.log(elem.type);

// But not for every attribute property
elem.value = "A new value for elem"
console.log(elem.getAttribute('value')); // 'value' and not 'A new value for every attribute property'

// Non standard attribute
console.log(document.querySelectorAll('[show-text]'));
console.log(elem.dataset.purpose);





