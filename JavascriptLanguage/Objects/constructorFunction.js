
function User(email, password, firstName, lastName){
    this.isAuthenticated = false
    this.email = email
    this.password = password
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
    this.login = function(email, password){
        if(email == this.email && password == this.password){
            this.isAuthenticated = true
            return 'Login success'
        }
        return 'Login fail'
    }
}

let vyshnav = new User(
    'svyshnavraj@gmail.com',
    'mypassword123',
    'Vyshnav',
    'Raj S'
)

let abhishek = new User(
    'abhishek525@gmail.com',
    'hispassword7834',
    'Abhishek',
    'M'
)

console.log(vyshnav.fullName())
console.log(abhishek.fullName())

vyshnav.login("svyshnavraj@gmail.com", "mypassword123")

console.log(vyshnav.isAuthenticated) // vyshnav is logged in
console.log(abhishek.isAuthenticated) // but abhishek not logged in