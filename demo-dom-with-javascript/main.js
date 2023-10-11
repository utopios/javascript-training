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
firstnameInput.value = "initial value of firstname"
lastnameInput.value = "initial value of lastname"

const button = document.querySelector("button")

button.addEventListener('click', (e) => {
    e.preventDefault()
    alert("Click on button")
})


