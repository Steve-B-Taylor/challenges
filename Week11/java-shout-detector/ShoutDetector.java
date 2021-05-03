import java.io.IOException;
import java.util.Scanner;

public class ShoutDetector {

  public static void main(String[] args) {
    boolean exit = false;
    while (!exit) {
      Scanner scanner = new Scanner(System.in);
      System.out.println("Hello, What would you like to say?");
      String userText = scanner.nextLine();
      int lotsOfBangs = (userText.split("!", -1).length) - 1;
      int lotsOfQBs = (userText.split("!\\?", -1).length) - 1;
      String userTextUpper = userText.toUpperCase();
      System.out.println("You said: " + userText);

      if (userText == userTextUpper) {
        System.out.println("Please stop yelling at me.");
        exit = false;
      } else if (lotsOfQBs > 1) {
        System.out.println(
            "I don't response to inflammatory questions " + lotsOfQBs);
        exit = false;
      } else if (lotsOfBangs > 1) {
        System.out.println(
            "Please stop yelling at me.  You used " + lotsOfBangs + "!'s... drama much?");
        exit = false;
      } else {
        System.out.println("OK, thanks.");
        exit = true;
      }
    }
  }
}