import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class SWAnalyzer {

  public static void main(String[] args) throws IOException {

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

    File lastNamesJson = new File ("src/main/resources/last-names.json");
    Map<String, String> fullNameMap = new HashMap<String, String>();
    ObjectMapper mapper = new ObjectMapper();
    try {
      fullNameMap = mapper.readValue(lastNamesJson, HashMap.class);
    } catch (IOException io) {
      io.printStackTrace();
    }
    System.out.println("fullNameMap: " + fullNameMap);
    Set<String> names = charMap.keySet();
    for (String name : names) {
      charMap.put(name, fullNameMap.get(name));
    }
    System.out.println("charMap (with updated last names):\n" + charMap);

    charMap.remove("Obi-Wan", "Kenobi");
    System.out.println("charMap (without Obi-Wan):\n" + charMap);

    System.out.print("Names with \"L\": ");
    for (String name : names) {
      if (name.contains("L")) {
        System.out.print(charMap.get(name) + " ");
      }
      if (charMap.get(name).contains("Antilles")) {
        System.out.print("\nKey for Antilles: " + name);
      }
    }

    System.out.println("\n\n================== Meets above, Exceeds below ==================\n");

    File eCharFile = new File ("src/main/resources/characters.json");
    File hexColorsFile = new File ("src/main/resources/hex-colors.json");
    File modCharFile = new File ("src/main/resources/modified_characters.json");
    List<HashMap<String, String>> eCharMap = new ArrayList<HashMap<String, String>>();
    List<String> blueEyesList = new ArrayList<String>();
    Map<String, String> birthYearMap = new HashMap<String, String>();
    Map<String, String> hexMap = new HashMap<String, String>();
    try {
      eCharMap = mapper.readValue(eCharFile, ArrayList.class);
      hexMap = mapper.readValue(hexColorsFile, HashMap.class);
    } catch (IOException io) {
      io.printStackTrace();
    }
    int maleCount = 0;
    int femaleCount = 0;
    int unkGenderCount = 0;
    for (Map<String, String> stat : eCharMap) {
      if (stat.get("eye_color").equals("blue")) {
        blueEyesList.add(stat.get("name"));
      }
      if (stat.get("gender").equals("male")) {
        maleCount++;
      } else if (stat.get("gender").equals("female")) {
        femaleCount++;
      } else {
        unkGenderCount++;
      }
      birthYearMap.put(stat.get("name"), stat.get("birth_year"));
      if (hexMap.containsKey(stat.get("eye_color"))) {
        stat.put("eye_color_hex_value", hexMap.get(stat.get("eye_color")));
      }
    }

    System.out.println("Characters with blue eyes: " + blueEyesList);
    System.out.println("Birthyear HashMap:\n" + birthYearMap);
    System.out.println("Biggs Darklighter's birth year: " + birthYearMap.get("Biggs Darklighter"));
    System.out.println("Gender breakdown:");
    System.out.println("male: " + maleCount);
    System.out.println("female: " + femaleCount);
    System.out.println("unknown: " + unkGenderCount);
    mapper.writeValue(modCharFile, eCharMap);

  }
}
