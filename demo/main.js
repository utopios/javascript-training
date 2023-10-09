//alert("hello world")

/*
This is comment with multiple lines
console.log("Hello world")
console.log("Hello from ihab")
*/


//Before 2015, it's still work 

// var firstname = "ihab"
// var lastname = "abadi"

// fullname = firstname + lastname

//After 2015 and ES6+

// let age

// const START_MESSAGE = "Hello"

// START_MESSAGE = "new value"

let firstname = "ihab"
let lastname = "abadi"

// console.log(typeof(age))

// age = 36
// console.log(typeof(age))

// age = "36"

// console.log(typeof(age))
// console.log(typeof(firstname))
// console.log(typeof(lastname))

// console.log(START_MESSAGE + " from ihab")


// DATA Types

// let price = 10.0

// let test = false

// let nullableVariable = null

// console.log(typeof(price))
// console.log(typeof(test))
// console.log(typeof(nullableVariable))

// console.log(typeof(price / 0)) // => result infinity 
//console.log(10 / 0)
// console.log(typeof("ihab"/2)) // => result NaN
//console.log("ihab"/2)
// console.log(`My fullname is ${firstname +" "+ lastname}`)

// console.log(price > 20)

// console.log(typeof 10n)


//Comparison operators

// console.log("1 == '1'", 1 == "1")
// console.log("1 === '1'", 1 === "1")

//Conditional structures
// if statement

// let age = 70

// if(age >= 21) {
//     console.log("You are an adult")
//     console.log("You can drive")
// }else {
//     console.log("You need to wait")
// }

// //if else statement
// if(age <=15) {
//     console.log("child")
// }
// else if(age > 15 && age < 18) {
//     console.log("Teenager")
// } else if(age >= 18 && age <=25) {
//     console.log("young adult")
// }else if(age >=25 && age <=65) {
//     console.log("Adult")
// }else {
//     console.log("Senior citizen")
// }

//switch statement

//const code = parseInt(prompt("Enter code : "))
// console.log(typeof code)
// console.log(code)
// switch(code) {
//     case 200:
//         console.log("Ok")
//         break;
//     case 400:
//         console.log("bad request")
//         break;
//     case 500:
//         console.log("server errors")
//         break;
//         default:
//             console.log("default instruction")
//         break;
// }

//patel example 
/*const code = parseInt(prompt("Enter the value: "))
console.log(typeof code)
switch(code) {

    case 10:

        console.log(`Entered value is ${code} and is a match`)

        break;

    default:

        console.log(`Entered value is ${code} and is not a match`)

}*/


//Ternary operator

// const elvisLives =  Math.PI > 4 ? "Yep" : "nope" 
// console.log(elvisLives)
// console.log(code)
// console.log(code > 300 ? "Danger" : "Cool")


// let undefinedVariable = 10n

// console.log(undefinedVariable ?? "default value")

//While loop

// console.warn("While loop")
// let n = 11

// while(n  < 10) {
//     console.log(n)
//     n++
// }

//do while
// console.warn("do while loop")
// n = 11

// do {
//     console.log(n)
//     n++
// }while(n < 10)

//For Loop
// console.warn("For loop")
// for(let i=10; i >= 0; i=i-3) {
//     console.log(i)
// }

//Break and continue instructions
let n = 1 

while(n < 10) {
    
    if(n % 4 == 0){
        console.log("continue")
        n++
        continue
    }
    else {
        console.log(n)
        n++
    }
    
}

console.warn("End of loop")

