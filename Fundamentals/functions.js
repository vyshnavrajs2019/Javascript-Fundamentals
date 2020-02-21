
let tired = true
let readToPlay = false

function haveACofee(){
    console.log("Cofee please....")
    tired = false
    readToPlay = true
}

function shallWePlay(){
    if(tired){
        haveACofee()
    }
    return readToPlay
}

console.log("Shall we paly cricket: ", shallWePlay() ? "Yep": "No")

// Default parameters

function todaysSpecial(specialFood = "Kuzhimandhi"){
    console.log("Chef: " + specialFood)
}

console.log("Me: Todays special?")
todaysSpecial()
console.log("Me: Todays special?")
todaysSpecial("CB")