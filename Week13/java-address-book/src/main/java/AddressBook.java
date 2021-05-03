import java.util.Scanner;

public class AddressBook {
  public static final String ADD_CONTACT_TEXT = "Add a contact";
  public static final String LOOK_UP_CONTACT_TEXT = "Look up a contact";
  public static final String QUIT_TEXT = "Quit";

  public enum MenuOption {
    a(ADD_CONTACT_TEXT),
    l(LOOK_UP_CONTACT_TEXT),
    q(QUIT_TEXT);

    private String optionText;

    MenuOption(String optionText) {
      this.optionText = optionText;
    }

    public String toString() {
      return this.name() + ") " + this.optionText;
    }
  }

  public void promptUntilQuit() {
    System.out.println("Launch Celebrenerd Address Book");
    System.out.println(this.toString());
    MenuOption input = null;
    Scanner scanner = new Scanner(System.in);
    do{
      System.out.print("> ");
      try {
        input = MenuOption.valueOf(scanner.next());
      } catch(IllegalArgumentException error) {
        System.out.println("Please make a valid selection!");
      }

      if(input == MenuOption.a) {
        //allow the user to add a book to the library
        AddContact addMenu = new AddContact();
        addMenu.addAContact();
      }
      else if(input == MenuOption.l) {
        //allow the user to check out a book from the library
      }
      System.out.println(this.toString());
    } while(input != MenuOption.q);
    System.out.println("Goodbye! Come again.");
//    scanner.close();
  }

  @Override
  public String toString() {
    String output = "";
    for(MenuOption option : MenuOption.values()) {
      output += option.toString() + "\n";
    }
    return output;
  }
}
