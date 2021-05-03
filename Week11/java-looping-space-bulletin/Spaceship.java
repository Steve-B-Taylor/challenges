import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Spaceship {

  public static final String INPUT_FILE = "./crewManifest.txt";
  public static final String LOG_FILE = "./captainLog.txt";

  public static void main(String[] args) throws IOException {
    try {
      File manifestList = new File(INPUT_FILE);
      Scanner content = new Scanner(manifestList);
      System.out.println("Checking Crew list");
      System.out.println("===================");
      String role = "";

      while (content.hasNext()) {
        role = content.next();
        if (role.equals("Captain")) {
          System.out.print("* " + role);
        } else {
          System.out.print("- " + role);
        }
        System.out.println(content.nextLine());
      }
    } catch (FileNotFoundException e) {
      File manifestList = new File(INPUT_FILE);
      System.out.println("File not found: " + manifestList.getAbsolutePath());
    }
    File captainLog = new File(LOG_FILE);

    if (captainLog.exists()) {
      try {
        String content = new Scanner(captainLog).useDelimiter("\\z").next();
        System.out.println("Captain's Log");
        System.out.println("==============");
        System.out.println(content);
      } catch (FileNotFoundException e) {
        System.out.println("File not found: " + captainLog.getAbsolutePath());
      }
    }

    boolean continueWriting = true;
    FileWriter fileWriter = new FileWriter(captainLog, true);
    Scanner logWrite = new Scanner(System.in);
    System.out.println("Leave a message in the Captain's Log (type 'done' when finished):");

    while (continueWriting) {
      System.out.print("> ");
      String logEntry = logWrite.nextLine();
      if (logEntry.toLowerCase().equals("done")) {
        break;
      }
      fileWriter.write(logEntry + "\n");

    }
    fileWriter.close();

  }
}
