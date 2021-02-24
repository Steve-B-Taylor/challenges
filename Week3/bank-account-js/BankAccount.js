class BankAccount {
  constructor(balance, transactions) {
    this.balance = balance;
    this.transactions = [];
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
  getCurrentBalance() {
    this.transactions.forEach((transaction) => {
      if (transaction > 0) {
        console.log(`Deposited $${transaction.toFixed(2)}`);
      } else {
        console.log(`Withdrew $${transaction.toFixed(2)}`);
      }
      this.balance += transaction;
    });
    return this.balance;
  }
}

export default BankAccount;
