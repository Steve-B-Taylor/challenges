public class BankAccount {

  private String accountNumber;
  private double balance;

  public BankAccount(String accountNumber) {
    this.accountNumber = accountNumber;
  }

  public BankAccount(String accountNumber, double balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public double getBalance() {
    return this.balance;
  }

  public String getAccountNumber() {
    return this.accountNumber;
  }

  public double withdrawal(double withdrawalAmount) {

    if (getBalance() < withdrawalAmount) {
      System.out.println("Sorry, you do not have enough funds to make this withdrawal");
      return 0;
    } else {
      System.out.println("You are withdrawing " + withdrawalAmount + " from your account.");
      this.balance -= withdrawalAmount;
      return getBalance();
    }
  }

  public void deposit(double depositAmount) {
    this.balance += depositAmount;
  }

}
