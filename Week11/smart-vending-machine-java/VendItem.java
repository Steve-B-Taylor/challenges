import java.io.IOException;
import java.util.Scanner;

public class VendItem {

  public static void main(String[] args) throws IOException {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Hello, I'm the first and only Talking Vending Machine. ");
    System.out.println("What would you like today? ");
    String vendItem = scanner.next();
    System.out.println("How many " + vendItem + " would you like? ");
    String itemQuantity = scanner.next();
    try {
      int number = Integer.parseInt(itemQuantity);
      if (number < 1) {
        System.out.println(
            "You selected an item, but not a quantity. Please come back when you can decide on both");
      } else {
        System.out.println("Thank you, here are your " + itemQuantity + " " + vendItem);
      }
    } catch (NumberFormatException e) {
      System.out.println("Please enter a number, not text");
    }
  }
}