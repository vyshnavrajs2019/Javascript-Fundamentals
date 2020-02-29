'use strict';

function sep() {console.log('--------------------------------------------------')}

// Prototype & Inheritance

let animal = {
    eats: true,
    walk(){
        console.log('walking...')
    }
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal

console.log(rabbit.jumps, rabbit.eats)

rabbit.walk()

sep();

// Writing to prototype using accessor properties

let user = {
    firstName: "Corey",
    lastName: "Schafer",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(" ", 2)
    }
}

let corey = {
    __proto__: user,
    isAdmin: true
}

console.log(corey.fullName)
corey.fullName = "Corey Schafer MS"
console.log(corey.fullName)

sep();

// state

let website = {
    site: "website",
    visitors: 0,
    get traffic(){
        return this.visitors
    },
    visit(){
        this.visitors ++
    }
}

let google = {
    site: "Google",
    __proto__: website,
}

let facebook = {
    site: "Facebook",
    __proto__: website
}

google.visit()
google.visit()

facebook.visit()
facebook.visit()
facebook.visit()

// Keep different states
console.log(google.traffic, facebook.traffic)

sep();

// for...in loop
for(let key in google){
    if(google.hasOwnProperty(key))
        console.log('Own prop')
    else
        console.log('Inherited from proto')
    console.log(key) // Keys from prototype included
}

console.log(Object.keys(google)) // Own keys only