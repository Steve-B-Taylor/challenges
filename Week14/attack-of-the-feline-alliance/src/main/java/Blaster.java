import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name="blasters")
public class Blaster {
  @Id
  @SequenceGenerator(name="blaster_generator", sequenceName = "blasters_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "blaster_generator")
  private Integer id;

  @NotNull(message="can't be blank")
  @Column(name="name", nullable = false)
  private String name;

  @NotNull(message="can't be blank")
  @Column(name="type", nullable = false)
  private String type;

  @NotNull(message = "can't be blank")
  @Column(name="recharge_time", nullable = false)
  private Integer rechargeTime;

  @Column(name="attachment")
  private String attachment;

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

  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }

  public Integer getRechargeTime() {
    return rechargeTime;
  }

  public void setRechargeTime(Integer rechargeTime) {
    this.rechargeTime = rechargeTime;
  }

  public String getAttachment() {
    return attachment;
  }

  public void setAttachment(String attachment) {
    this.attachment = attachment;
  }
}
