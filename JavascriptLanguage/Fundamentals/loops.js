// Loop

// For loop

for(let num=0; num<10; num++){
    console.log(num)
}

// While loop
let num = 0
while(num < 10){
    console.log(num)
    num++
}

// For each loop

let arr = [1,2,3,4,5,6,7]
// Callback function accepts value, index and the array itself
arr.forEach((val, idx, arr) => {
    console.log(val, idx, arr)
})