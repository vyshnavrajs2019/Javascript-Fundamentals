// Custom Elements

class TimeFormatted extends HTMLElement {
	connectedCallback() {
		let date = new Date(this.getAttribute('datetime') || Date.now())
		this.innerHTML = new Intl.DateTimeFormat("default", {
		year: this.getAttribute('year') || undefined,
		month: this.getAttribute('month') || undefined,
		day: this.getAttribute('day') || undefined,
		hour: this.getAttribute('hour') || undefined,
		minute: this.getAttribute('minute') || undefined,
		second: this.getAttribute('second') || undefined,
		timeZoneName: this.getAttribute('time-zone-name') || undefined,
		}).format(date)
	}
}
  
customElements.define("time-formatted", TimeFormatted)

//   Observing attributes

class TimeFormatted_ extends HTMLElement {
	render() {
		let date = new Date(this.getAttribute('datetime') || Date.now())
		this.innerHTML = new Intl.DateTimeFormat("default", {
		year: this.getAttribute('year') || undefined,
		month: this.getAttribute('month') || undefined,
		day: this.getAttribute('day') || undefined,
		hour: this.getAttribute('hour') || undefined,
		minute: this.getAttribute('minute') || undefined,
		second: this.getAttribute('second') || undefined,
		timeZoneName: this.getAttribute('time-zone-name') || undefined,
		}).format(date)
	}
	connectedCallback() {
		if (!this.rendered) {
			this.render()
			this.rendered = true
		}
	}
	static get observedAttributes() {
		return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name']
	}
	attributeChangedCallback(name, oldValue, newValue) {
		this.render()
	}
}

customElements.define("time-formatted_", TimeFormatted_)
setInterval(() => elem.setAttribute('datetime', new Date()), 3000)

// Customised Buil-in Elements

class HelloButton extends HTMLButtonElement {
	constructor() {
	  super()
	  this.addEventListener('click', () => alert("Hello!"))
	}
}
  
customElements.define('hello-button', HelloButton, {extends: 'button'})