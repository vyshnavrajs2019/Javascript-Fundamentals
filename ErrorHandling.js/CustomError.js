
class InvalidAge extends Error{
	constructor(...args){
		super(...args)
		this.name = "InvalidAgeError"
	}
}

try{
	let age = 17
	if(age >= 18 & age <=30){
		console.log("Age is valid")
	} else {
		throw new InvalidAge("Your age is invalid")
	}
} catch(err) {
	console.log(err.name, err.message)
}