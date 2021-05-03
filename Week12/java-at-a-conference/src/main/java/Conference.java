import java.util.ArrayList;
import java.util.List;

public class Conference {

  private String name;
  private int maxRegistrants;
  private List<Person> attendees;
  private List<Session> sessions;

  public Conference(String name, int maxRegistrants) {
    this.name = name;
    this.maxRegistrants = maxRegistrants;
    this.attendees = new ArrayList<Person>(this.maxRegistrants);
    this.sessions = new ArrayList<Session>();
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public void setMaxRegistrants(int maxRegistrants) {
    this.maxRegistrants = maxRegistrants;
  }

  public int getMaxRegistrants() {
    return maxRegistrants;
  }

  public List<Person> getAttendees() {
    return attendees;
  }

  public List<Session> getSessions() {
    return sessions;
  }

  public boolean register(Person registeredPerson) {
    if (this.attendees.size() >= this.maxRegistrants) {
      return false;
    }
    for (Person person : this.getAttendees()) {
      if (person.getEmail() == registeredPerson.getEmail()) {
        return false;
      }
    }

    this.attendees.add(registeredPerson);
    return true;
  }

  public boolean addSession(Session session) {
    this.sessions.add(session);
    return true;
  }

  public String getSummary() {
    String attendeeList = "";
    for (Person person : this.attendees) {
      attendeeList += person.getFirstName() + " " + person.getLastName();
    }

    String sessionList = "";
    for (Session session : this.sessions) {
      sessionList += session.getName() +
          ", facilitated by " + session.getFacilitator().getFirstName() +
          " " + session.getFacilitator().getLastName();
    }
    return this.name + "\n" +
        "Number of Attendees: " + this.attendees.size() +
        "===Attendees===" +
        attendeeList +
        "Number of Sessions: " + this.sessions.size() +
        sessionList;
  }
}
