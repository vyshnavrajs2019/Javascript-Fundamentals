// Multiline mode of anchors ^ $, flag "m"

let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log( str.match(/^\d/gm) )

// Searching at line end $

str = `Winnie: 1
Piglet: 2
Eeyore: 3`

console.log( str.match(/\d$/gm) )