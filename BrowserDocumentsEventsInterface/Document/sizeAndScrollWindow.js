// width height of window

let html = document.documentElement
let body = document.body

console.log(html.clientHeight, window.innerHeight)
console.log(html.clientWidth, window.innerWidth);
console.log(html.clientLeft);

// width height of document

console.log(Math.max(
	html.clientHeight, body.clientHeight,
	html.offsetHeight, body.offsetHeight,
	html.scrollHeight, body.scrollHeight
));

console.log(Math.max(
	html.clientWidth, body.clientWidth,
	html.offsetWidth, body.offsetWidth,
	html.scrollWidth, body.scrollWidth
));

// Current scroll
function whileScroll(){
	console.log(
		window.pageXOffset,
		window.pageYOffset
	);
}

window.onscroll = whileScroll

setTimeout(()=>{
	// window.scrollBy(20,200)
	window.scrollTo(0, 200)
	console.log(window.scrollX, window.scrollY);
},4000)

let f = true

function adjustView(event){
	event.target.scrollIntoView(f)
	f = !f
}