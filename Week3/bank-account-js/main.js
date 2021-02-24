import BankAccount from "./BankAccount.js";

const initialBalance = 1000;
const transactions = [-45, -99.95, 60.0, -34.43];
const bankAccount = new BankAccount(initialBalance);
transactions.forEach((transaction) => {
  bankAccount.addTransaction(transaction);
});
console.log(`Current Balance: ${bankAccount.getCurrentBalance()}`);
// your output should be a log of the current balance of the account with all transactions accounted for
