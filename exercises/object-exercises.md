# Exercise 6 on Objects: Store's Product Management

You're overseeing the management of a store's products. Each product in your inventory has a name, a brand, a category, and an indication of whether it's on sale or not.

**Features to develop:**

- Addition: Write a function that adds a new product to your inventory.
- Search: Write a function that searches for a product by name, brand, or category.
- Status: Write a function that modifies the status of a product (on sale/not on sale).
- Recommendation: Write a function that recommends a product from a specific category that's not on sale.
- Deletion: Write a function that removes a product from your inventory using the name as a reference



# Exercise 7: Bank Accounts Management

You're tasked with implementing a basic banking system using JavaScript. This system should be able to manage multiple bank accounts, each having attributes like account holder's name, balance, and account type (checking, savings, etc.). The bank accounts should also provide the ability to deposit, withdraw, and get account details. Furthermore, when a bank account object is converted to a primitive type, it should return its balance in a readable string format.

**Specifications:**

- BankAccount Constructor: A constructor function to create bank accounts.
    - Attributes: holderName, balance, accountType.
    - Methods: deposit, withdraw, getDetails.

- Prototypes: All the methods for the bank account should be on the BankAccount's prototype to optimize memory usage.

- Primitive Conversion: Implement a method for the bank account that gets automatically called when the object is converted to a primitive type. This method should return the balance of the account in the format: "Balance: $[amount]".

**Tasks:**

- Create a BankAccount constructor with attributes: holderName, balance (initialized to 0), and accountType.

- Using prototypes, add the following methods:
    - deposit(amount): Adds the amount to the balance.
    - withdraw(amount): Deducts the amount from the balance. If there's not enough balance, it should log an error message.
    - getDetails(): Returns a string with the holder's name and account type.

- Implement the method that converts the bank account object to a primitive type returning the account balance as specified.
- Test your implementation by creating some bank accounts, depositing, withdrawing, and converting them to primitive types.