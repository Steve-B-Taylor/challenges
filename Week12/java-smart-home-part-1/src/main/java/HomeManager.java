import java.util.Scanner;

public class HomeManager {

  public static final String ADD_A_DEVICE_TEXT = "Add a Device";
  public static final String MANAGE_DEVICE_TEXT = "Manage Device";
  public static final String VIEW_STATUS_TEXT = "View Status";
  public static final String TURN_ON_ALL_TEXT = "Turn on all devices";
  public static final String TURN_OFF_ALL_TEXT = "Turn off all devices";
  public static final String QUIT_PROGRAM_TEXT = "Quit";

  public enum MenuOption {
    a(ADD_A_DEVICE_TEXT),
    m(MANAGE_DEVICE_TEXT),
    s(VIEW_STATUS_TEXT),
    o(TURN_ON_ALL_TEXT),
    x(TURN_OFF_ALL_TEXT),
    q(QUIT_PROGRAM_TEXT);

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
    for (MenuOption option : MenuOption.values()) {
      output += option.toString();
    }
    return output;
  }

  public static void mainMenuPrompt() {
    System.out.println("Smart Home Main Menu");
    System.out.println("=========================\n");
    HomeManager menu = new HomeManager();

    MenuOption selectedOption = null;
    do {
      System.out.println(menu.toString());
      System.out.println("> ");
      Scanner scanner = new Scanner(System.in);
      try {
        selectedOption = MenuOption.valueOf(scanner.next());
      } catch (IllegalArgumentException error) {
        System.out.println("Please make a valid selection.");
      }

      if (selectedOption == MenuOption.a) {
        // Add a device
      } else if (selectedOption == MenuOption.m) {
        // Manage a specific device
      } else if (selectedOption == MenuOption.s) {
        // View Status of all devices
      } else if (selectedOption == MenuOption.o) {
        // Power on all devices
      } else if (selectedOption == MenuOption.x) {
        // Power off all devices
      }

    } while (selectedOption != MenuOption.q);
    System.out.println("Quitting program.");

  }

}
