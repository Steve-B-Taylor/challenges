import java.util.ArrayList;
import java.util.List;

public class Computer {

  private final int memory;
  private final int diskSpace;
  private List<Student> students;

  public Computer(int memory, int diskSpace) {
    this.memory = memory;
    this.diskSpace = diskSpace;
    this.students = new ArrayList<Student>();
  }

  public int getAvailableMemoryMb() {
    return this.memory;
  }

  public int getAvailableDiskSpaceMb() {
    return this.diskSpace;
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
