'use strict';

// querySelector
console.log(document.querySelector("div")); // first div
console.log(document.querySelector("div.outer2"))

// querySelectorAll
console.log(document.querySelectorAll("div")); // All div's
console.log(document.querySelectorAll("span"));

// getElementBy
console.log(document.getElementById("span-2"));
console.log(document.getElementsByClassName("span"));
console.log(document.getElementsByTagName("span"));
// we can access node with id (not having any - ) directly
console.log(span);

// Matches returns true / false
console.log(document.getElementById("span").matches("#span"));
console.log(document.getElementById("span").matches("#span-2"));

//  closest
console.log(closest.closest(".span").closest(".outer2"))