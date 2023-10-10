//


// sayHello("ihab", "abadi")



// lotOfMessagesAfterES6("m1", "m2")

// lotOfMessagesBeforeES6(["m1", "m2", "m3"])

// computeWithMessage("Addition", 1, 3, 6, 4)


// let a = 10

// //sending args by value
// muliplicationBy3(a)

// //Sending args by reference
// const person = {firstname : "ihab"}

// makeUpperCase(person)

// console.warn(person)


// console.warn(`outside funcation value of a : ${a}`)


// function sayHello(firstname, lastname) {
//     console.warn(`Hello ${firstname} ${lastname}`)
// }

// //Function with infinity number of args after es6
// function lotOfMessagesAfterES6(...messages) {
//     console.log(messages)
// }

// ////Function with infinity number of args before es6 
// function lotOfMessagesBeforeES6(messages) {
//     console.log(messages)
// }

// function computeWithMessage(message, ...numbers) {
//     console.log(message)
//     let total = 0;
//     for(let i=0; i < numbers.length; i++) {
//         total += numbers[i]
//     }
//     console.log(total)
// }


// function muliplicationBy3(a) {
//     a = a * 3
//     console.warn(`Inside function a has value ${a}`)
// }

// function makeUpperCase(person) {
//     person = {firstname: "newpersonfirst"}
//     person.firstname = person.firstname.toUpperCase()
//     console.warn(person)
// }

//Anonymous function

//To check

// const message = "Custom message to our anonymous function"

// (function(msg) {
//   console.warn("Hello i'm anonymous function")  
//   console.warn(msg)  
// })("Custom message to our anonymous function")

function compute(a, b, computationMethod) {
    console.log(computationMethod(a,b))
    console.log(typeof computationMethod)
}

const referenceToAnonymousFunction = function(a,b){return a+b}

compute(10,20, referenceToAnonymousFunction)

compute(10,30, function(a,b){return a*b})

compute(10,30, (a,b) =>  a-b)