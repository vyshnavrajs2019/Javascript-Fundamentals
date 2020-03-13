'use strict';

function sep() {console.log('--------------------------------------------------')}

// Protected props and private props

class CoffeeMachine{
    #waterLimit = 'private' // private prop
    waterLimit = 'public' // public prop
    _waterLimit = 'protected' // protected
    constructor(){}
    print(){
        console.log('Parent class')
        console.log(this.#waterLimit, this.waterLimit, this._waterLimit)
    }
}

class ChildCoffeeMachine extends CoffeeMachine{
    constructor(){
        super()
    }
    print(){
        console.log('Derived class')
        console.log(this.waterLimit, this._waterLimit)
        super.print()
    }
}

let cm = new ChildCoffeeMachine()
cm.print()