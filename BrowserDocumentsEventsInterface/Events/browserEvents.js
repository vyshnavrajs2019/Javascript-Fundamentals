function sayHi(){
	alert(`Hi from ${this.innerHTML}`)
}

function sayBye(){
	alert(`Bye from ${this.innerHTML}`)
}

function getEventInfo(event){
	alert('Type    : ' + event.type)
	alert('Target  : ' + event.target  + ' ' + event.currentTarget)
	alert('Position: ' + event.clientX + ' ' + event.clientY)
}

class Menu {
	handleEvent(event){
		switch(event.type){
			case 'mouseenter':
				let boundedSayHi = sayHi.bind(event.target)
				boundedSayHi()
				break
			case 'mouseleave':
				let boundedSayBye = sayBye.bind(event.target)
				boundedSayBye()
				break
		}
	}
}

// using DOM property
button1.onclick = sayHi

// using addEventListener method
button2.addEventListener("click", sayHi)

// overiding existing click event handler of button1 after 5 seconds
setTimeout(() => button1.onclick = sayBye, 5000)

// multiple event handlers
button2.addEventListener("click", sayBye)

// removing event handler sayBye from button2 after 5 seconds
setTimeout(() => button2.removeEventListener("click", sayBye), 5000)

// get event information when clicked button 3
button3.addEventListener("click", getEventInfo)

// object as the event handler
let menu = new Menu()
button3.addEventListener("mouseenter", menu)
button3.addEventListener("mouseleave", menu)