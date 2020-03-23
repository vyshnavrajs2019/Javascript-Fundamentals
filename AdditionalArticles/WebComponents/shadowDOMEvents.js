// Shadow DOM Events

// customElements.define('user-card', class extends HTMLElement {
// 	connectedCallback() {
// 		this.attachShadow({mode: 'open'})
// 		this.shadowRoot.innerHTML = `<p>
// 		<button>Click me</button>
// 		</p>`
// 		this.shadowRoot.firstElementChild.onclick = e => alert("Inner target: " + e.target.tagName)
// 	}
// })

// document.onclick =
// 	e => alert("Outer target: " + e.target.tagName)


// No re-targeting on slotted elements

customElements.define('user-card-2', class extends HTMLElement {
	connectedCallback() {
	this.attachShadow({mode: 'open'})
	this.shadowRoot.innerHTML = `<div>
	<b>Name:</b> <slot name="username"></slot>
	</div>`

	this.shadowRoot.firstElementChild.onclick = e => alert("Inner target: " + e.target.tagName)
	}
  })
  
userCard.onclick = e => alert(`Outer target: ${e.target.tagName}`)