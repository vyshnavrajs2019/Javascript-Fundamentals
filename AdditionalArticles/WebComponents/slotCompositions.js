// Slot compositions

customElements.define('user-card', class extends HTMLElement {
	connectedCallback() {
	  this.attachShadow({mode: 'open'})
	  this.shadowRoot.innerHTML = `
		<div>Name:
		  <slot name="username"></slot>
		</div>
		<div>Birthday:
		  <slot name="birthday"></slot>
		</div>
	  `
	}
})

// Lighter DOM can access
alert( document.querySelectorAll('user-card span').length )

// Default slots
customElements.define('user-card-2', class extends HTMLElement {
	connectedCallback() {
		this.attachShadow({mode: 'open'})
		this.shadowRoot.innerHTML = `
		<div>Name:
		<slot name="username"></slot>
		</div>
		<div>Birthday:
		<slot name="birthday"></slot>
		</div>
		<fieldset>
		<legend>Other information</legend>
		<slot></slot>
		</fieldset>`
	}
})