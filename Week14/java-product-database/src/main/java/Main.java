import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Main {
  public static void main(String[] args) {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.launchacademy.products");
    EntityManager em = emf.createEntityManager();

    try {
//      Product prod1 = new Product();
//      Product prod2 = new Product();
//      Product prod3 = new Product();
//      prod1.setName("Rubber Duck");
//      prod1.setDescription("Your resident conversationalist");
//      prod1.setPrice(4.99);
//      prod1.setFeatured(true);
//      prod1.setCategory_name("Toys");
//
//      prod2.setName("Engineering Journal");
//      prod2.setDescription("Record your observations and thoughts as you work through coding projects");
//      prod2.setPrice(7.99);
//      prod2.setFeatured(true);
//      prod2.setCategory_name("Productivity");
//
//      prod3.setName("Sleep Mask");
//      prod3.setDescription("Get your Z's in so that you can code well in the morning");
//      prod3.setPrice(9.99);
//      prod3.setFeatured(false);
//      prod3.setCategory_name("Productivity");
//
//      em.getTransaction().begin();
//      em.persist(prod1);
//      em.persist(prod2);
//      em.persist(prod3);
//      em.getTransaction().commit();
    }
    finally {
      em.close();
      emf.close();
    }

//    String[] args = new String[""];
  }
}