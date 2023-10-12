console.log(window)
console.log(document)

//Find my html node

//const h1 = document.querySelector("h1")

//Find all html node
const allH1 = document.querySelectorAll("h1")


for(h1 of allH1) {
    console.log(h1.innerText)
    h1.innerText = "New h1 title"
}

const firstnameInput = document.querySelector("input[name='firstname']")
const lastnameInput = document.querySelector("input[name='lastname']")
// firstnameInput.value = "initial value of firstname"
// lastnameInput.value = "initial value of lastname"

//const button = document.querySelector("button")
const form = document.querySelector("#mainForm")
const result = document.querySelector("#result")

const callBackSubmitForm = (e) => {
    //Stop default event
    e.preventDefault()
    result.innerHTML += `<div>${firstnameInput.value} ${lastnameInput.value}<button data-firstname='${firstnameInput.value}' data-lastname='${lastnameInput.value}' >Edit</button></div>` 
    //alert("Click on button")
}

form.addEventListener('submit', callBackSubmitForm)

setTimeout(() => {
    form.removeEventListener('submit', callBackSubmitForm)
}, 3000)


result.addEventListener('click', (e) => {
    const button = e.target
    console.log(button)
    const firstname = button.getAttribute("data-firstname")
    const lastname = button.getAttribute("data-lastname")
    firstnameInput.value = firstname
    lastnameInput.value = lastname
})

const resultsClickButtons = document.querySelector("#resultsClickButtons")

//Bad way
// document.querySelectorAll(".btn").forEach(b => {
//     b.addEventListener('click', (e) => {
//         resultsClickButtons.innerText = e.target.innerText
//     })
// })

//Good way

document.querySelector("#btnSection").addEventListener("click", (e) => {
    resultsClickButtons.innerText = e.target.innerText
})



