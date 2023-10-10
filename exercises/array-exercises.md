
# Exercise on Arrays: The Store's Inventory

Imagine that you manage a store's inventory. You have a list of items in stock, but you can only display a limited number of them in the front showcase.

**Features to develop:**

- Random Choice: Write a function that chooses a product randomly from the list.
```javascript
    const max = 10
    const randomInteger = Math.floor(Math.random()* max)
```
- Top Picks: Write a function that takes an input number n and returns the top n items from your list.
- Latest Additions: The same as the previous one, but for the n last-added items.
- Search: Write a function that takes an input name (or part of the name) and returns all matching items.
- Shuffle: Write a function that shuffles the order of items in the list.