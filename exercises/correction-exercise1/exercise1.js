let amount = parseInt(prompt("Enter the purshase amount : "))
if(!isNaN(amount)) {
    const isDiscountApplied = amount > 100
    amount = isDiscountApplied ? amount * 0.9 : amount
    console.log(`${ isDiscountApplied ? '10% discount is applied ' : 'Not eligible for discount'}, the final amount is $${amount}`)
}else {
    console.log("Please prompt correct number")
}