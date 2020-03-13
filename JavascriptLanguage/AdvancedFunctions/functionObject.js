'use strict';
function sep() {console.log('--------------------------------------------------')}


// Function Object

function myFunc(arg1, arg2, arg3, arg4, ...rest){
    // console.log(aNewProp) // not accessible
    return "Hello World!!"
}

console.log(typeof(myFunc))

sep();

myFunc.aNewProp = "this is a new property"

console.log(myFunc.name) // function name- defualt prop
console.log(myFunc.aNewProp) // extra prop
console.log(myFunc(), myFunc)

sep();
// No function name
let arr = [function(){}]

console.log("Function name is", arr[0].name) // Empty string

sep();
// Length property - number of args excluding the rest param
console.log(myFunc.length)


sep();
// Custom properties

function counter(){
    counter.count ++
    console.log(counter.count)    
}


counter.count = 0
counter()
counter()
counter()


// replacing closure

function incrBy(){
    return function(num){
        return num + incrBy.value
    }
}

incrBy.value = 5
let add5 = incrBy()

console.log(add5(10))

sep();

// Named function expression

let sayHi = function(who){
    console.log('Hi', who)
}

sayHi("vyshnav")

// Recursive call
sayHi = function(who){
    if(who == undefined)
        return sayHi(prompt("Enter a name"))
    console.log('Hi', who)
}

sayHi()

sep()
// What if sayHi func is assigned to another var and set sayHi = null

let newSayHi = sayHi

sayHi = null

newSayHi("vyshnav")
// newSayHi() // raises error

// function name
sayHi = function funcSayHi (who){
    if(who == undefined)
        return funcSayHi(prompt("Enter a name"))
    console.log('Hi', who)
}

let sayHi3 = sayHi

sayHi = null

sayHi3()