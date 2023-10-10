//first object

//Object declaration
//const myObject = new Object()


const person = {
    firstname : "ihab",
    lastname: "abadi",
    age: 36,
    address : {
        city: "Tourcoing",
        zipCode: 59200
    },
    printFullname: function() {
        setTimeout(() => {
            console.log(this)
            console.log("Method used to print fullname "+this.firstname + " "+this.lastname)
        },3000)
    }
}

console.log(person.firstname)
console.log(person.address)

person.printFullname()