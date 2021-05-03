import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
  public static void main(String[] args) {
    EntityManagerFactory emf =
        Persistence.createEntityManagerFactory("com.launchacademy.quotes");
    EntityManager em = emf.createEntityManager();

    try {
      Author author = new Author();
      author.setQuote("The days are just packed");
      author.setAuthor("Bill Watterson");
      author.setSubject("Ultimate first grader hijinks");
      em.getTransaction().begin();
      em.persist(author);
      em.getTransaction().commit();
    }
    finally {
      em.close();
      emf.close();
    }
  }
}