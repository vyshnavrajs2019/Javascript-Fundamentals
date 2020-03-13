function sep() {console.log('--------------------------------------------------')}

console.log(outer1.offsetParent);
console.log(outer1.offsetLeft);
console.log(outer1.offsetTop);
console.log(outer1.offsetWidth);
console.log(outer1.offsetHeight);
console.log(outer1.clientLeft);
console.log(outer1.clientTop);
console.log(outer1.clientWidth);
console.log(outer1.clientHeight);

console.log(outer2.offsetParent);
console.log(outer2.offsetLeft);
console.log(outer2.offsetTop);
console.log(outer2.offsetWidth);
console.log(outer2.offsetHeight);
console.log(outer2.clientLeft);
console.log(outer2.clientTop);
console.log(outer2.clientWidth);
console.log(outer2.clientHeight);

console.log(fixed.offsetParent);
console.log(fixed.offsetLeft);
console.log(fixed.offsetTop);
console.log(fixed.offsetWidth);
console.log(fixed.offsetHeight);
console.log(fixed.clientLeft);
console.log(fixed.clientTop);
console.log(fixed.clientWidth);
console.log(fixed.clientHeight);


sep();

console.log(scroll2.scrollHeight)
function whileScrolling(){
	console.log('scrollLeft:', scroll1.scrollLeft)
	console.log('scrollTop:', scroll1.scrollTop)
}


setTimeout(() => {
	scroll1.scrollTop = 135;
}, 5000)