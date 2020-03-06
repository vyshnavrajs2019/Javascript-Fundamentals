// Try Catch
function sep() {console.log('--------------------------------------------------')}

try {
	i = i - 45
	console.log(i)
} catch (error) {
	console.log(error.name)
	console.log(error.message)
}

sep();

// Try Catch Finally
try{
	i = i - 5
	console.log(i);
} catch(err){
	console.log(err.name)
} finally {
	console.log("Finally executed")
}

sep();

// Throw error
try {
	throw new SyntaxError("Custom syntax error")
} catch (error) {
	console.log(error.name)
	console.log(error.message)
}

sep();

// Rethrow

function checkCorrect(){
	throw new Error("Thrown Error")
}

try {
	checkCorrect()
} catch (error) {
	console.log(error.message)
}