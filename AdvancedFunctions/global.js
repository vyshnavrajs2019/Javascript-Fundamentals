'use strict';
function sep() {console.log('--------------------------------------------------')}

var varUsingVar = "This is var keyword"

console.log(globalThis.varUsingVar) // node - undefined | browser - prints the value

let varUsingLet = "This is let keyword"

console.log(globalThis.varUsingLet) // undefined

