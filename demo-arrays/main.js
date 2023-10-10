//Creating array
let daysOfWeek = ["Monday", "Tuesday"]

//console.table(daysOfWeek)

//Access to the first element
const firstday = daysOfWeek[0]

//console.log(firstday)

//Add at the end of array, one item
daysOfWeek.push("Wednesday")
daysOfWeek.push("Tuesday")


//Add at the end of array, multiple items
daysOfWeek.push("Thursday", "Friday", "Saturday", "Sunday")


//console.table(daysOfWeek)

//Remove the last item for our array
daysOfWeek.pop()

daysOfWeek.push(34)
daysOfWeek.push(["names", 10, false])



console.table(daysOfWeek)

const indexTuesday = daysOfWeek.indexOf("Tuesday")

console.log(indexTuesday)


const shallowCopy = daysOfWeek.slice()

let copy = [...daysOfWeek]

//iterate over the array

for(let i=0; i < daysOfWeek.length; i++) {
    console.warn(`Index : ${i}, value : ${daysOfWeek[i]}`)
}

copy.forEach((item, index) => {
    console.log(`Index : ${index}, value : ${item}`)
})

copy.pop()
copy.pop()
const elementsStartedWithT = copy.filter(item => item.startsWith("T"))

console.debug(elementsStartedWithT)

