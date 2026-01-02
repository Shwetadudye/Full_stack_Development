/*Create a menu-driven program with **switch–case** to simulate an **ATM machine** (Check Balance, Deposit, Withdraw, Exit).*/

let balance = 2000;
let choice = 3;
let amount = 1000;

switch(choice){
    case 1 :
        console.log("your current balance is " +balance);
        break;
    case 2 :
        if (amount >0){
            balance+=amount
            console.log("Your amount is deposited");
            console.log("Updated balance "+balance);
        }else{
            console.log("Invalid deposit");
        }break;
    case 3:
        if (amount>0 && amount<=balance){
            balance-=amount
            console.log("Sucessfully withdraw amount");
            console.log("remaining balance " +balance);
        }else if (amount> balance){
            console.log("Invalid balance");
        }else {
            console.log("Invalid withdraw");
        }
        break;
    case 4:
        console.log("Thank you for using ATM Good -bye");
        break;
    default :
        console.log ("Invalid choice ,please enter number between 1 to 4");
        break;
}