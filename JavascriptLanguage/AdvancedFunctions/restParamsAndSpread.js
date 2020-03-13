// Rest params

function sum(...nums){
    return nums.reduce((x, y) => x + y)
}

console.log(sum(1,2));

console.log(sum(1,2,3,4,5,6,7,8,9,10));


 // arguments
 function sum2(){
    //  console.log(arguments)
     return Array.from(arguments).reduce((x, y) => x + y)
 }

 console.log(sum2(1,2,3,4,5));
 
console.log('-------------------------------------------------------');


// Spread function
function max(...nums){
    return Math.max(...nums)
}

console.log(max(2,3,4,5,6,7,3,2,100,101,1,12,1,13))

// Merge two arrays
function merge(array1, array2){
    return [...array1, ...array2]
}

console.log('-------------------------------------------------------');

console.log(merge([2,3], [1,10]));
