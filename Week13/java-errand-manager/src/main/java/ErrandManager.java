import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class ErrandManager {

  public static void main(String[] args) throws IOException {
    File todoFile = new File ("src/main/resources/todo.txt");
    Scanner scanner = new Scanner(todoFile);
    ArrayList<String> todoList = new ArrayList<String>();
    while (scanner.hasNextLine()) {
      todoList.add(scanner.nextLine());
    }
    todoList.add(todoList.indexOf("buy groceries"), "Go to ATM");
    System.out.println("List: " + todoList);

    Map<String, String> todoMap = new HashMap<String, String>();
    for (String task : todoList) {
      todoMap.put(task, "pending");
    }
    todoMap.put("trim hedges", "complete");
    System.out.println("Map: " + todoMap);

    File groceryFile = new File ("src/main/resources/groceries.json");
    Map <String, Integer> groceryMap = new HashMap<String, Integer>();
    ObjectMapper mapper = new ObjectMapper();
    try {
      groceryMap = mapper.readValue(groceryFile, HashMap.class);
    } catch (IOException exception) {
      exception.printStackTrace();
    }
    groceryMap.put("Loaf of Bread", 1);
    groceryMap.put("Gallon of Milk", 1);
    System.out.println("Grocery List(Map): " + groceryMap);

    File pricesFile = new File ("src/main/resources/grocery_prices.json");
    Map <String, Integer> pricesMap = new HashMap <>();
    try {
      pricesMap = mapper.readValue(pricesFile, HashMap.class);
    } catch (IOException exception) {
      exception.printStackTrace();
    }
    System.out.println("Grocery Prices: " + pricesMap);

    int total = 0;
    Set<String> items = groceryMap.keySet();
    for (String item : items) {
      int itemPrice = 0;
      int itemQuantity = 0;
        if (pricesMap.get(item) != null || pricesMap.get(item) != 0) {
        itemPrice = pricesMap.get(item);
      }
      if (groceryMap.get(item) != null || groceryMap.get(item) != 0) {
        itemQuantity = groceryMap.get(item);
      }
      total += itemQuantity * itemPrice;
    }

    System.out.println("Total price (in cents): " + total);
    double totalDollars = total / 100 + 1;
    todoMap.remove("Go to ATM");
    todoMap.put("get $" + totalDollars + " from atm", "pending");
    System.out.println("ToDo Map: " + todoMap);

    Map<String, Double> streetsHash = new HashMap<String, Double>();
    try {
      byte[] mapData = Files.readAllBytes((Paths.get("src/main/resources/streets.json")));
      streetsHash = mapper.readValue(mapData, HashMap.class);
    } catch (IOException exception) {
      exception.printStackTrace();
    }

    System.out.println(streetsHash);

    List<String> option1 = new ArrayList<>();
    option1.add("South St");
    option1.add("Forest St");
    option1.add("Vernon St");
    option1.add("South St");

    List<String> option2 = new ArrayList<>();
    option2.add("South St");
    option2.add("Forest St");
    option2.add("Sally Way");
    option2.add("Sally Way");
    option2.add("South St");

    System.out.println("Route 1: " + runDistance(option1, streetsHash));
    System.out.println("Route 2: " + runDistance(option2, streetsHash));

  }

  public static double runDistance(List<String> listRun, Map<String, Double> streetDistance) {
    double counter = 0.0;
    for (String route : listRun) {
      counter += streetDistance.get(route);
    }
    return counter;
  }

}
