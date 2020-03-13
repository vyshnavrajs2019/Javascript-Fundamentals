'use strict';

// DOM Navigation
console.log(document.body.childNodes) // All child nodes not child elements
console.log(document.body.firstChild) // first child node
console.log(document.body.lastChild) // last child node

console.log(document.querySelector("div.outer1").childNodes)


// setInterval(function(){
// 	let doc = "<div class='interval-node'>Hello</div>"
// 	document.querySelector("div.outer1").innerHTML += (doc)
// }, 2000) // live updates

// sibling
// nextSibling
let span = document.querySelector("span.sibling-span-1")

console.log(span)
console.log(span.nextSibling);
console.log(span.nextSibling.nextSibling);
console.log(span.nextSibling.nextSibling.nextSibling);
console.log(span.nextSibling.nextSibling.nextSibling.nextSibling); // null
console.log(span.previousSibling);
console.log(span.parentNode)

// Element only navigation
let outer2 = document.querySelector("div.outer2")
console.log(outer2.children) // collection does not include text nodes and comment nodes

console.log(span.nextElementSibling)
console.log(span.nextElementSibling.nextElementSibling) // null
console.log(span.previousElementSibling); // null
// parentElement
console.log(span.parentElement)


// Table
let t = document.querySelector("table")
console.log(t.rows)
console.log(t.tBodies);
console.log(t.tHead);
console.log(t.rows[0].cells);


