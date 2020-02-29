'use strict';

function sep() {console.log('--------------------------------------------------')}

// Class Basics

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    sayHi(){
        return `Hi ${this.fullName()}`
    }

}

let vyshnav = new Person("Vyshnav", "Raj S")
console.log(vyshnav.fullName())
console.log(vyshnav.sayHi())

console.log(typeof Person)

console.log(vyshnav.constructor === Person)

sep();

// Class expression

let classExp = class Test {
    constructor(){}
    static whoAmI(){ console.log(Test) }
}

console.log(classExp)
classExp.whoAmI()
// console.log(Test) // Error - only available inside the class - class name like function name


sep();

// class Test {
//     count = 0
//     incr(){
//         this.count ++
//     }
// }

// let t1 = new Test()
// let t2 = new Test()

// console.log(t1.count, t1.incr(), t1.count)
// console.log(t2.count, t2.incr(), t2.count)


//Getters and Setters

class Vehicle{
    constructor(name){
        this.name = name
    }

    get name(){
        return this._name
    }

    set name(val){
        this._name = val
    }
}

let v1 = new Vehicle("Bus")
console.log(v1.name)
v1.name = "Car"
console.log(v1.name)
