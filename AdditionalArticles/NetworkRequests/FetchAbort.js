// Fetch abort

let controller = new AbortController()

// let urls = [
// 	'crawler.mkv',
// 	'crawler.mkv',
// 	'crawler.mkv',
// 	'crawler.mkv',
// ]

// urls.map(url => {
// 	fetch(url, {
// 		signal: controller.signal
// 	})
// })

async function loadVideo(){
	console.log("............")
	try {
		console.log('Video loading...')
		let response = await fetch('/crawler.mkv', {
			signal: controller.signal
		})
		console.log('Video loaded')
		let video = response.blob()
	} catch (error) {
		console.log(error.name)
	}
}

loadVideo()
setTimeout(() => controller.abort(), 10)