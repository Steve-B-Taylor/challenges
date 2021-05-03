public class Monkey {
  private String firstName;
  private String lastName;
  private String favoriteFood;
  private String quote;

  Monkey(String firstName, String lastName, String favoriteFood, String quote) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteFood = favoriteFood;
    this.quote = quote;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getFavoriteFood() {
    return favoriteFood;
  }

  public String getFullName() {
    return this.firstName + " " + this.lastName;
  }

  public String getFavoriteQuote() {
    return this.quote;
  }
}
