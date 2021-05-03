
import java.util.List;
import java.util.Scanner;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class Menu {

  public static final String ADD_A_PRODUCT = "Add a Product";
  public static final String LIST_ALL_PRODUCTS = "Display all products";
  public static final String QUIT_TEXT = "Quit";

  public enum MenuOption {
    a(ADD_A_PRODUCT),
    b(LIST_ALL_PRODUCTS),
    c(QUIT_TEXT);

    private final String optionText;

    MenuOption(String optionText) {
      this.optionText = optionText;
    }

    public String toString() {
      return this.name() + ". " + this.optionText;
    }
  }

  @Override
  public String toString() {
    String output = "";
    for (MenuOption option : MenuOption.values()) {
      output += option.toString() + "\n";
    }
    return output;
  }

  public void promptUntilDone() {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.launchacademy.wishlist");
    EntityManager em = emf.createEntityManager();
    MenuOption input = null;
    Scanner scanner = new Scanner(System.in);
    do {
      System.out.println(this.toString());
      System.out.print("> ");
      try {
        input = MenuOption.valueOf(scanner.next());
      } catch (IllegalArgumentException error) {
        System.out.println("Please choose a valid option.");
      }

      if (input == MenuOption.a) {
        System.out.println("What is the name of the product?");
        String productName = scanner.next();

        System.out.println("What is the price?");
        double productPrice = scanner.nextDouble();

        System.out.println("What is the url?");
        String productUrl = scanner.next();

        System.out.println("What category do you want to add this to (ENTER for none)?");
        String categoryName = scanner.next();

      // create and persist the product
        Product newProduct = new Product();
        newProduct.setName(productName);
        newProduct.setPrice(productPrice);
        newProduct.setUrl(productUrl);

        Category newCategory = new Category();
        newCategory.setName(categoryName);

        System.out.println(categoryName);
        System.out.println(newCategory.getName());
        System.out.println(newCategory.getId());

        // get category_id
        TypedQuery<Category> cIdQuery = em.createQuery("SELECT c from Category c WHERE name=:categoryName", Category.class);
        cIdQuery.setParameter("categoryName", categoryName);
        List<Category> names = cIdQuery.getResultList();
//        Long cId = newCategory.getId();
        for (Category name : names) {
          System.out.print(name.getName() + " $" + name.getId());
        }
//        newProduct.getCategory();

        em.getTransaction().begin();
        em.persist(newCategory);
        em.getTransaction().commit();

        em.getTransaction().begin();
        em.persist(newProduct);
        em.getTransaction().commit();

        System.out.println(newProduct.getId());
      } else if (input == MenuOption.b) {
      // retrieve a list of all products
        TypedQuery<Product> query = em.createQuery("SELECT p from Product p ORDER BY name", Product.class);
        List<Product> products = query.getResultList();
        for (Product product : products) {
          System.out.print(product.getName() + " $" + product.getPrice() + " " + product.getUrl());

        }

//        Product product = (Product) em.createQuery("SELECT p from Product p", Product.class);
//        Category addCategory = product.getCategory();
//        System.out.println(addCategory.getName());

      }
    } while (input != MenuOption.c);
    em.close();
    emf.close();
    System.out.println("Thanks! Come back soon ya hear!");
  }
}
