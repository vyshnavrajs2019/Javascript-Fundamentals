// Custom events

document.body.addEventListener("hello", (event) => alert("Hello from " + event.target.innerHTML))

let helloEvent = new Event("hello", {bubbles: true})
button1.dispatchEvent(helloEvent)

// Nested events are synchronous

button2.addEventListener("click", function(){
	alert("Button2 stmt 1")
	button3.dispatchEvent(helloEvent)
	alert("Button2 stmt 2")
})

// prevent default event
let shouldBubble = new Event('bubble', {bubbles: true, cancelable: true})

function whenBubble(event){
	if(!event.defaultPrevented){
		alert(event.currentTarget.id)
		let bool = confirm("Bubble up?")
		if(!bool)
			event.preventDefault()
	}
}

function whenClicked(event){
	let t = event.target
	t.dispatchEvent(shouldBubble)
}

div1.addEventListener('bubble', whenBubble, false)
div2.addEventListener('bubble', whenBubble, false)
div3.addEventListener('bubble', whenBubble, false)
