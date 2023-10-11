//first object

//Object declaration
//const myObject = new Object()


// const person = {
//     firstname : "ihab",
//     lastname: "abadi",
//     age: 36,
//     address : {
//         city: "Tourcoing",
//         zipCode: 59200
//     },
//     // printFullname: function() {
//     //     console.log(this)
//     //     setTimeout(function() {
//     //         console.log(this)
//     //         console.log("Method used to print fullname "+this.firstname + " "+this.lastname)
//     //     },3000)
//     // }

//     printFullname() {
//         console.log(this.firstname + " "+ this.lastname)
//     },

//     get fullname() {
//         return `${this.firstname} ${this.lastname}`
//     },
//     set fullname(value) {
//         [this.firstname, this.lastname] = value.split(' ')
//     }
// }

// console.log(person)

// console.log(person.fullname)

// person.fullname = "newfirstname newlastname"

// console.log(person.fullname)

// console.log("firstname" in person)
// console.log("companyName" in person)

// for(let key in person) {
//     console.log(`key : ${key}, value: ${person[key]}`)
// }

//Not work now, 
// for(let val of person) {
//     console.log(val)
// }

//Create object from the first one
// const secondPerson = Object.create(person)
// secondPerson.phone = "003311111111"
// console.log(secondPerson)
// console.log(secondPerson.firstname)



// console.log(person.firstname)
// console.log(person.address)

// person.printFullname()

// function greet(greeting, punctuation) {
//     console.log(greeting + " "+ this.firstname + " "+ punctuation)
// }

// greet("Hello", "!")

// const person = {
//     firstname : "ihab"
// }

// //Bind function, is function that return new one
// const greetPerson = greet.bind(person)

// greetPerson("Hello", "!")

// greet.call(person, "Hello", "!")

// greet.apply(person, ["Hello", "!"])


//Create object with constructor function

function Person(firstname, lastname) {
    this.firstname = firstname
    this.lastname = lastname
    this.fullname = firstname + " "+lastname

    // this.printname = function() {
    //     console.log(`hy im ${this.fullname}`)
    // }
}

Person.prototype.printname = function() {
    console.log(`hy im ${this.fullname}`)
}

const p1 = new Person("ihab", "abadi")
const p2 = new Person("toto", "tata")

p1.printname()
p2.printname()

console.log(p1)
console.log(p2)
