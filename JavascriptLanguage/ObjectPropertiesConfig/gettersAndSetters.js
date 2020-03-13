'use strict';
function sep() {console.log('--------------------------------------------------')}


var person = {
    firstName: "Vyshnav",
    lastName: "Raj S",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(name){
        name = name.split(" ")
        this.firstName = name[0]
        this.lastName = name[1]
    }
}

console.log(person.fullName)
person.fullName = "Gokul Krishna"
console.log(person.fullName)

sep()

person = Object.defineProperty(person, 'styleName', {
    get() {
        return `<h1>${this.firstName} ${this.lastName}</h1>`;
    },

    set(value) {
        // Do nothing
    }
});

console.log(person.styleName)
