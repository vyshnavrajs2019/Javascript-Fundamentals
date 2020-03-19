// Fetch api

const POST_URL	= 'https://javascript.info/article/fetch/post/user'
const IMG		= 'photo.jpg'
const GIT		= 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'

// fetch git commits
async function getGITCommits(){
	let promise = await fetch(GIT)
	let commits = await promise.json()
	for(let commit of commits){
		console.log(commit)
	}
}

// fetch img
async function getImg(){
	let promise = await fetch(IMG)
	let blob = await promise.blob()
	let img	= document.createElement("img")
	img.style.height = '150px'
	img.style.width  = '250px'
	img.style.position = 'absolute'
	document.body.append(img)
	img.src = URL.createObjectURL(blob)
}

getGITCommits()
getImg()

// send POST request
async function createUser(){
	let promise = await fetch(POST_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			name: "Vyshnav",
			surname: "Puliyarukandiyil"
		})
	})
	if(promise.ok){
		console.log(await promise.json())
	} else {
		console.log(promise.status)
	}
}

createUser()