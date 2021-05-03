import java.util.List;
import java.util.Scanner;
import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

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
        boolean orderFilled = false;
        while (!orderFilled) {
          System.out.println("What is the name of the product?");
          String productName = scanner.next();

          System.out.println("What is the price?");
          double productPrice = scanner.nextDouble();

          System.out.println("What is the url?");
          String productUrl = scanner.next();

          System.out.println("What is the category?");
          String categoryName = scanner.next();
          if (categoryName.isBlank() || categoryName.equalsIgnoreCase("none")) {
            categoryName = "none";
          }

          TypedQuery<Category> catQuery = em.createQuery("SELECT c from Category c WHERE name LIKE '%" + categoryName + "'", Category.class);
          List<Category> categories = catQuery.getResultList();
          Category prodCategory = new Category();
          if (categories.size() > 0) {
            prodCategory = categories.get(0);
            System.out.println("Enter a valid category (or none)");
          } else {
            prodCategory.setName(categoryName.toLowerCase());
            em.getTransaction().begin();
            em.persist(prodCategory);
            em.getTransaction().commit();
          }

          // create and persist the product
          Product newProduct = new Product();
          newProduct.setName(productName);
          newProduct.setPrice(productPrice);
          newProduct.setUrl(productUrl);
          newProduct.setCategory(prodCategory);

          ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
          Validator validator = factory.getValidator();
          Set<ConstraintViolation<Product>> violations = validator.validate(newProduct);
          if (violations.size() > 0) {
            for (ConstraintViolation<Product> violation : violations) {
              System.out.println(violation.getPropertyPath() + ": " + violation.getMessage());
            }
          } else {
            System.out.println("Adding your " + productName + " to the Products database...");
            em.getTransaction().begin();
            em.persist(newProduct);
            em.getTransaction().commit();
            orderFilled = true;
          }
        }

      } else if (input == MenuOption.b) {
      // retrieve a list of all products
        TypedQuery<Product> query = em.createQuery("SELECT p from Product p ORDER BY name", Product.class);
        List<Product> products = query.getResultList();
        for (Product product : products) {
          System.out.print(product.getName() + "\t\t$" + product.getPrice() + "\t\t" + product.getCategory().getName() + "\t" + product.getUrl() + "\n");
        }
      }

    } while (input != MenuOption.c);
    em.close();
    emf.close();
    System.out.println("Thanks! Come back soon ya hear!");
  }
}
