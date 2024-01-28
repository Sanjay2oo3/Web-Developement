class BankAccount{
    constructor(name,balance){
        this.name = name;
        this.balance = balance
    }

     checkBalance(){
        console.log(`Account balance for ${this.name} Rs.${this.balance}`)
    }

    deposit(value){
        if(value > 0 && typeof value === "number"){
            this.balance = this.balance + value;
            console.log(`Depsoted Rs.${value}. New balance: Rs.${this.balance}`)
        }else if(value < 0)
        {
            console.log("Invalid deposit amount. Please enter a positive amount.")
        }
    }

    withdraw(value){
        if(value > this.balance){
            console.log("Insufficent funds for withdrawal.")
        }else
        if (value <= this.balance && value > 0  && typeof value === "number"){
            this.balance = this.balance - value;
            console.log(`Withdrawn Rs.${value}. New balance : Rs.${this.balance}`)
        }else
        if(value < 0){
            console.log("Invalid withdrawal amount. Please enter a positive amount.")
        }
    }
}

const myAccount = new BankAccount("Sanjay", 1000)
myAccount.checkBalance()

myAccount.deposit(500)
myAccount.deposit(-50)

myAccount.withdraw(200)
myAccount.withdraw(1500)
myAccount.withdraw(-500)

myAccount.checkBalance()


