// let keyword
let message

message = "This is a dummy text"

let myNewInt = 500

console.log(message)

console.log(myNewInt)

// const keyword
const name = "S Vyshnav Raj"

console.log(name)

// value of const can't be modified
// name = "Vyshnav Raj S" // does not work

// var keyword

var myVar = "Hello. How are you?"

console.log(myVar)

var myFloat = 23.8956

console.log(myFloat)

// Scope of variables

// let and const scope

{
    let myName = "Vyshnav Raj S"
    const age = 21
    console.log(myName, "is", age, "years old.")
}

/*
    Does not work
    let and const have block scope
*/
// console.log(myName, "is", age, "years old.")


// var keyword has global scope
{
    var myFavNum = 13
    console.log("My favourite number is", myFavNum)
}

console.log("My favourite number is", myFavNum)

function checkingVarScope(){
    var myLap = "HP"
    console.log("My laptop is", myLap)
}

// But not visible out of function block
// console.log("My laptop is", myLap)