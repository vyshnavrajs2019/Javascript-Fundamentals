'use strict';
function sep() {console.log('--------------------------------------------------')}

// Static methods and properties

class Animal{
    static legs = 4
    constructor(name, speed){
        this.name = name
        this.speed = speed
    }
    static compare(animalA, animalB){
        return animalA.speed - animalB.speed
    }
}

class Rabbit extends Animal{
    constructor(name, speed){
        super(name, speed)
    }
}

class Turtle extends Animal{
    constructor(name, speed){
        super(name, speed)
    }
}

let rabbit = new Rabbit("White Rabbit",  50)
let turtle = new Turtle("Tutle", 5)

let animals = [rabbit, turtle]

animals.sort(Animal.compare)

console.log(animals)

sep();

console.log(Rabbit.prototype.__proto__ === Animal.prototype)
console.log(Rabbit.__proto__ === Animal)


console.log(Rabbit.legs)
console.log(Animal.legs)

console.log(rabbit.legs) // undefined - its a class property
console.log(rabbit.compare) // undefined - its a class method