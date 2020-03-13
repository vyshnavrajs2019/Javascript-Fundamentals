'use strict';

// DOM Node Properties

// DOM Node classes
console.log(span.constructor.name); // HTMLSpanElement
console.log(document.body.constructor.name); // HTMLBodyElement

let bodyChildNodes = document.body.childNodes
console.log(bodyChildNodes);

let comment = bodyChildNodes[1]
let text    = bodyChildNodes[2]
let element = bodyChildNodes[3]

console.log(element.nodeType, text.nodeType, comment.nodeType, document.nodeType)

// node name and tag name
console.log(element.nodeName, text.nodeName, comment.nodeName, document.nodeName);

console.log(element.tagName, text.tagName, comment.tagName, document.tagName);

// innerHTML
span.innerHTML = "This is a normal text and <b>Hi I am within bold tag</b>"

// outerHTML
link.outerHTML = "<span id='span2'>I just replaced</span>"
// console.log(link);
console.log(span2.outerHTML)

// nodeValue or data

console.log(comment.nodeValue);
console.log(comment.data);

// textContent
console.log(document.body.textContent);
// console.log(span.nodeValue); // work for comment node and text node


// hidden property
setInterval(function(){
	span2.hidden = !span2.hidden
}, 2000)


// More properties
console.log(elem.value);
console.log(elem.id);
console.log(elem.type);



