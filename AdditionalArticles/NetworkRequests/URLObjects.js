// URL Objects

function print(...args){ console.log(...args) }

let url = new URL('/profile/admin?user=rose geller&user=james&age=21&lcn=clt#tab', 'https://javascript.info')

// URL properties
print("HOST", url.host)
print("HOST NAME", url.hostname)
print("HREF", url.href)
print("ORIGIN", url.origin)
print("PATH NAME", url.pathname)
print("PROTOCOL", url.protocol)
print("HASH", url.hash)
print("SEARCH", url.search)
print("SEARCH PARAMS", url.searchParams) // returns an object

// Path relative an existing URL
let url2 = new URL('update', url)
print(url2.href) // https://javascript.info/profile/update

// Search Params properties

// append(name, value) – add the parameter by name,
// delete(name) – remove the parameter by name,
// get(name) – get the parameter by name,
// getAll(name) – get all parameters with the same name (that’s possible, e.g. ?user=John&user=Pete),
// has(name) – check for the existance of the parameter by name,
// set(name, value) – set/replace the parameter,
// sort() – sort parameters by name, rarely needed,
// …and it’s also iterable, similar to Map.

print('GET', url.searchParams.get('user'))
print('GET ALL', url.searchParams.getAll('user'))
print('HAS', url.searchParams.has('age'))
url.searchParams.append('is_staff', true)
print('GET', url.searchParams.getAll('is_staff'))
url.searchParams.delete('is_staff')
print(url.searchParams.has('is_staff'))
url.searchParams.set('user', 'adam')
print(url.searchParams.getAll('user'))
url.searchParams.sort()
print('-------Iteration------')
for(let prop of url.searchParams){
	print(prop, url.searchParams.get(prop))
}

// encodeURI vs encodeURIComponent
url = new URL('https://site.com:8080/path/page?p1=veriosn 1&p2=veriosn2#hash')
print('ENCODE URI', encodeURI(url))
print('ENCODE URI COMPONENT', encodeURIComponent(url))