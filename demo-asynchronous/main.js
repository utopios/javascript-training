let test = true
const firstPromise  = async () => new Promise((resolve, reject) => {
    //asynchronous tasks
    setTimeout(() => {
        if (test) {
            resolve("Promise Ok")
        } else {
            reject("Promise Failed")
        }
    }, 3000)
})

const secondPromiseDependOnTheFirstOne =  async (result) => new Promise((resolve, reject) => {
    if(result == "value 1") {
        resolve("Second Promise")
    }
    else {
        reject("second Promise not ok")
    }
})

function loadScript(src) { 
    return new Promise((resolve, reject) => { 
        let script = document.createElement("script"); 
        script.src = src; 
        document.head.append(script); 
        script.onload = () => resolve("File " + src + " loaded successfully"); 
        script.onerror = () => reject(new Error("Failed to load " + src)); 
    }); 
}


console.log("Instruction 0")
console.log("Instruction 1")
// firstPromise.then((msg) => { 
//     console.log(msg) 
//     secondPromiseDependOnTheFirstOne(msg).then((msg) => {

//     })
// }).catch((msg) => { console.error(msg) })

const loadPromises = async () => {

    try {
        const result = await firstPromise()
        //console.log(result)
        return await secondPromiseDependOnTheFirstOne(result)
    }catch(err) {
        throw err
    }
    
}

console.log("Instruction 2")
console.log("Instruction 3")

loadScript("second.js").then((msg) => {
    console.log(msg)
}).then(err => {
    console.error(err)
})

loadPromises().then((res)=> {console.log(res)}).catch(err => console.error(err))
