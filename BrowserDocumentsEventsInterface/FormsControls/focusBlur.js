// Focus Blur

password.onfocus = function(){
	if(p.classList.contains('err')){
		p.classList.remove('err')
	}
}
// Brings the focus back on to the password field
password.onblur  = function(){
	if(!this.value.includes('@') || !this.value.includes('*')){
		p.classList.add('err')
		this.focus()
	}
}

// Delegation
// focus event does not bubble but captures

// form.addEventListener('focus', function(){
// 	this.style.borderColor = 'red'
// }, true)