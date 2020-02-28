'use strict';
function sep() {console.log('--------------------------------------------------')}


var fruits = [
    'Apple',
    'Orange',
    'Mango',
    'Grape',
    'Watermelon'
]

function task(){
    let i = 0
    while(i < 10000000000)
        i += 1
    let index = Math.round(Math.random() * 5)
    let fruit = fruits[index]
    return fruit
}

function enableCache(func){
    let cache = new Map()
    return function(name){
        if(cache.has(name))
            return cache.get(name)
        else{
            let fruit = func()
            cache.set(name, fruit)
            return fruit
        }
    }
}

let cachedTask = enableCache(task)

// console.log(cachedTask("vyshnav"))
// console.log(cachedTask("gokul"))
// console.log(cachedTask("vyshnav"))
// console.log(cachedTask("vyshnav"))
// console.log(cachedTask("gokul"))
// console.log(cachedTask("vyshnav"))

sep()

// Call function

var person = {
    name: "Vyshnav",
    sayHi(){
        console.log("Hi", this.name)
    }
}

person.sayHi() // Hi vyshnav

let func = person.sayHi
// func() // Error this is undefined
func.call(person)

sep();

// Apply

var applyObj = {
    phrase: "Args:",
    sayHi(...args){
        console.log(this.phrase, ...args)
    }
}

applyObj.sayHi.apply(applyObj, [1,2,3,4,5,6,7,8,9])

sep();

// Bind

let bound = applyObj.sayHi.bind(applyObj)

bound("arg1", "arg2", "arg3")

// Can bind arguments as well
let bound2 = applyObj.sayHi.bind(applyObj, "arg1", "arg2")
bound2()