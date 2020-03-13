'use strict';

// className
console.log(span.className);
span.className = "span sibling-span-1 a-new-class"
console.log(span.className);

// classList
span.classList.add('another-new-class')
span.classList.remove('a-new-class')
span.classList.toggle('another-new-class')
console.log(span.classList.contains('span'));
console.log(span.outerHTML);

// Element Style
document.body.style.backgroundColor = 'grey'
// Full rewrite
document.body.style.cssText = 'background-color: red; color: white;'
console.log(document.body.style.cssText);

// Computed styles
console.log(span.style.margin) // doesnot print 1em
let style = getComputedStyle(span)
console.log(style.margin); // 1em =16px
