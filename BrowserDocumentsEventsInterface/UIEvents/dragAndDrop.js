ball.onmousedown = function(event) {

	let shiftX = event.clientX - ball.getBoundingClientRect().left -25
	let shiftY = event.clientY - ball.getBoundingClientRect().top - 25
  
	ball.style.position = 'absolute'
	ball.style.zIndex = 1000
	document.body.append(ball)
	
	function moveAt(pageX, pageY) {
		ball.style.left = pageX - shiftX + 'px'
		ball.style.top = pageY - shiftY + 'px'
	}
  
	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY);
	}
  
	// move the ball on mousemove
	document.addEventListener('mousemove', onMouseMove);
  
	// drop the ball, remove unneeded handlers
	ball.onmouseup = function() {
		document.removeEventListener('mousemove', onMouseMove);
		ball.onmouseup = null;
	}
}
  
ball.ondragstart = function() {
	return false;
}
