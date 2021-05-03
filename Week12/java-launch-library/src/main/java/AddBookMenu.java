import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class AddBookMenu {

  private List<Book> books;

  AddBookMenu(List<Book> books) {
    this.books = books;
    System.out.println("Add a new book...\n");
    System.out.println(this.toString());

    Book selectedBook = null;

    do {
      System.out.println("What book would you like to add?");
      String scanner = new String(String.valueOf(System.in));
      books.add(new Book(scanner));
    } while (selectedBook == null);
    System.out.println("You checked out " + selectedBook.toString() + "\n");
    System.out.println("Books remaining in the Library");
    System.out.println(this.toString());
    return selectedBook;
  }

  public String toString() {
    String bookOutput = "";
    for (int i = 0; i < this.books.size(); i++) {
      bookOutput += i + ". " + this.books.get(i).toString() + "\n";
    }
    return bookOutput;
  }
}

