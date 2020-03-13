// arguments are the val, index, and the array
[1,2,3,4].forEach(console.log)

var array = [1,2,3,4,5]

array.forEach(function(val, index, arr){
    console.log(index + " => " + val)
})

/*
    JS engine does not insert semicolon infront of []
    So insert a semicolon before [] if no semicolon at 
    the end of previous statement
*/

// console.log("There will be an error")
console.log("There will not be any error");

[1, 2].forEach(alert)