var user = {
    name: "Vyshnav"
}

var admin = user

user = null // User points to null

console.log(admin) // admin still points to the object

admin = null // now the object is removed from the memory