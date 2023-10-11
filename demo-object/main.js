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

function Person(firstname, lastname, phones) {

    this.phones = phones
    this.firstname = firstname
    this.lastname = lastname
    this.fullname = firstname + " "+lastname

    // this.printname = function() {
    //     console.log(`hy im ${this.fullname}`)
    // }
}

// Person.prototype.printname = function() {
//     console.log(`hy im ${this.fullname}`)
// }

// Person.prototype.toString = function() {
//     return this.fullname
// }

//const p1 = new Person("ihab", "abadi")
//const p2 = new Person("toto", "tata")

// p1.printname()
// p2.printname()

// console.log(p1)
// console.log(p2)

//console.log("This person object "+ p1)

// let symbol1 = Symbol("symbol")
// let symbol2= Symbol("symbol")

// console.log(symbol1 === symbol2)

// const obj =  {
//     [symbol1] : "symbol value"
// }


Person.prototype[Symbol.toPrimitive] = function(hint) {
    console.log(hint)
    switch(hint) {
        case "string":
            return `Person is ${this.fullname}`
        default:
            return 0
    }
}

Person.prototype[Symbol.iterator] = function() {
    let index = 0
    return {
        next: () => {
            if(index < this.phones.length) {
                return {value : this.phones[index++], done: false }
            } else {
                return {done: true}
            }
        }
    }
}

const p1 = new Person("ihab", "abadi", ["0101010101", "02020202020"])
console.log(p1)
console.log(`person is ${p1}`)


 
for(let val of p1) {
    console.log(val)
}
