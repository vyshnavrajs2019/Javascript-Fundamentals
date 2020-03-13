'use strict';

function sep() {console.log('--------------------------------------------------')}

// Function prototype

let animal = {
    eats: true,
    walk(){
        console.log(this.name + " walking...")
    }
}

function Rabbit(name){
    this.name = name
}

Rabbit.prototype = animal

let rabbit = new Rabbit("White rabbit")

console.log(rabbit.eats)
rabbit.walk()

sep()

// Default function prototype

function func(){}

console.log(func.prototype)
console.log(func.prototype.constructor === func)

sep();

// Create a new object of the same kind from another object

function Vehicle(name){
    this.name = name
}

Vehicle.prototype.model = function(){
    console.log(this.name)
}

let creta = new Vehicle("Creta")
let scross = new creta.constructor("Scross")

creta.model()
scross.model()