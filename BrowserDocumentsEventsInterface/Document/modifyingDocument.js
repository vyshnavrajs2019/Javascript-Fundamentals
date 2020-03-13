'use strict';

// Create an element
let div = document.createElement("div")
let textNode = document.createTextNode("A Text Node")

div.className = 'mydiv'
div.innerHTML = '<strong>Hello All</strong>'

// Insertion
document.body.append(div)
document.body.prepend(div)
elem.before(div)
// elem.replaceWith(div)
elem.after(div)

// insertAdjacentHTML/Text/Element
let beforeBegin	= '<strong>Before Begin</strong>'
let beforeEnd	= '<strong>Before End</strong>'
let afterBegin	= '<strong>After Begin</strong>'
let afterEnd	= '<strong>After End</strong>'

span2.insertAdjacentHTML('beforebegin', beforeBegin)
span2.insertAdjacentHTML('afterbegin', afterBegin)
span2.insertAdjacentHTML('beforeend', beforeEnd)
span2.insertAdjacentHTML('afterend', afterEnd)

// Node removal

setTimeout(() => span2.remove(span2.firstChild), 3000)

// clone nodes

document.body.append(document.querySelector('table').cloneNode(true)) // true deep clone; false shallow clone

// DocumentFragment - a wrapper
let aDocFrag = new DocumentFragment()
for(let i=0; i< 5; i++){
	let li = document.createElement("li")
	li.innerHTML = i+1
	aDocFrag.append(li)
}

let ul = document.createElement("ul")
document.body.appendChild(ul)

ul.append(aDocFrag)

// document.write

setTimeout(() => document.write("Erased"), 4000)