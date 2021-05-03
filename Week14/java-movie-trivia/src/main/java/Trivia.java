import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

public class Trivia {

  public static void main(String[] args) {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.launchacademy.movie_database");
    EntityManager em = emf.createEntityManager();

    try {
      System.out.println("What titles were released in 2001?");
      TypedQuery<Movies> q1 = em.createQuery("SELECT m FROM Movies m WHERE year = 2001", Movies.class);
      List<Movies> movies1 = q1.getResultList();
      int c1 = 0;
      for (Movies movie : movies1) {
        c1++;
//        System.out.println(movie.getTitle());
      }
      System.out.println("Number of movies release in 2001: " + c1);

      System.out.println("\nWhat titles were released in 2002 and had a rating higher than 90?");
      TypedQuery<Movies> q2 = em.createQuery("SELECT m FROM Movies m WHERE year = 2002 AND rating > 90", Movies.class);
      List<Movies> movies2 = q2.getResultList();
      int c2 = 0;
      for (Movies movie : movies2) {
        c2++;
//        System.out.println(movie.getTitle());
      }
      System.out.println("Number of movies release in 2002 and had a rating higher than 90: " + c2);

      System.out.println("\nWhat actors have the last name of Wilson?");
      TypedQuery<Actors> q3 = em.createQuery("SELECT a FROM Actors a WHERE name LIKE '% Wilson'", Actors.class);
      List<Actors> actors1 = q3.getResultList();
      int c3 = 0;
      for (Actors actor : actors1) {
        c3++;
//        System.out.println(actor.getName());
      }
      System.out.println("Number of actors have the last name of Wilson: " + c3);

      System.out.println("\nWhat actors have the first name of Owen?");
      TypedQuery<Actors> q4 = em.createQuery("SELECT a FROM Actors a WHERE name LIKE 'Owen %'", Actors.class);
      List<Actors> actors2 = q4.getResultList();
      int c4 = 0;
      for (Actors actor : actors2) {
        c4++;
//        System.out.println(actor.getName());
      }
      System.out.println("Number of actors have the first name of Owen: " + c4);

      System.out.println("\nWhat studios start with \"Fox\"?");
      TypedQuery<Studios> q5 = em.createQuery("SELECT s FROM Studios s WHERE name LIKE 'Fox%'", Studios.class);
      List<Studios> studios1 = q5.getResultList();
      int c5 = 0;
      for (Studios studio : studios1) {
        c5++;
//        System.out.println(studio.getName());
      }
      System.out.println("Number of studios that start with \"Fox\": " + c5);

      System.out.println("\nWhat studios involve Disney?");
      TypedQuery<Studios> q6 = em.createQuery("SELECT s FROM Studios s WHERE name LIKE '%Disney%'", Studios.class);
      List<Studios> studios2 = q6.getResultList();
      int c6 = 0;
      for (Studios studio : studios2) {
        c6++;
//        System.out.println(studio.getName());
      }
      System.out.println("Number of studios that involve Disney: " + c6);

      System.out.println("\nWhat were the top 5 rated movies in 2004?");
      TypedQuery<Movies> q7 = em.createQuery("SELECT m FROM Movies m WHERE year = 2004 ORDER BY rating DESC nulls last", Movies.class);
      List<Movies> movies3 = q7.getResultList();
      int c7 = 0;
      for (Movies movie : movies3) {
        c7++;
        if (c7 > 5) {
          break;
        }
        System.out.println(movie.getRating() + " " + movie.getTitle());
      }

      System.out.println("\nWhat were the worst 10 movie titles and their ratings in 2003?");
      TypedQuery<Movies> q8 = em.createQuery("SELECT m FROM Movies m WHERE year = 2003 ORDER BY rating", Movies.class);
      List<Movies> movies4 = q8.getResultList();
      int c8 = 0;
      for (Movies movie : movies4) {
        c8++;
        if (c8 > 10) {
          break;
        }
        System.out.println(movie.getRating() + " " + movie.getTitle());
      }

    }
    finally {
      em.close();
      emf.close();
    }
  }
}
