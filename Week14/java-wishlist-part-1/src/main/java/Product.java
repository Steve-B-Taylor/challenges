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
import javax.validation.constraints.Positive;
import org.hibernate.validator.constraints.Range;
import org.hibernate.validator.constraints.URL;

@Entity
@Table(name = "products")
public class Product {
  @Id
  @SequenceGenerator(name="products_generator", sequenceName = "products_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "products_generator")
  @Column(name="id", nullable = false, unique = true)
  private Long id;

  @Range


  @NotBlank
  @Column(name="name", nullable = false, unique = true)
  private String name;

  @Positive(message = "Must be a positive number")
  @Column(name="price", nullable = false)
  private Double price;

  @URL(message = "must begin with http:// or https://")
  @Column(name="url")
  private String url;

  @Column(name="category_id", nullable = false, insertable = false, updatable = false)
  private Long categoryId;

  @ManyToOne
  @JoinColumn(name="category_id", nullable = false)
  private Category category;

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category newCategory) {
    category = newCategory;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
