
let obj = {
    name: "vyshnav",
    age: 21
}

console.log(obj.toString()) // [object Object]
console.log(obj.valueOf()) // return the object back

// Custom primitive value depending on the context

obj = {
    name: "vyshnav",
    age: 21,
    [Symbol.toPrimitive](hint){
        if(hint == "string"){
            return this.name
        } else if(hint == "number"){
            return this.age
        } else{
            return this.age + 10
        }
    }
}

console.log(obj + 23) // hint is default
alert(obj) // hint is string
console.log(obj - 10) // hint is number since the mathematical operator is not +