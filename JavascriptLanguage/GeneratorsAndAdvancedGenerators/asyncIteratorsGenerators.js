'use strict';

// Async iterators

let range  = {
	from: 0,
	to: 10,
	[Symbol.asyncIterator](){
		return {
			curr: this.from,
			to: this.to,
			async next(){
				await new Promise(resolve => setTimeout(resolve, 1000))
				if(this.curr < this.to)
					return {done: false, value: this.curr++}
				return {done: true}
			}
		}
	}
};

(async () => {
	for await (let val of range){
		console.dir(val)
	}
})()

// Async generators

async function* asyncGen(start, end){
	for(let i=start; i<end; i++){
		await new Promise(resolve => setTimeout(resolve, 1000))
		yield i
	}
}

(
	async () => {
		let aGen = asyncGen(48, 58)
		for await (let val of aGen){
			console.log(val)
		}
	}
)()

// Async iterables

let xrange = {
	start: 150,
	end  : 160,
	async *[Symbol.asyncIterator](){
		for(let i=this.start; i<this.end; i++){
			await new Promise(resolve => setTimeout(resolve, 1000))
			yield i
		}
	}
};

(async () => {
	console.log("Hmm!!")
	for await (let value of xrange) {
		console.log(value);
	}
})();