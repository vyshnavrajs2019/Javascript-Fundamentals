'use strict';

function sep() {console.log('--------------------------------------------------')}

// Gernerator

function* generateNumbers(){
	yield 1
	yield 2
	yield 3
	yield 4
}

let gen = generateNumbers()

// let one = gen.next()
// console.log(one, one.value)

// let two = gen.next()
// console.log(two, two.value)

// let three = gen.next()
// console.log(three, three.value)

// let four = gen.next()
// console.log(four, four.value)

// gen.next()

// Iterating
for(let num of gen){
	console.log(num)
}

sep();

// Spread
let gen2 = generateNumbers()
console.log([...gen2])

// Iterables
let range = {
	from: 0,
	to: 10,
	*[Symbol.iterator](){
		for(let val = this.from; val < this.to; val++){
			yield val
		}
	}
}

console.log([...range])

sep();

// Gernerator composition

function* generateSequence(start, end) {
	for (let i = start; i <= end; i++)
		yield i
}
  
function* generatePasswordCodes() {
	yield* generateSequence(48, 57)
	yield* generateSequence(65, 90)
	yield* generateSequence(97, 122)
}

let str = ''

for(let code of generatePasswordCodes()) {
	str += String.fromCharCode(code)
}
  
console.log(str) // 0..9A..Za..z

sep();

//   Pass data to yield

function* qna(){
	let sum = yield "3 + 4 ? "
	return sum
}

gen = qna()
let question = gen.next()
console.log(question.value, gen.next(7).value)

// Generator.throw

function* generatorError(){
	try {
		let result = yield "Get me an error object"
	} catch (error) {
		console.log(error.name)
		console.log(error.message)
	}
}

gen = generatorError()
let qn = gen.next().value
console.log(qn)
gen.throw(new Error("Hey this an error object"))