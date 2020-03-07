'use strict';

function sep() {console.log('--------------------------------------------------')}


let person = {
	sayHi(phrase){
		console.log(phrase + " " + this.name)
	}
}

let admin = {
	__proto__: person,
	name: "Admin"
}

let superPowers = {
	canFly(){
		console.log(this.name + " can fly...")
	}
}

admin.sayHi("Hello")
Object.assign(admin, superPowers)

admin.canFly()

sep();

// Using class

class User {
	constructor(username, password){
		this.username = username
		this.password = password
	}
	avathar(){
		console.log(this.username)
	}
	login(){
		console.log("Logged in")
	}
	logout(){
		console.log("Logout successfull")
	}
}

class Admin extends User {
	constructor(username, password){
		super(username, password)
	}
}

let adminOnly = {
	canViewDatabase(){
		console.log("You have the permission to view the database!!")
	},
	canModifyDatabaseConfig(){
		console.log("You can modify the database configuration!!")
	}
}

Object.assign(Admin.prototype, adminOnly)

let adminUser = new Admin("site.admin", "P@55wrd")
let normalUser = new User("user.username", "user.password")

adminUser.login()
adminUser.logout()
adminUser.canViewDatabase()
// normalUser.canViewDatabase() //Error


sep();
// Event Mixin

let eventMixin = {
	on(eventName, handler){
		if(!this.eventsHandlers)
			this.eventsHandlers = {}
		if(!this.eventsHandlers[eventName])
			this.eventsHandlers[eventName] = []
		this.eventsHandlers[eventName].push(handler)
	},
	off(eventName, handler){
		if(!this.eventsHandlers || !this.eventsHandlers[eventName])
			return
		this.eventsHandlers[eventName].splice(this.eventsHandlers[eventName].indexOf(handler), 1)
	},
	trigger(eventName){
		if(!this.eventsHandlers || !this.eventsHandlers[eventName])
			return
		this.eventsHandlers[eventName].map(handler => console.log(`${handler} fired`))
	}
}

class Menu {
	constructor(){

	}
}

Object.assign(Menu.prototype, eventMixin)

let menu = new Menu()

menu.on("click", "Popup the dialog box")
menu.on("dblClick", "Popup the dialog box with a message")
menu.on("click", "Turn background color dim")

menu.trigger("click")

menu.off("click", "Popup the dialog box")
menu.trigger("click")