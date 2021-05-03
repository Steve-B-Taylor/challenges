import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Seeder {

  public static String CATALOG_FILE_PATH = "catalog.json";

  public static void main(String[] args) throws IOException {
    ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
    InputStream stream = classLoader.getResourceAsStream(CATALOG_FILE_PATH);

    ObjectMapper mapper = new ObjectMapper();
    List<Product> products =
        mapper.readValue(stream, new TypeReference<ArrayList<Product>>() {
        });

    EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.launchacademy.products");
    EntityManager em = emf.createEntityManager();

    try {
      em.getTransaction().begin();
      for (Product prod : products) {
        em.persist(prod);
      }

      em.getTransaction().commit();

    } finally {
      em.close();
      emf.close();
    }

  }
}
