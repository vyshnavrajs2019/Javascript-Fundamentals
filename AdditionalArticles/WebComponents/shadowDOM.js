// Shadow DOM

customElements.define('show-hello', class extends HTMLElement {
	connectedCallback() {
	  const shadow = this.attachShadow({mode: 'open'})
	  shadow.innerHTML = `<p>Hello, ${this.getAttribute('name')}</p>`
	}
})

// Encapsulation

alert(document.querySelectorAll('p').length)
alert(elem.shadowRoot.querySelectorAll('p').length)