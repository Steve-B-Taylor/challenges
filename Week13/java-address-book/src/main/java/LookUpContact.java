import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class LookUpContact {
  public static final String ENTER_CONTACT_NAME_TEXT = "Enter contact name";
  public static final String QUIT_TEXT = "Quit";

  public enum LookUpOption {
    n(ENTER_CONTACT_NAME_TEXT),
    q(QUIT_TEXT);

    private String lookUpContactText;

    LookUpOption(String addContactText) {
      this.lookUpContactText = addContactText;
    }

    public String toString() {
      return this.name() + ") " + this.lookUpContactText;
    }
  }

  public void addAContact() {
    Map<String, String> celebreNerd = new HashMap<String, String>();
    System.out.println("Look up a contact:");
    System.out.println(this.toString());
    LookUpOption input = null;
    Scanner sc = new Scanner(System.in);
    do{
      System.out.print("> ");
      try {
        input = LookUpOption.valueOf(sc.next());
      } catch(IllegalArgumentException error) {
        System.out.println("Please make a valid selection!");
      }

      if(input == LookUpOption.n) {
        Scanner scNerd = new Scanner(System.in);
        do{
          System.out.println("Enter a name to add:");
          System.out.print("> ");
          try {
            String name = scNerd.next();
            System.out.println(celebreNerd.get(name));
          } catch(IllegalArgumentException error) {
            System.out.println("Please make a valid selection!");
          }
        } while(input != LookUpOption.q);
        System.out.println("Returning to Main Menu...");
      }
      System.out.println(this.toString());
    } while(input != LookUpOption.q);
    System.out.println("Returning to Main Menu...");
//    sc.close();
  }
  @Override
  public String toString() {
    String output = "";
    for(LookUpOption option : LookUpOption.values()) {
      output += option.toString() + "\n";
    }
    return output;
  }
}
