
// Abstraction -> Hide the complexity

/* 

bank system

1-> Deposite
2-> Withdraw
3-> CheckBalance

*/


class BankAccount{
    #balance;
    constructor(accountHolder){
        this.accountHolder = accountHolder;
        this.#balance = 0;
    }

    deposite(amount){
        if(amount>0){
            this.#balance += amount;
            console.log(`amount deposite of this ${amount}`);
        }
        else{
            console.log(`Invalid amount please enter correct amount...`);
        }
    }


    withdraw(amount){
        if(amount<= this.#balance){
            this.#balance -= amount;
            console.log(`amount withdraw of ${amount}`);
        }
        else{
            console.log(`Aukat se jyada amount mat dal`);
        }
    }

    checkBalance(){
        console.log(`remaining balance is ${this.#balance}`);
    }
}

const accNo_1 = new BankAccount("shweta");
accNo_1.deposite(100);
accNo_1.deposite(1000);
accNo_1.withdraw(500);
accNo_1.checkBalance();