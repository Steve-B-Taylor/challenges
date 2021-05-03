import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonToken;
import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Spaceship {
  private static final String CREW_FILE = "crewManifest.json";
  private static final String INVENTORY_FILE = "inventory.json";
  private static final String REMOVE_INVENTORY_FILE = "removeinventory.json";
  private static final String CAPTAIN = "Captain";

  public static void main(String[] args) throws IOException {
    Map<String, Integer> inventoryMap = new HashMap<String, Integer>();

    File jsonFileCrew = new File("crewManifest.json");
    JsonFactory factory = new JsonFactory();
    JsonParser crewParser = factory.createParser(jsonFileCrew);
    crewParser.nextToken();

    System.out.println("\nCrew:\n======================");
    while(crewParser.nextToken() !=  JsonToken.END_OBJECT) {
      String field = crewParser.getCurrentName();
      JsonToken value = crewParser.nextToken();
      System.out.println("Rank: " + field + ", " + "Name: " + crewParser.getText());
    }

    File jsonFileInv = new File("inventory.json");
    JsonFactory invFactory = new JsonFactory();
    JsonParser invParser = invFactory.createParser(jsonFileInv);
    invParser.nextToken();

    File jsonFileRemoveInv = new File("removeInventory.json");
    JsonFactory removeInvFactory = new JsonFactory();
    JsonParser remParser = removeInvFactory.createParser(jsonFileRemoveInv);

    System.out.println("\nInventory:\n======================");
    while(invParser.nextToken() !=  JsonToken.END_OBJECT) {
      String invKey = invParser.getCurrentName();
      JsonToken invValue = invParser.nextToken();
      int invIntValue = invParser.getIntValue();
      inventoryMap.put(invKey, invIntValue);
    }

    remParser.nextToken();

    while(remParser.nextToken() != JsonToken.END_OBJECT) {
      String remKey = remParser.getCurrentName();
      JsonToken remValue = remParser.nextToken();
      int remIntValue = remParser.getIntValue();
      if (inventoryMap.containsKey(remKey)) {
        inventoryMap.replace(remKey, inventoryMap.get(remKey) - remIntValue);
      }

    }

    for (Map.Entry<String, Integer> entry : inventoryMap.entrySet()) {
      if (entry.getValue() != 0) {
        System.out.println("Item: " + entry.getKey() + ", Count: " + entry.getValue());
      }
    }







  }
}
