import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;

public class SWAnalyzer {


  public static void main(String[] args) throws FileNotFoundException {
    File charFile = new File ("src/main/resources/characters.txt");
    Scanner sc = new Scanner (charFile);
    List<String> charList = new ArrayList<String>();
    while (sc.hasNextLine()) {
      charList.add(sc.nextLine());
    }
    System.out.println("Characters: " + charList);

    charList.add("Biggs");
    charList.add("Wedge");
    charList.add(charList.indexOf("Leia"), "Darth Vader");
    charList.remove("Han");
    System.out.println("Characters: " + charList);

    Map<String, String> charMap = new HashMap<String, String>();
    for (String first : charList) {
      charMap.put(first, "Unknown");
    }
    System.out.println("charMap: " + charMap);

//    You should use the last-names.json file to populate your list.
    File lastNamesJson = new File ("/src/main/resources/last-names.json");
    
//        Using the keys from your hash of characters update the value for each using the value from the last-names.json
//    Output the updated HashMap

  }
}
