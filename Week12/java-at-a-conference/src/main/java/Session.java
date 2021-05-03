public class Session {

  private final String name;
  private final Person facilitator;

  public Session(String name, Person facilitator) {
    this.name = name;
    this.facilitator = facilitator;
  }

  public CharSequence getName() {
    return name;
  }

  public Person getFacilitator() {
    return facilitator;
  }
}
