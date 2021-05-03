import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class Main {
  private static String ADD_CAR = "Add a Car";
  private static String LIST_CARS = "List Cars";
  private static String SEARCH_CARS = "Search for a Car";
  private static String EXIT = "Exit";

  private static Scanner inputScanner;

  public static void main(String[] args) {
    List<String> options = new ArrayList<String>();
    options.add(ADD_CAR);
    options.add(LIST_CARS);
//    options.add(SEARCH_CARS);
    options.add(EXIT);

    String menuChoice = "";
    while(menuChoice != EXIT) {
      System.out.println("CARS! CARS! CARS!");
      System.out.println("***");
      System.out.println("Coffee is for closers.\n");

      int menuIndex = 1;
      for(String option : options) {
        System.out.println(menuIndex + ". " + option);
        menuIndex++;
      }

      System.out.println("\nWhat would you like to do?");
      inputScanner = new Scanner(System.in);

      int selectedOption = inputScanner.nextInt();
      menuChoice = options.get(selectedOption - 1);
      if(menuChoice == ADD_CAR) {
        addCar();
      }
      else if(menuChoice == LIST_CARS) {
        listCars();
      }
    }
  }

  private static void addCar() {
    String carVin = "";
    String carModel = "";
    int carYear = 0;
    int carPrice = 0;

    Car carToAdd = new Car();
    EntityManagerFactory emf = Persistence
        .createEntityManagerFactory("com.launchacademy.carDealership");
    EntityManager em = emf.createEntityManager();

    inputScanner.nextLine();
    System.out.println("Enter the car make");
    String carMake = inputScanner.nextLine();

    System.out.println("Enter the car model");
    carModel = inputScanner.nextLine();

    System.out.println("Enter the car VIN (between 5 - 20 characters)");
    carVin = inputScanner.nextLine();

    System.out.println("Enter the year the car was built (1981 - 2029)");
    carYear = inputScanner.nextInt();

    System.out.println("Enter the price of the car (500 - 50000)");
    carPrice = inputScanner.nextInt();

    Car validateCar = new Car();

    // Do Make check here
    String makeCheck = "SELECT m from Make m where name = :name";
    Query makeCheckQuery = em.createQuery(makeCheck, Make.class);
    makeCheckQuery.setParameter("name", carMake);
    em.getTransaction().begin();

    List<Make> retrievedMakes = makeCheckQuery.getResultList();
    if (retrievedMakes.size() > 0) {
      carToAdd.setMake(retrievedMakes.get(0));
    } else {
      Make make = new Make();
      make.setName(carMake);
      em.persist(make);
      carToAdd.setMake(make);
      validateCar.setMake(make);
    }

    validateCar.setModel(carModel);
    validateCar.setVin(carVin);
    validateCar.setYear_built(carYear);
    validateCar.setAsking_price(carPrice);
    ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    Validator validator = factory.getValidator();

    Set<ConstraintViolation<Car>> violations = validator.validate(validateCar);

    if(violations.size() > 0) {
      System.out.println("Invalid input: please address the following issues");
      for (ConstraintViolation<Car> violation : violations) {
        System.out.println(violation.getPropertyPath() + ": " + violation.getMessage());
      }
    } else {
      carToAdd.setModel(carModel);
      carToAdd.setVin(carVin);
      carToAdd.setYear_built(carYear);
      carToAdd.setAsking_price(carPrice);

      em.persist(carToAdd);
      em.getTransaction().commit();

    }
    em.close();
    emf.close();

  }

  private static void listCars() {
    EntityManagerFactory emf = Persistence
        .createEntityManagerFactory("com.launchacademy.carDealership");
    EntityManager em = emf.createEntityManager();

    String listQuery = "SELECT c from Car c ORDER BY asking_price DESC";
    Query result = em.createQuery(listQuery, Car.class);
    List<Car> cars = result.getResultList();

    System.out.println("\nUpdated Car list");
    System.out.println("================");
    for (Car car : cars) {
      System.out.println(
          car.getVin() + " " +
          car.getMake() + " " +
          car.getModel() + " " +
          car.getYear_built() + " " +
          car.getAsking_price());
    }
    System.out.println("\n================");

    em.close();
    emf.close();
  }
}
