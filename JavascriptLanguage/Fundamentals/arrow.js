// Arrow functions

let sayHello = () => console.log("Hello") // Here the value of console.log is returned

// Multi line function
let sayBye = () => {
    console.log("Bye")
}

// Single argument
let singleArgFunc = myArg => console.log("The arg is " + myArg)

// Multiple args
let multiArgFunc = (arg1, arg2, ...moreArgs) => {
    console.log(arg1, arg2, ...moreArgs)
}

sayHello()
sayBye()

singleArgFunc(12)
multiArgFunc(21,31,45,5,5,3,3,3,3,3)