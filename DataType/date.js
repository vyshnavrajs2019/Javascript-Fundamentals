
let today = new Date()

console.log(today.getDate())
console.log(today.getDay())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getMilliseconds())
console.log(today.getMonth())
console.log(today.getSeconds())
console.log(today.getUTCHours()) // indian time - 5 hours 30 minutes
console.log(today.getUTCMinutes())
console.log(today.toISOString())
console.log(today.toDateString())
console.log(today.toLocaleDateString())
console.log(today.toTimeString())

let newDate = new Date("02-12-2019")
console.log(newDate)
console.log(newDate.getDate())

console.log(today - newDate)

console.log(Date.now())

var d = Date.parse('2012-01-26T13:51:50.417-07:00')

console.log(new Date(d).getFullYear())