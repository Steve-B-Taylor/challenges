import java.util.ArrayList;
import java.util.List;

public class Session {

  private final String name;
  private final String subject;
  private final List<Student> roster;

  public Session(String name, String subject) {
    this.name = name;
    this.subject = subject;
    this.roster = new ArrayList<Student>();
  }

  public String getName() {
    return this.name;
  }

  public String getSubject() {
    return this.subject;
  }

  public List<Student> getStudentRoster() {
    return this.roster;
  }

  public void enroll(Student student) {
    if (!this.roster.contains(student)) {
      this.roster.add(student);
    }
  }

  public String getDirectory() {
    String output = "";
    for (Student student : roster) {
      output += student.getDirectoryEntry() + "\n";
    }
    return output;
  }
}
