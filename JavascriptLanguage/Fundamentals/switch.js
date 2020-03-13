
let num = parseInt(prompt("Guess a number"))

switch(num){
    case 1:
        alert("The number is 1")
        break
    case 2: // Grouping cases
    case 3:
        alert("The number is either 2 or 3")
        break
    case 4:
        alert("The number is 4")
        break
    default:
        alert("Hmm!, I could not find the number")
}
