//import java.io.File;
//import java.io.FileWriter;
//import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class MainMenu {
  public static final String ADD_BOOK_TEXT = "Contribute a book";
  public static final String CHECKOUT_TEXT = "Check out a book";
  public static final String RETURN_BOOK_TEXT = "Return a book";
  public static final String QUIT_TEXT = "Quit";
//  public static final String LOG_FILE = "library.txt";

  public enum MenuOption {
    a(ADD_BOOK_TEXT),
    c(CHECKOUT_TEXT),
    r(RETURN_BOOK_TEXT),
    q(QUIT_TEXT);

    private String optionText;

    MenuOption(String optionText) {
      this.optionText = optionText;
    }

    public String toString() {
      return this.name() + ") " + this.optionText + "\n";
    }

  }

  public String toString() {
    String output = "MAIN MENU\n";
    for(MenuOption option : MenuOption.values()) {
      output += option.toString();
    }
    return output;
  }

  public static List<Book> getInitialBooksFromLibrary() {
    List<Book> books = new ArrayList<Book>();
    books.add(new Book("The Hobbit"));
    books.add(new Book("Calvin and Hobbes"));
    return books;
  }

  public static void promptUntilQuit() {
    System.out.println("Welcome to the Launch Community Library!\n");
    MainMenu menu = new MainMenu();

    List<Book> booksInLibrary = MainMenu.getInitialBooksFromLibrary();

    MenuOption selectedOption = null;
    do {
      System.out.println(menu.toString());
      System.out.print("> ");
      Scanner scanner = new Scanner(System.in);
      try {
        selectedOption = MenuOption.valueOf(scanner.next());
      } catch (IllegalArgumentException error) {
        System.out.println("Please make a valid selection.");
      }

      if (selectedOption == MenuOption.a) {
        //allow the user to add a book to the library
        AddBookMenu addBookMenu = new AddBookMenu(booksInLibrary);
      } else if (selectedOption == MenuOption.c) {
        //allow the user to check out a book from the library
        CheckoutMenu checkoutMenu = new CheckoutMenu(booksInLibrary);
        checkoutMenu.promptUntilDone();
      } else if (selectedOption == MenuOption.r) {
        //allow the user to return a book to the library
      }

    } while (selectedOption != MenuOption.q);
    System.out.println("Thanks! Come to the library again.");
  }

}