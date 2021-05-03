import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class Session {

  private final String name;
  private final String subject;
  private final List<Student> roster;
  private final List<Computer> computers;

  public Session(String name, String subject) {
    this.name = name;
    this.subject = subject;
    this.roster = new ArrayList<Student>();
    this.computers = new ArrayList<Computer>();
    for (int i = 0; i < 5; i++) {
      computers.add(new Computer("pc", 4000, 100000));
    }
    for (int i = 0; i < 5; i++) {
      computers.add(new Computer("mac", 4000, 100000));
    }
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

  public List<Computer> getComputers() {
    return computers;
  }

  public List<Computer> getUnassignedComputers() {
    ArrayList<Computer> unassignedComputers = new ArrayList<>();
    for (Computer computer : computers) {
      if (computer.hasNoStudent()) {
        unassignedComputers.add(computer);
      }
    }
    return unassignedComputers;
  }

  public String computerInventoryReport() {
    String computerList = "";
    String assigned = "";
    int index = 0;
    for (Computer computer : computers) {
      if (getComputers().get(index).getCurrentStudent() == null) {
        assigned = " available";
      } else {
        assigned = " assigned to " + getComputers().get(index).getCurrentStudent().getFirstName() + " " + getComputers().get(index).getCurrentStudent().getLastName();
      }
      computerList += "Computer: " + (index) + " Type: " + computer.getType().toUpperCase() + " RAM: " + computer.getAvailableMemoryMb() + " Disk Space: " + computer.getAvailableDiskSpaceMb() + assigned + "\n";
      index++;
    }
    return computerList;
  }
}
