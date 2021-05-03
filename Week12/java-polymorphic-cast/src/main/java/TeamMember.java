public abstract class TeamMember {

  private final String firstName;
  private final String lastName;

  public TeamMember(String firstName, String lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public abstract String getCreditLine();

  public String getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
