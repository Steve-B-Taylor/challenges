import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Spaceship {

  public static final String INPUT_FILE = "src/main/resources/crewManifest.txt";

  public static void main(String[] args) throws IOException {
    try {
      Scanner s = new Scanner(new File(INPUT_FILE));
      Map<String, String> crewList = new HashMap<String, String>();
      while (s.hasNextLine()) {
        crewList.put(s.next(), s.nextLine());
      }
      s.close();
      for (Map.Entry<String, String> crewRoleAndName : crewList.entrySet()) {
        String crewName = "";
        if (crewRoleAndName.getKey().endsWith(",")) {
          crewName = crewRoleAndName.getKey().substring(0, crewRoleAndName.getKey().length() - 1);
        }
        System.out.print(crewRoleAndName.getValue() + " (" + crewName + ")\n");
      }
    } catch (FileNotFoundException e) {
      File manifestList = new File(INPUT_FILE);
      System.out.println("File not found: " + manifestList.getAbsolutePath());
    }
  }
}
