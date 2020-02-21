// Create object
// 2 methods

// Using constructor syntax
let person = new Object()

person.firstName = "Vyshnav"
person.lastName = "Raj S"
person.age = 21

console.log(person)

// Using object literal
let car = {}
car.wheels = 4
car.stearing = 1
car.brake = "Ok!"
car.fuel = "Full"

console.log(car)


// Computed properties

// let bankName = prompt("Your bank name", "SBI")

// let bank = {
//     [bankName]: true
// }

// console.log(bank)


// Check existence of a key

console.log('firstName' in person) // true
console.log('organisation' in person) // false

// Looping

for(let attr in person){
    console.log(attr, ":", person[attr])
}