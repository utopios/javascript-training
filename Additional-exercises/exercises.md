## Exercise 1


### Virtual Plant Growth

You've just gotten a new virtual plant. The goal? Take care of it and watch it grow!

**Features:**

1. Plant Selection
    - Prompt the user to select a type of plant they'd like to grow: "Cactus", "Sunflower", or "Fern".
    - Display a message based on the choice, like "You've chosen a Cactus! It doesn't need much water."

2. Watering
    - Ask the user how many milliliters of water they'd like to give the plant today.
    - If a cactus gets more than 50ml in a day, display "Be careful! Cacti don't need that much water."
    - If a sunflower gets less than 100ml, display "Your sunflower might need a bit more water to grow."

3. Sunlight
    - Allow the user to set the plant in either "Full Sun", "Partial Sun", or "Shade".
    - Based on the plant type, give feedback. For example, if a fern is placed in "Full Sun", warn the user: "Ferns prefer shade or partial sun!"

4. Growth Check
    - Display a growth update. For instance, "Your plant grew a little today! Good job!" or "Your plant is stressed from too much sun."


## Exercise 2

### Virtual Library

**Objective**: Create a simple program where users can manage their collection of books.
**Features**:

1. Adding Books
    - Prompt the user to enter the name and author of a book they'd like to add to their virtual library.
    - Store the book details.

2. Searching for Books
    - Allow the user to search for a book by title or author.
    If found, display details of the book. If not, notify the user that the book isn't in their library.

3. Removing Books
    - Let the user remove a book from their collection by entering its title.
    Confirm the removal with a message.

4. Library Overview
    - Display a list of all books currently in the user's library.


## Exercise 2

### Diet Tracker


**Objective**: Help users keep track of their daily food intake and see if they're meeting their dietary goals.
**Features**:

1. Food Entry
    - Prompt the user to enter foods they've eaten today along with an estimated calorie count.

2. Set Calorie Goal
    - Let the user set a daily calorie intake goal.

3. Diet Summary
    - At any point, allow the user to view a summary that shows:
        - Total calories consumed so far.
        - How many more calories they can consume to meet their goal.
        - If they've exceeded their calorie goal, show by how much.

4.Favorite Foods
    - Allow users to mark certain foods as "favorites".
    - When entering food, if it's a favorite, the calorie count can auto-populate (this can be simplified, e.g., "apple = 100 calories").


## Exercice 3 Interactive Calendar


**Objective:**

Create a detailed and interactive calendar web application.

**Tasks:**

- Display and Navigation:
    - Display a monthly view calendar with clickable dates.
    - Enable navigation through different months and years.
    - Highlight the current day.
- Event Management:
    - Clicking a date allows users to add/edit events with fields like title, time, and description.
    - Events should be displayed on respective dates in the calendar view.
    - Allow recurring events to be set (e.g., weekly, monthly).
- Notifications:
    - Implement local notifications (browser notifications) to remind users of events.
    - Ensure notifications are pushed at a user-defined time before the event.
- Local Storage:
    - Store user events in local storage so that they persist even after the page is refreshed.

## Exercice 4  Weather Dashboard

**Objective:**

Develop a dynamic weather dashboard that offers comprehensive weather reports.
Tasks:

- Dynamic Data Retrieval:
    - Retrieve weather data asynchronously using promises and async/await from a weather API.
    - Provide current weather, hourly forecasts, and a 7-day forecast.
- User Interface:
    - Implement modules for handling different aspects: UI update, API calls, data storage, etc.
    - Display detailed weather info like temperature, humidity, wind speed, and icon representation of the weather.
- Data Visualization:
    - Implement charts or graphs for weather trends (e.g., temperature and rainfall over time).
- User Preferences:
    - Allow users to set preferred units of measurement.
    - Enable users to save favorite locations for quick weather checks.
- Offline Capability:
    - Implement service workers to enable some degree of offline functionality, such as viewing previously fetched weather data.

## Exercice 5 Task Manager

**Objective:**

Create a robust task manager application that helps users manage their activities efficiently.
Tasks:

- Task Management:
    - Build a Task class with properties like title, description, dueDate, priority, and status.
    - Create, Read, Update, and Delete (CRUD) functionality for tasks.
- Task Filtering and Searching:
    - Implement filtering by due date, priority, and status.
    - Add a search bar to find tasks by keywords in the title or description.
- User Authentication:
    - Implement user authentication to allow personal task management for different users.
    - Each user should have their own task list, stored securely.
- Notifications:
    - Integrate email or SMS notifications using external services/APIs.
    - Implement in-app and browser notifications for task reminders.
- Collaboration Features:
    - Allow tasks to be assigned to different users (once they have created accounts).
    - Implement a commenting system on tasks for user interaction.

## Exercice 6 Travel Planning App (Asynchronous and Modules)
**Objective**:

Develop a travel planning app where users can plan trips by adding destinations, accommodations, and activities, integrating asynchronous calls for added functionalities.
**Tasks**:

- Trip Management:
    - Implement CRUD operations for trips, where each trip has destinations, accommodations, and activities.
    - Allow adding, editing, and removing of individual activities and accommodations for each destination.
- Map and Location API Integration:
    - Integrate a map API (like Google Maps) to allow users to select and view locations.
    - Retrieve and display points of interest (like restaurants or tourist spots) near the chosen destination using asynchronous API calls.
- Weather Integration:
    - Utilize a weather API to provide weather forecasts for chosen destinations.
- User Interaction:
    - Implement comment and rating systems for accommodations and activities.
- Cost Management:
    - Allow users to input and track costs for accommodations, activities, and transportation.
    - Provide a cost overview and breakdown for each trip.

