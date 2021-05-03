import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

public class Spaceship {

  public static final String INPUT_FILE = "src/main/resources/crewManifest.txt";
  public static final String LOG_FILE = "src/main/resources/captainLog.txt";

  public static void main(String[] args) throws IOException {
    try {
      Scanner s = new Scanner(new File(INPUT_FILE));
      ArrayList<String> crewList = new ArrayList<>();
      while (s.hasNextLine()) {
        crewList.add(s.nextLine());
      }
      s.close();
      for (String name : crewList) {
        if (name.contains("Captain")) {
          System.out.println("\nWelcome aboard! I am " + name + " and we'll be on our way shortly.\n");
        }
      }
      System.out.println("Checking Crew list");
      System.out.println("===================");
      for (String name : crewList) {
        if (!name.contains("Captain")) {
          System.out.println(name);
        }
      }

    } catch (FileNotFoundException e) {
      File manifestList = new File(INPUT_FILE);
      System.out.println("File not found: " + manifestList.getAbsolutePath());
    }

    File captainLog = new File(LOG_FILE);

    if (captainLog.exists()) {
      try {
        String content = new Scanner(captainLog).useDelimiter("\\z").next();
        System.out.println("\nCaptain's Log");
        System.out.println("==============");
        System.out.println(content);
      } catch (FileNotFoundException e) {
//        File captainLog = new File(LOG_FILE);
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
