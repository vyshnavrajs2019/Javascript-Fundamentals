function sep() {console.log("--------------------------------------------------")}

// Variable Scope

// With let
let messageLet = "GLOBAL LET"

{
    // Create a local variable with the same name
    let messageLet = "LOCAL LET"
    console.log(messageLet);
}

console.log(messageLet);


sep()
// with var

var messageVar = "GLOBAL VAR"
console.log(messageVar);

{
    // Affects the global var
    var messageVar = "LOCAL VAR"
    console.log(messageVar);
}

console.log(messageVar);

sep()


{
    // Globally available
    var messageVar2 = "A LOCAL VAR"
    console.log(messageVar2);
    
}

console.log(messageVar2);


sep()
// Variable hoisting

// Testing let

// Raises error hoisting not supported for let
// console.log(testLet);


{
    let testLet = "variable hoisting for let"
}

// Does not throw error because of variable hoisting
console.log(testVar); // undefined


{
    var testVar = "variable hoisting for var"
}

console.log(testVar)

sep()

// Reinitialisation

var testVar = "Re intialised"

console.log(testVar);


// let messageLet = "Re initalised"

// Throws error
// console.log(messgeLet);

sep()


// Nested functions

function user(name){
    function sayHi(){
        console.log(`Hi ${name}`);
        
    }
    sayHi()
}

user("Vyshnav")

sep()

// Closure

function incrBy(count){
    return function(num){
        // count taken from lexical environment
        return num + count 
    }
}


let add5 = incrBy(5)
let add2 = incrBy(2)

console.log(add5(100));
console.log(add2(100));
console.log(add2(10));


function func1(countA){
    return function func2(countB){
        return function func3(countC){
            return countA + countB + countC
        }
    }
}

let val = func1(10)(20)(30)
console.log(val);


sep()

// check whether lexical env are independent or not

function func4(count){
    return function func5(){
        count++
        console.log(count);
        
    }
}


let f4A = func4(100)
let f4B = func4(100)

f4A()
f4A()
// independent
f4B()
f4B()
