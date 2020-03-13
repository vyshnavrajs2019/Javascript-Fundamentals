'use strict';

function sep() {console.log('--------------------------------------------------')}

// Proxy

let target = {}
let proxy = new Proxy(target, {})

proxy.value = 5
console.log(target.value)
console.log(proxy == target)

sep();

// Get trap

let nums = [1,2,3,4]
nums = new Proxy(nums, {
	get(target, index){
		// return num if index is valid else 0
		if(index in target)
			return target[index]
		return 0
	}
})

console.log(nums[45], nums[2])

// Set trap

nums = new Proxy(nums, {
	set(target, index, value){
		// insert only if value is an integer
		if(typeof value == 'number'){
			target[index] = value
			return true
		} else {
			return false
		}
	}
})

nums.push(23)
// nums.push("string") // TypeError
console.log(nums, nums[4])

sep();
// Iteration with ownKeys

let user = {
	name: "Vyshnav",
	age: 21,
	_password: "p@55w0rd"
};

user = new Proxy(user, {
	ownKeys(target) {
		return Object.keys(target).filter(key => !key.startsWith('_'));
	}
})

console.log(Object.keys(user))

sep();

// deleteProperty

let server = {
	name: "nginx",
	_secretKey: "182937hn23@#$@4nx2idn"
}

server = new Proxy(server, {
	deleteProperty(target, prop){
		if(prop in server && !prop.startsWith("_")){
			delete target[prop]
			return true
		} else {
			throw new Error()
		}
	}
})

console.log("name delete: ", delete server["name"])
// delete server["_secretKey"] // Error

sep();

// has trap

let range = {
	from: 0,
	to: 10
}

range = new Proxy(range, {
	has(target, prop){
		if(prop >= target.from && prop <= target.to)
			return true
		return false
	}
})

console.log(5 in range, 12 in range)

sep();

// Reflect

nums = [1,2,3,4,5]
console.log(Reflect.get(nums, 4))
console.log(Reflect.get(nums, 5)) // index 5 is invalid: undefined

console.log(Reflect.set(nums, 5, 6)) // key '5' with value 6
console.log(Reflect.get(nums, 5))