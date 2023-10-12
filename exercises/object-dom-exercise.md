# Exercise: Personalized Virtual Pet Zoo

Objective:
Create a virtual pet zoo where users can interact with individual animals, feeding or playing with them one-by-one, instead of in groups.

**Instructions:**

1. HTML Structure:
    - Create a webpage with the title "Personalized Virtual Pet Zoo".
    - Provide a button labeled "Add Pet".
    - Below, establish a section where individual pets will be displayed.

2. JavaScript Structure:

    a. Classes:
    - Design a Pet class with the following properties:
        - name (e.g., "Leo")
        - type (e.g., "Lion")
        - hunger (starts at 5, on a scale of 0-10)
        - happiness (starts at 5, on a scale of 0-10)
    - The Pet class should also have these methods:
        - feed(): Decreases hunger by 1.
        - play(): Increases happiness by 1.
    - Develop subclasses for specific types of pets (like Lion, Elephant, etc.) that inherit from the Pet class. These subclasses can have unique behaviors or attributes if desired.

    b. DOM Interaction:
    - When the "Add Pet" button is clicked, introduce a random pet to the zoo. For each pet in the display section:
        - Show its name, type, hunger, and happiness levels.
        - Provide individual "Feed" and "Play" buttons for each pet.
    - When a specific pet's "Feed" button is clicked, only that pet's hunger should decrease.
    Similarly, when a specific pet's "Play" button is clicked, only that pet's happiness should increase.
    - Ensure the display updates after each interaction.

# Exercise: Random Joke Display

**Objective**: Create a web page with a button. When the user clicks this button, a random joke is fetched from an API and displayed on the page.

Instructions:

1. Setting up the HTML structure:
    - Create an HTML page with a button labeled "Give me a joke!".
    Add an element, such as a paragraph <p>, where the joke will be displayed.

2. JavaScript:
    - Attach a click event listener to the button.
    When the button is clicked, use the fetch function to get a random joke from the "JokeAPI" at https://v2.jokeapi.dev/joke/Any.
    Use Promises (the .then() chain) to process the response. Convert the response to JSON, then extract and display the joke in the <p> element.

3. Error Handling:
    - Add error handling to address any issues when fetching data from the API. Display an error message to the user in such cases.