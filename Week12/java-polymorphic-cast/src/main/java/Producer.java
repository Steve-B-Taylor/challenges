public class Producer extends TeamMember {

  private String role;
  public Producer(String firstName, String lastName) {
    super(firstName, lastName);
    this.role = "Producer";
  }

  @Override
  public String getCreditLine() {
    return this.role + " - " + this.getFullName();
  }

}
