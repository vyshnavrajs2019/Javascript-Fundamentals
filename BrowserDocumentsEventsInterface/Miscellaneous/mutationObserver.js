
let observer = new MutationObserver(function(records){
	records.map(function(record){
		console.log(record.type)
		console.log(record.oldValue);
		console.log(record.target);
	})
})

setTimeout(function(){
	time.innerHTML += new Date().getTime()
}, 1000)


// childList – changes in the direct children of node,
// subtree – in all descendants of node,
// attributes – attributes of node,
// attributeFilter – an array of attribute names, to observe only selected ones.
// characterData – whether to observe node.data (text content)

// attributeOldValue – if true, pass both the old and the new value of attribute to callback (see below), otherwise only the new one (needs attributes option),
// characterDataOldValue – if true, pass both the old and the new value of node.data to callback (see below), otherwise only the new one (needs characterData option).

observer.observe(time, {
	childList: true,
	subtree: true,
	characterData: true,
	characterDataOldValue: true
})
