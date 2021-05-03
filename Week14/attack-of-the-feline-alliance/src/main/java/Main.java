import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class Main {

  public static void main(String[] args) {
//    Blaster blaster = new Blaster();
//    blaster.setName("Vera");
//    blaster.setType("Assault Rifle");
//    blaster.setRechargeTime(15);
//    blaster.setAttachment("Scope");

    LaserCannon laserCannon = new LaserCannon();
    laserCannon.setName("Bertha");
    laserCannon.setRechargeTime(40);
    laserCannon.setFireRate(220);
    laserCannon.setOverload(true);

    ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    Validator validator = factory.getValidator();
    Set<ConstraintViolation<LaserCannon>> violations = validator.validate(laserCannon);
    if(violations.size() > 0) {
      for (ConstraintViolation<LaserCannon> violation : violations) {
        System.out.println(violation.getPropertyPath() + ": " + violation.getMessage());
      }
    }
    else {
      System.out.println("No errors found");
      EntityManagerFactory emf = Persistence.createEntityManagerFactory("com.launchacademy.feline_alliance");
      EntityManager em = emf.createEntityManager();
      em.getTransaction().begin();
      em.persist(laserCannon);
      em.getTransaction().commit();
    }
  }
}
