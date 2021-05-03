import java.util.*;
import java.util.Random;
import java.util.Scanner;

public class GuessTheNumber {
  public static final int NUMBER_CEILING = 10;
  public static int getRandom() {
    Random random = new Random();
    return random.nextInt(NUMBER_CEILING);
  }

  public void play() {
    int randomNum = getRandom();
    Scanner scanner = new Scanner(System.in);

    System.out.println("Hint... the secret number is: " + randomNum);
    System.out.println("Guess a number (between 0 and 9):");
    try {
      int userGuess = scanner.nextInt();
      if (userGuess < 0 || userGuess > 9) {
        System.out.println("You need to guess between 0 and 9");
      } else if (userGuess == randomNum) {
        System.out.println("Good guess!  You got it!");
      } else {
        System.out.println("Sorry, the number was: " + randomNum);
      }

    } catch (InputMismatchException e) {
      System.out.println("Please enter a number, not text");
    }

  }

  public static void main(String[] args) {
    // System.out.println(randomNum);
    new GuessTheNumber().play();
    // your code here
  }

}
