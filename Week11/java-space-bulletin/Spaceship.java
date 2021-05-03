import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Spaceship {

  public static final String INPUT_FILE = "./crewManifest.txt";
  public static final String LOG_FILE = "./captainLog.txt";

  public static void main(String[] args) throws IOException {
    try {
      File manifestList = new File(INPUT_FILE);
      String content = new Scanner(manifestList).useDelimiter("\\z").next();
      System.out.println("Checking Crew list");
      System.out.println("===================");
      System.out.println(content);
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
        // File captainLog = new File(LOG_FILE);
        System.out.println("File not found: " + captainLog.getAbsolutePath());
      }
    }

    Scanner scanner = new Scanner(System.in);
    System.out.println("Leave a message in the Captain's Log:");
    String logEntry = scanner.nextLine();
    FileWriter fileWriter = new FileWriter(captainLog, true);
    fileWriter.write(logEntry + "\n");
    fileWriter.close();

  }
}
