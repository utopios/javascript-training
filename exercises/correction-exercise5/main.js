
const inventory = []

for(let i=1; i <=40; i++) {
    inventory.push(`item${i}`)
}

//Q1

function randomChoice(items) {
    const index = Math.floor(Math.random()*items.length)
    return items[index]
}
//Test
console.warn("Q1 => random choice")
console.warn(randomChoice(inventory))

//Q2

function topPicks(items, n) {
    // return items.reverse().slice(0,n)
    return items.slice(0,n)
}

console.warn("Q2 => Top picks with 4 elements ")
console.warn(topPicks(inventory, 4))


//Q3

function searchTerm(items, query) {
    return items.filter(item => item.includes(query))
}

console.warn(searchTerm(inventory, "3"))


//Q4

function shuffle(items) {
    for(let i = items.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1))
        let tmp = items[i]
        items[i] = items[j]
        items[j] = tmp
        //[items[i],items[j]] = [items[j], items[i]]
    }
    //return items
}
shuffle(inventory)
console.log(inventory)
