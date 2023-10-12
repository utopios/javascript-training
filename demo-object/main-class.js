class User {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }   

    get fullname() {
        return `${this.firstname} ${this.lastname}`
    }

    set fullname(value) {
        [this.firstname, this.lastname] = value.split(" ")
    }

    print() {
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

const myUser = new User("ihab", "abadi")

console.log(myUser)
myUser.print()
class Employee extends User {
    constructor(firstname, lastname, salary) {
        super(firstname, lastname)
        this.salary = salary
    }

    customPrint() {
        this.print()
        console.log(`${this.salary}`)
    }
}

const myEmployee = new Employee("toto", "tata", 3000)
console.log(myEmployee)
myEmployee.customPrint()