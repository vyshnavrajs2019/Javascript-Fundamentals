let json = {
	title: "Title",
	author: "Me",
	genre: "Genre",
	obj: {
		hi: "3434"
	}
}

console.log(JSON.stringify(json))

// json.toJSON = function(){
// 	return `{title: '${this.title}'}`
// }

console.log(JSON.stringify(json))

let js = JSON.stringify(json)

console.log(JSON.parse(js))

console.log(
	JSON.stringify(json, ['title', 'genre'], 10)
)

json = {
	title: "Title",
	date: (new Date()).toDateString()
}

console.log(JSON.stringify(json))

let out = JSON.stringify(json)

console.log("-----------------------------")
// parse
let parsed = JSON.parse(out, function(key, val){
	if(key == 'date'){
		return new Date(val)
	}
	return val
})

console.log(parsed)