import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="laser_cannons")
public class LaserCannon {
  @Id
  @SequenceGenerator(name="laser_cannon_generator", sequenceName = "laser_cannons_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "laser_cannon_generator")
  private Integer id;

  @NotNull(message="can't be blank")
  @Column(name="name", nullable = false)
  private String name;

  @NotNull(message = "can't be blank")
  @Column(name="recharge_time", nullable = false)
  private Integer rechargeTime;

  @NotNull(message = "can't be blank")
  @Column(name="fire_rate", nullable = false)
  private Integer fireRate;

  @Column(name="overload")
  private boolean overload;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getRechargeTime() {
    return rechargeTime;
  }

  public void setRechargeTime(Integer rechargeTime) {
    this.rechargeTime = rechargeTime;
  }

  public Integer getFireRate() {
    return fireRate;
  }

  public void setFireRate(Integer fireRate) {
    this.fireRate = fireRate;
  }

  public boolean isOverload() {
    return overload;
  }

  public void setOverload(boolean overload) {
    this.overload = overload;
  }
}
