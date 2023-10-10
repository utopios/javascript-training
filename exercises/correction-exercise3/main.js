// Q1

function jump(height) {
    return height * 2
}

console.log(`the jump with height equal to 3 => ${jump(3)}`)

//Q2 

const spin = function(spins) {
    return spins * 3
}

console.log(`The spin with our function and parameter value 3 => ${spin(3)}`)

//Q3

function magicianPerformance(number, mysteriousFunction) {
    return mysteriousFunction(number)
}

console.log(`The magic number with our magician performance is ${magicianPerformance(3, (a)=> {
    //console.log(this)
    return a * a
})}`)
console.log(`The magic number with our magician performance is ${magicianPerformance(3, function(a){
    //console.log(this)
    return a * a 
})}`)