// 'use strict';

function sayHi(){
    // this in strict mode refers to undefined
    // non strict mode referes to global object eg: window
    console.log(this)
}

function func1(){
    // console.log(this)
    this.hello = function(){
        console.log("--------------------------")
        console.log(this)
    }
}

function func2(){
    // console.log(this == window)
    let f = new func1()
    f.hello()
}

sayHi()
func2()