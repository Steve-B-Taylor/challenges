public class CastMember extends TeamMember {

  private final String role;

    this.role = role;

  public String getCreditLine() {
    return this.firstName + " " + this.lastName + " - " + this.role;
  }


}
