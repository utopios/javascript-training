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