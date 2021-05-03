import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.ManyToOne;
import javax.persistence.JoinColumn;

@Entity
@Table(name = "products")
public class Product {
  @Id
  @SequenceGenerator(name="products_generator", sequenceName = "products_id_seq", allocationSize = 1)
  @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "products_generator")
  @Column(name="id", nullable = false, unique = true)
  private Long id;

  @Column(name="name", nullable = false)
  private String name;

  @Column(name="price", nullable = false)
  private Double price;

  @Column(name="url")
  private String url;

  @Column(name="category_id", insertable = false, updatable = false)
  private Long categoryId;

  @ManyToOne
  @JoinColumn(name="category_id", nullable = false)
  private Category category;

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public Long getCategoryId() { return categoryId; }

  public void setCategoryId(Long categoryId) {
    this.categoryId = categoryId;
  }

//  public void setCategory(Category newCategory) {
//    category = newCategory;
//  }

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
