// Logical operations
// Conditional operators

const isGood = true
const isExtraordinary = true

if(isGood && isExtraordinary){
    console.log("He is a nice guy with extra ordinary skills")
} else if(isExtraordinary){
    console.log("But he is extra ordinary")
} else if(isGood){
    console.log("He is a nice person")
} else {
    console.log("He is neither good nor extraordinary")
}


// Examples of short circuiting
alert(2 || 3)
alert(0 && 1)