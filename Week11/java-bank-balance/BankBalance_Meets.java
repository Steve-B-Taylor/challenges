import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class BankBalance_Meets {

  public static final String FRY_BALANCE_PATH = "./fry.txt";

  public static void main(String[] args) throws FileNotFoundException {
    File fryTransactions = new File(FRY_BALANCE_PATH);
    Scanner scanner = new Scanner(fryTransactions);

    int fryTotalBalance = 0;
    int withdrawalCount = 0;
    int avgWithdrawal = 0;
    int largestDeposit = Integer.MIN_VALUE;

    while (scanner.hasNextInt()) {
      int nextTransaction = scanner.nextInt();
      fryTotalBalance += nextTransaction;

      if (nextTransaction < 0) {
        withdrawalCount++;
        avgWithdrawal += nextTransaction;
      }

      if (nextTransaction > largestDeposit) {
        largestDeposit = nextTransaction;
      }
    }

    System.out.println("Fry's total balance: " + fryTotalBalance);
    System.out.println("Average Withdrawal size: " + avgWithdrawal / withdrawalCount);
    System.out.println("Largest deposit was: " + largestDeposit);

    Scanner carScan = new Scanner(System.in);
    System.out.print("OK, bigshot... so you wanna buy a car.  How much is it? ");
    int carAmount = carScan.nextInt();
    while (carAmount > fryTotalBalance) {
      System.out.print(
          "That's too much!  Maybe you should go for that moped over there (or find something a lottle (not a typo)) cheaper? ");
      carAmount = carScan.nextInt();
    }
    System.out.println("Alright, here's your new car!");
  }
}