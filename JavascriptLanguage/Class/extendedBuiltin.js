'use strict';

function sep() {console.log('--------------------------------------------------')}

// Extended Builtin Classes

class PowerArray extends Array{
    constructor(...args){
        super(...args)
    }
    isEmpty(){
        return this.length == 0
    }
}

let parr = new PowerArray(1,2,3,4)
console.log(parr.isEmpty())

// map, filter, etc.. also returns arr of same type

let newArr = parr.filter((val, idx) => val == idx + 1)
console.log(newArr.__proto__ === parr.__proto__)

// To change this behaviour use Symbol.species

class AnotherPowerArray extends Array{
    constructor(...args){
        super(...args)
    }

    isEmpty(){
        return this.length == 0
    }

    static get [Symbol.species](){
        return Array
    }
}

let another = new AnotherPowerArray(1,2,3,4,5,6)

let outArr = another.filter(val => val % 2 == 0)

console.log(outArr.__proto__ === Array.prototype)
