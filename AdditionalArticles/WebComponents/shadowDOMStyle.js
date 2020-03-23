// Shadow DOM Style

// :host

customElements.define('custom-dialog', class extends HTMLElement {
	connectedCallback() {
		this.attachShadow({mode: 'open'}).append(tmpl.content.cloneNode(true))
	}
})

// :host(selector)
customElements.define('custom-dialog-2', class extends HTMLElement {
	connectedCallback() {
	  this.attachShadow({mode: 'open'}).append(tmpl2.content.cloneNode(true));
	}
})

// Styling slotted content

// customElements.define('user-card-3', class extends HTMLElement {
// 	connectedCallback() {
// 		this.attachShadow({mode: 'open'});
// 		this.shadowRoot.innerHTML = `
// 		<style>
// 		span { background: red; }
// 		</style>
// 		Name: <slot name="username"></slot>`
// 	}
// })

customElements.define('user-card-3', class extends HTMLElement {
	connectedCallback() {
		this.attachShadow({mode: 'open'})
		this.shadowRoot.innerHTML = `
		<style>
		slot[name="username"] { font-weight: bold; }
		</style>
		Name: <slot name="username"></slot>`
	}
})


// CSS hooks with custom properties
customElements.define('user-card-4', class extends HTMLElement {
	connectedCallback() {
		this.attachShadow({mode: 'open'})
		this.shadowRoot.append(document.getElementById('tmpl4').content.cloneNode(true))
	}
})