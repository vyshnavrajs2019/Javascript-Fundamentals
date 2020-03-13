'use strict';

let timerIdA = setTimeout(function(phrase, who){
    console.log(phrase, who)
}, 2000, "Hello", "Vyshnav")

console.log(timerIdA)

// clearTimeout
// setTimeout(() => clearTimeout(timerIdA), 1000)

let timerIdB = setInterval(function(phrase, who){
    console.log(phrase, who)
}, 2000, "Hello", "Vyshnav")

setTimeout(() => clearInterval(timerIdB), 11000)

console.log(timerIdB)

// Nested setTimeout

setTimeout(function(){
    console.log("Finished 1")
    setTimeout(function(){
        console.log("Finished 2")
    }, 2000)
}, 2000)


// zero delay - not exactly zero executed ones the script executes
setTimeout(() => console.log('OK!!!'), 0)

console.log("Script finished executing")