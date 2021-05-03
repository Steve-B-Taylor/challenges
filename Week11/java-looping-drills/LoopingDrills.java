import java.util.Scanner;

public class LoopingDrills {

  public static void main(String[] args) {
//  Part 1
//    for (int i = 1000; i > 711; i--) {
//      if (i % 15 != 0) {
//        System.out.println(i);
//      }
//    }

//  Part 2
//    Scanner scanner = new Scanner(System.in);
//    System.out.println("Enter a number:");
//    int startingNum = scanner.nextInt();
//    System.out.println("Enter a second number (larger than the first)");
//    int endingNum = scanner.nextInt();
//    int sum = 0;
//    for (int i = startingNum+1; i < endingNum; i++) {
//      sum += i;
//    }
//    System.out.println(sum);

//  Part 3
//    Scanner mScanner = new Scanner(System.in);
//    System.out.println("Enter a number:");
//    int numToTimes = mScanner.nextInt();
//    for (int i = 1; i < 13; i++) {
//      System.out.print(i * numToTimes + " ");
//    }

//  Part 4
//    Scanner oddScanner = new Scanner(System.in);
//    String oddNum = "";
//    while (!oddNum.equals("exit")) {
//      System.out.println("Enter a number:");
//      try {
//        oddNum = oddScanner.next();
//        int num = Integer.parseInt(oddNum);
//        if (num % 2 == 0) {
//          System.out.println(oddNum + " is even");
//        } else {
//          System.out.println(oddNum + " is odd");
//        }
//      } catch (NumberFormatException e) {
//        if (!oddNum.equals("exit")) {
//          System.out.println("Please enter a number, not text.");
//        }
//        if (oddNum.equals("exit")) {
//          System.out.println("Goodbye.");
//        }
//      }
//    }

//  Part 5
    Scanner pScanner = new Scanner(System.in);
    System.out.println("Enter a number:");
    int primeCheck = pScanner.nextInt();
    boolean isPrime = true;

    int i = 2;
    while (i <= primeCheck / 2) {
      if (primeCheck % i == 0) {
        isPrime = false;
        break;
      }
      i++;
    }

    if (isPrime) {
      System.out.println(primeCheck + " is Prime");
    } else {
      System.out.println(primeCheck + " is not Prime");
    }

  }
}