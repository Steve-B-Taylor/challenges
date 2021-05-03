import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

public class Main {

  public static void main(String[] args) {
    Map<String,String> bookList = new HashMap<String, String>();
    Set<String> titles = bookList.keySet();
    Collection<String> authors = bookList.values();
    bookList.put("War of Honor", "David Weber");
    bookList.put("Calvin and Hobbes", "Bill Watterson");

//    for(String title : titles) {
//      System.out.println(title);
//    }
//
//    for(String author : authors) {
//      System.out.println(author);
//    }

    for(Map.Entry<String, String> bookAuthorPair : bookList.entrySet()) {
      String title = bookAuthorPair.getKey();
      String value = bookAuthorPair.getValue();
      System.out.print(title);
      System.out.println(" by " + value);
    }

    for(String title : titles) {
      System.out.println(title + ": " + bookList.get(title));
    }
  }
}
