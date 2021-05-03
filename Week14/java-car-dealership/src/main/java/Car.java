import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import org.hibernate.validator.constraints.Range;

@Entity
@Table(name="cars")
public class Car {

  @Id
  @SequenceGenerator(name="cars_generator", sequenceName = "cars_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cars_generator")
  @Column(name="id", nullable = false)
  private long id;

  @NotBlank
  @Size(min=5, max=20, message = "must be between 5 and 20 characters long")
  @Column(name="vin", nullable = false)
  private String vin;

  @Range(min=1981, max=2029, message="must be between 1981 - 2029")
  @Column(name="year_built", nullable = false)
  private int year_built;

  @Range(min=500, max=50000, message="must be between 500 - 50000")
  @Column(name="asking_price", nullable = false)
  private int asking_price;

  @NotBlank
  @Column(name="model", nullable = false)
  private String model;

  @ManyToOne
  @JoinColumn(name="make_id")
  private Make make;

  @Override
  public String toString() {
    return "Car{" +
        "make=" + getMake() +
        '}';
  }

  public Make getMake() {
    return make;
  }

  public void setMake(Make make) {
    this.make = make;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getVin() {
    return vin;
  }

  public void setVin(String vin) {
    this.vin = vin;
  }

  public int getYear_built() {
    return year_built;
  }

  public void setYear_built(int year_built) {
    this.year_built = year_built;
  }

  public int getAsking_price() {
    return asking_price;
  }

  public void setAsking_price(int asking_price) {
    this.asking_price = asking_price;
  }

  public String getModel() {
    return model;
  }

  public void setModel(String model) {
    this.model = model;
  }
}
