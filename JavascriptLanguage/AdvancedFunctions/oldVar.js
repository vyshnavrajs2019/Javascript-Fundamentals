function sep() {console.log('--------------------------------------------------')}


// Old var keyword


// hoisting
message = "Hello"

console.log(message);

var message

sep();
// IIFE - Immediately Invoked Function Expression

// Ways to declare

(function(){
    console.log("Hi 1");
})()

+function(){
    console.log('Hi 2')
}()

!function(){
    console.log('Hi 3')
    
}()

sep();