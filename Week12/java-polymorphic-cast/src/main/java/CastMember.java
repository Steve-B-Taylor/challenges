public class CastMember extends TeamMember {

  private final String role;

  public CastMember(String firstName, String lastName, String role) {
    super(firstName, lastName);
    this.role = role;
  }

  @Override
  public String getCreditLine() {
    return this.role + " - " + this.getFullName() ;
  }


}
