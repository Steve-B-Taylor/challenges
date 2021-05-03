import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class AddContact {

  public static final String ENTER_CONTACT_NAME_TEXT = "Enter contact name";
  public static final String ENTER_CONTACT_EMAIL_TEXT = "Enter contact email";
  public static final String QUIT_TEXT = "Quit";

  public enum AddMenuOption {
    n(ENTER_CONTACT_NAME_TEXT),
    e(ENTER_CONTACT_EMAIL_TEXT),
    q(QUIT_TEXT);

    private String addContactText;

    AddMenuOption(String addContactText) {
      this.addContactText = addContactText;
    }

    public String toString() {
      return this.name() + ") " + this.addContactText;
    }
  }

  public void addAContact() {
    Map<String, String> celebreNerd = new HashMap<String, String>();
    System.out.println("Add a contact:");
    System.out.println(this.toString());
    AddMenuOption input = null;
    Scanner sc = new Scanner(System.in);
    do {
      System.out.print("> ");
      try {
        input = AddMenuOption.valueOf(sc.next());
      } catch (IllegalArgumentException error) {
        System.out.println("Please make a valid selection!");
      }

      if (input == AddMenuOption.n) {
        //allow the user to add a book to the library
        Scanner nameEmail = new Scanner(System.in);
        do {
          System.out.println("Enter a name to add:");
          System.out.print("> ");
          String name = nameEmail.nextLine();
          String email = nameEmail.nextLine();
          celebreNerd.put(name, email);
          for (Map.Entry<String, String> nerdLookup : celebreNerd.entrySet()) {
            System.out.println(nerdLookup.getKey() + " " + nerdLookup.getValue());
          }
        } while (input != AddMenuOption.q);
        System.out.println("Returning to Main Menu...");

      } else if (input == AddMenuOption.e) {
        //allow the user to check out a book from the library
      }
      System.out.println(this.toString());
    } while (input != AddMenuOption.q);
    System.out.println("Returning to Main Menu...");
//    sc.close();
  }

  @Override
  public String toString() {
    String output = "";
    for (AddMenuOption option : AddMenuOption.values()) {
      output += option.toString() + "\n";
    }
    return output;
  }
}
