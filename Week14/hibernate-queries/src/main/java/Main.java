import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import java.util.List;
import javax.persistence.Query;
import javax.persistence.TypedQuery;

public class Main {

  public static void main(String[] args) {
    EntityManagerFactory emf =
        Persistence.createEntityManagerFactory("com.launchacademy.movies");
    EntityManager em = emf.createEntityManager();

    try {
      // Create
      Movie movie = new Movie();
      movie.setTitle("Tequila Mockingbird");
      movie.setGenreId(2L);
      movie.setYear(2025);
      em.getTransaction().begin();
      em.persist(movie);
      em.getTransaction().commit();

      System.out.println(movie.getTitle());

      // Add value we didn't originally insert
//      TypedQuery<Movie> retrieval = em.createQuery("SELECT m FROM Movie m WHERE title = 'Tequila Mockingbird'", Movie.class);
//      Movie bestEver = retrieval.getResultList().get(0);
//
//      em.getTransaction().begin();
//      bestEver.setRating(100);
//      em.getTransaction().commit();

      // Update a value
//      em.getTransaction().begin();
//      Query updateQuery = em.createQuery("UPDATE Movie SET rating = :newRating WHERE title = 'Tequila Mockingbird'");
//      updateQuery.setParameter("newRating", 400);
//      int updateCount = updateQuery.executeUpdate();
//      em.getTransaction().commit();

      // Delete an entity
//      TypedQuery<Movie> retrieval = em.createQuery("SELECT m FROM Movie m WHERE title = 'Tequila Mockingbird'", Movie.class);
//      Movie bestEver = retrieval.getResultList().get(0);
//
//      em.getTransaction().begin();
//      em.remove(bestEver);
//      em.getTransaction().commit();


      // Delete using JPQL
//      em.getTransaction().begin();
//      Query deleteQuery = em.createQuery("DELETE FROM Movie WHERE title = 'Tequila Mockingbird'");
//      int deleteCount = deleteQuery.executeUpdate();
//      em.getTransaction().commit();
    }
    finally {
      em.close();
      emf.close();
    }
  }
}