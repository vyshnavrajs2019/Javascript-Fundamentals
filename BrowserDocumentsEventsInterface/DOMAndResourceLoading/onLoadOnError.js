let script = document.createElement('script')
script.src = 'https://cors.javascript.info/article/onload-onerror/crossorigin/error.js'

document.head.append(script)

script.onload = function(){
	alert('Script loaded')
}

window.onerror = function(msg, source, line, col, err){
	console.log(msg, source, line, col, err)
}

wallpaper.onload= function(){
	alert(this.src + " loaded successfully!!")
}