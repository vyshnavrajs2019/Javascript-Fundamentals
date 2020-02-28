
let intro = new Function("name", "age", 'console.log("My name is", name,"and I am", age, "years old.")')

intro("vyshnav", 21)


// Closure

let who = "vyshnav"

let sayHi = function(who){
    return new Function('console.log("Hi", who)') // vyshnav - env is window
}

sayHi("gkcs")()