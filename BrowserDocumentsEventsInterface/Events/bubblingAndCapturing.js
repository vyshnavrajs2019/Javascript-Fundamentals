function sayHi(event){
	alert(`Hi from ${event.target.id} when event fired on ${event.currentTarget.id}`)
}

function sayBye(event){
	alert(`Bye from ${event.target.id} when event fired on ${event.currentTarget.id}`)
}

function capture(event){
	alert(`Capture ${event.currentTarget.id}`)
}

function bubbling(event){
	alert(`Bubbling ${event.currentTarget.id}`)
}

// Event bubbling
// difference between event.currentTarget and event.target
// event.currenttarget == this 
// div1.addEventListener("click", sayHi)
// div2.addEventListener("click", sayHi)
// div3.addEventListener("click", sayHi)

// stop propagation
// div2.addEventListener("click", (event) => {
// 	event.stopPropagation()
// 	alert(event.currentTarget.id + ' stopping event bubbling from ' + event.target.id)
// })

// Event capturing
div1.addEventListener("click", capture, true)
div2.addEventListener("click", capture, true)
div3.addEventListener("click", capture, true)

div1.addEventListener("click", bubbling)
div2.addEventListener("click", bubbling)
div3.addEventListener("click", bubbling)