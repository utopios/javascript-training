console.warn("Welcome to your Task reminder ! ")

let tasks = ""

while(true) {
    let task = prompt("Please enter a task you want to remember. (Leave empty or enter cancel if you like stop)")
    if(task === "cancel" || !task) {
        break
    }

    // if(tasks === "") {
    //     tasks = task
    // }else {
    //     tasks += "\n" + task
    // }
    tasks += (tasks === "") ? task : "\n" + task
    console.log("Your tasks so far : \n"+ tasks)
}