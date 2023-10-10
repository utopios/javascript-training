//Q1

function defaultOrder() {
    return "water, coffee, sugar"
}

console.log(defaultOrder())

//Q2

function customOrder(liquid = "water", base="coffee", sweetener="sugar") {
    return `${liquid}, ${base}, ${sweetener}`
}

//=> by default value
console.log(customOrder())

//=> with other value
console.log(customOrder("water", "coffee", "honey"))

//Q3

function addExtras(liquid, base, sweetener, ...extras) {
    let drink = customOrder(liquid, base, sweetener)
    for(let i=0; i < extras.length; i++){
        drink += `, ${extras[i]}`
    }
    return drink
}

console.log(addExtras("water", "coffee", "sugar", "milk"))


//Q4
function signatureDrink(orderFunction, ...preferences) {
    return orderFunction(...preferences)
}

console.log(signatureDrink(defaultOrder))
console.log(signatureDrink(customOrder, "water", "coffee", "honey"))
console.log(signatureDrink(addExtras, "water", "coffee", "sugar", "milk", "chocolate"))