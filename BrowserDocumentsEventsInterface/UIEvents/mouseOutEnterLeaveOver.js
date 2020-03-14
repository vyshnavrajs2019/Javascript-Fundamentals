function mouseFunc(event){
	console.log("------------", event.type, "-------------");
	console.log("Target",event.target.id);
	console.log("Related target", event.relatedTarget ? event.relatedTarget.id : null);
}

// Mouseover and Mouseout

outer.onmouseover = mouseFunc
inner.onmouseover = mouseFunc // bubbles

outer.onmouseout = mouseFunc
inner.onmouseout = mouseFunc

// Mouseenter and Mouseleave

outer.onmouseenter = mouseFunc
inner.onmouseenter = mouseFunc // does not bubbles

outer.onmouseleave = mouseFunc
inner.onmouseleave = mouseFunc