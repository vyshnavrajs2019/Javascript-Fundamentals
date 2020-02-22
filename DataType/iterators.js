let range = {
	start: 0,
	end: 10,
	[Symbol.iterator](){
		return {
			current: this.start,
			end: this.end,
			next(){
				if(this.current == this.end){
					return {
						done: true
					}
				} else{
					return {
						done: false,
						value: this.current++
					}
				}
			}
		}
	}
}

for(let num of range){
	console.log(num)
}

console.log(Array.from(range))

// Calling iterator explicitly
let str = "hello world!!"

let itr = str[Symbol.iterator]()

while(true){
	let js = itr.next()
	if(js.done)
		break
	console.log(js.value)
}