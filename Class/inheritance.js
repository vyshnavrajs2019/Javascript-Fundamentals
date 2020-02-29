'use strict';

function sep() {console.log('--------------------------------------------------')}

// Class inheritance

class Animal{
    constructor(name){
        this.name = name
    }
    run(){
        console.log(this.name + " running...")
    }
    stop(){
        console.log(this.name + " stopped running")
    }
    hide(){
        console.log(this.name + " cannot hide.")
    }
}

class Rabbit extends Animal{
    constructor(name){
        super(name)
        this.jumps = true
    }
    hide(){
        console.log(this.name + " can hide")
    }
    jump(steps){
        console.log(this.name + " jumped " + steps + " steps.")
    }
}


class Deer extends Animal{
    constructor(name){
        super(name)
    }
}

let rabbit = new Rabbit("White Rabbit")
let deer = new Deer("Deer")

// Rabbit class method
// Only rabbit can jump
rabbit.jump(3)

// Inheritance
rabbit.run()
rabbit.stop()
deer.run()
deer.stop()

// Overiding
deer.hide()
rabbit.hide() 