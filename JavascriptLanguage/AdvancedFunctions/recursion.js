// power function

function power(x, n){
    if(n == 1)
        return x
    return x * power(x, n - 1)
}

console.log(power(3, 4))

console.log(power(5, 4))

// Sum to n

function sumToN(n){
    if(n == 1)
        return 1
    return n + sumToN(n - 1)
}

console.log(sumToN(4))


// Factorial function

function factorial(n){
    if(n == 1 || n == 0)
        return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))

