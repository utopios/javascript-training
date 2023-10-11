//1. Create the BankAccount constructor
function BankAccount(holderName, accountType) {
    this.holderName = holderName
    this.accountType = accountType
    this.balance = 0
}

//2. Add methods ussing prototypes :

// - Deposit method
BankAccount.prototype.deposit = function(amount) {
    if(amount >= 0) {
        this.balance += amount
        console.warn(`Deposited $${amount}. New Balance: $${this.balance}`)
    }
}

// - WithDraw method

BankAccount.prototype.withdraw = function(amount) {
    if(amount < 0 && Math.abs(amount) < this.balance) {
        this.balance += amount
        console.warn(`Withdraw $${amount}. Remaining Balance: $${this.balance}`)
    }
    else {
        console.error("Insufficient balance!")
    }
}

BankAccount.prototype.getDetails = function() {
    return `Holder's name ${this.holderName}, Account Type : ${this.accountType}, Balance : $${this.balance}`
}

//3. Implementation of the primitve conversion:

BankAccount.prototype[Symbol.toPrimitive] = function(hint) {
    if(hint === "string") {
        return `Balance:: $${this.balance}`
    }
    return this.balance
}

//4. Test the implementation

const totoAccount = new BankAccount("toto", "Checking")

totoAccount.deposit(500)
totoAccount.withdraw(-200)
totoAccount.withdraw(-1000)
console.log(totoAccount.getDetails())

console.log(totoAccount + 0)
console.log(`${totoAccount}`)



