import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class BankBalance {

  public static void main(String[] args) throws IOException {
    boolean runTransaction = true;

    while (runTransaction) {
      Scanner inFile = new Scanner(System.in);
      System.out.print("Please enter your account file name: ");
      String BALANCE_PATH = inFile.next();
      File balanceFile = new File(BALANCE_PATH);
      String[] fileName = balanceFile.getName().split(".txt");
      String LOG_FILE = fileName[0] + "-results.txt";

      while (!balanceFile.exists()) {
        System.out.println(balanceFile.getAbsolutePath());
        System.out.print("This path does not appear to exist, check spelling and try again: ");
        BALANCE_PATH = inFile.next();
        balanceFile = new File(BALANCE_PATH);
      }

      Scanner scanner = new Scanner(balanceFile);

      int totalBalance = 0;
      int withdrawalCount = 0;
      int avgWithdrawal = 0;
      int largestDeposit = Integer.MIN_VALUE;

      while (scanner.hasNextInt()) {
        int nextTransaction = scanner.nextInt();
        totalBalance += nextTransaction;

        if (nextTransaction < 0) {
          withdrawalCount++;
          avgWithdrawal += nextTransaction;
        }

        if (nextTransaction > largestDeposit) {
          largestDeposit = nextTransaction;
        }
      }

      System.out.println("Total Balance: " + totalBalance);
      System.out.println("Average Withdrawal: " + avgWithdrawal / withdrawalCount);
      System.out.println("Largest deposit: " + largestDeposit);

      File writeAccount = new File(LOG_FILE);
      FileWriter fileWriter = new FileWriter(writeAccount);

      Scanner carScan = new Scanner(System.in);
      System.out.print("OK, bigshot... so you wanna buy a car.  How much is it? ");
      int carAmount = carScan.nextInt();
      while (carAmount > totalBalance) {
        System.out.print(
            "That's too much!  Maybe you should go for that moped over there (or find something a lottle (not a typo)) cheaper? ");
        carAmount = carScan.nextInt();
      }
      totalBalance -= carAmount;
      System.out.println("New Balance: " + totalBalance);
      System.out.println("Alright, here's your new car!");
      System.out.println("Saving your account details to: " + LOG_FILE);

      fileWriter.write("Current Balance: " + totalBalance + "\n");
      fileWriter.write("Average Withdrawal: " + avgWithdrawal / withdrawalCount + "\n");
      fileWriter.write("Largest deposit: " + largestDeposit + "\n");
      fileWriter.close();

      System.out.print("Would you like to run another account? ");
      Scanner runScan = new Scanner(System.in);
      String runAgain = runScan.next();
      if (!runAgain.toLowerCase().equals("yes")) {
        runTransaction = false;
      }
    }
  }
}