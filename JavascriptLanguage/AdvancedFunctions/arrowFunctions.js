var team = {
    employees: [
        'Emp 1',
        'Emp 2',
        'Emp 3'
    ],
    title: "Out team",
    showList(){
        // Arrow functions do not have this keyword
        // this is taken from outside
        this.employees.forEach(emp => console.log(this.title, ":", emp))
    }
}

team.showList()


var Person = (name, age) => {
    console.log(name, age)
}

// let p = new Person("Name", "Age") // deos not work
// p()