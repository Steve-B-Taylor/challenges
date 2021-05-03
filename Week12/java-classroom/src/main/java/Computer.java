import java.util.ArrayList;
import java.util.List;

public class Computer {

  private String type = "";
  private final int memory;
  private final int diskSpace;
  private List<Student> students;

  public Computer(String type, int memory, int diskSpace) {
    this.type = type;
    this.memory = memory;
    this.diskSpace = diskSpace;
    this.students = new ArrayList<Student>();
  }

  public Computer(int memory, int diskSpace) {
    this.type = type;
    this.memory = memory;
    this.diskSpace = diskSpace;
    this.students = new ArrayList<Student>();
  }

  public String getType() { return this.type; }

  public int getAvailableMemoryMb() {
    return this.memory;
  }

  public int getAvailableDiskSpaceMb() {
    return this.diskSpace;
  }

  public boolean hasNoStudent() {
    return this.students.isEmpty();
  }

  public Student getCurrentStudent() {
    if (this.students.isEmpty()) {
      return null;
    } else {
      Student currentStudent = this.students.get(0);
      return currentStudent;
    }
  }

  public void assignTo(Student student) {
    this.students.add(student);
  }
}
