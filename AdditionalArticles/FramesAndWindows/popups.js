// Popup

function print(...args){ console.log(...args) }

button.onclick = function(){
	// open a new window
	let win = window.open('/', 'clonedWindow', 'width:20,height:17.5,scroll:yes')
	print(win.name) // clinedwindow
	// write a script to win
	win.onload = function(){
		win.document.write(
			'<script>var aVar = "This is win page variable";</script>'
		)
		// Accessing the popup window variable
		// possible if same origin
		print(win.aVar)
		// can change its location
		// win.location = 'https://www.google.com'
		// // write to its document and try to access the variable
		// win.onload = function(){
		// 	win.document.write('<script>var gVar = "This is Google win page variable";</script>')
		// 	alert(win.gVar) // does not work as it is cross site
		// }
		// win.location = 'https://javascript.info'
		// win.onload = function(){
		// 	win.scrollTo(0, 300) // does not work
		// }
		// win.location = 'http://127.0.0.1:5500/index.html'
		// win.onload = function(){
		// 	win.scrollTo(0, 300) // does not work
		// }
		print(win.opener.button) // popup can access the opener window (parent window and its dom elements as well)
	}
	// close the popup
	setTimeout(() => win.close(), 2000)
}