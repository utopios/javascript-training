class Pet {
    static count = 0
    constructor(name, type) {
        this.name = name
        this.type = type
        this.hunger = 5
        this.happiness = 5
        this.id =  ++Pet.count
    }

    feed() {
        if(this.hunger > 0) this.hunger--
    }

    play() {
        if(this.happiness < 10) this.happiness++
    }
}

class Lion extends Pet {
    constructor(name) {
        super(name, "Lion")
    }
}

class Elephant extends Pet {
    constructor(name) {
        super(name, "Elephant")
    }
}

//STORE OF PETS
const pets = []

//HTML OBJECT
const petsSection = document.querySelector("#petsSection")
const addPetButton = document.querySelector("#addPetButton")

//RANDOM NAMES
const sampleNames = ["Leo", "Max", "Ella", "Charlie", "Bella"]

//FUNCTIONS

const displayPet = (pet) => {
    return  `
    <div id='pet${pet.id}'>
        Name : ${pet.name}<br/>
        Type : ${pet.type}<br/>
        Hunger : ${pet.hunger}<br/>
        Happiness: ${pet.happiness}<br/>
        <button data-id='${pet.id}' data-action='play'>Play</button><button data-id='${pet.id}' data-action='feed'>feed</button>
    </div>
    `
}

const addPet = () => {
    const randomPetType = Math.random() < 0.5 ? "Lion" : "Elephant"
    const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)]

    const pet = randomPetType ===  "Lion" ? new Lion(randomName, randomPetType) : new Elephant(randomName, randomPetType)
    pets.push(pet)
    console.log(pet)
    petsSection.innerHTML += displayPet(pet)
}


const displayAllPets = () => {
    petsSection.innerHTML = ''
    pets.forEach(pet => {
        petsSection.innerHTML += displayPet(pet)
    })
}


const actionOnPet = (e) => {
    const button = e.target
    const id = button.getAttribute("data-id")
    const action = button.getAttribute("data-action")
    const foundPet = pets.find(p=> p.id == id)
    if(foundPet) {
        switch(action) {
            case "play":
                foundPet.play()
                break;
            case "feed":
                foundPet.feed()
                break;
            default:
                break;
        }
        console.log(foundPet)
        //displayAllPets()
        const petDiv = document.querySelector("#pet"+foundPet.id)
        petDiv.innerHTML =  displayPet(foundPet)
    }
    else {
        alert("Pet don't exists")
    }
}


addPetButton.addEventListener('click', addPet)
petsSection.addEventListener('click', actionOnPet)