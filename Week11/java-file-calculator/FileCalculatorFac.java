import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class FileCalculatorFac {

  public static final String PROBLEM_PATH = "./problems.txt";
  public static final String RESULT_PATH = "./results.txt";

  public static void main(String[] args) throws IOException {
    File problemFile = new File(PROBLEM_PATH);
    File fileToWrite = new File(RESULT_PATH);
    FileWriter fileWriter = new FileWriter(fileToWrite);
    Scanner scanner = new Scanner(problemFile);

    int result = 0;
    boolean addition = false;
    boolean multiplication = false;

    while (scanner.hasNextLine()) {
      String currentLine = scanner.useDelimiter("\\n").nextLine();
      if (currentLine.equals("+")) {
        addition = true;
        multiplication = false;
      } else if (currentLine.equals("*")) {
        result = 1;
        multiplication = true;
        addition = false;
      } else if (currentLine.equals("=")) {
        fileWriter.write(result + "\n");
        System.out.println("The result is: " + result);
        result = 0;
      } else {
        if (addition) {
          result += Integer.parseInt(currentLine);
        } else if (multiplication) {
          result *= Integer.parseInt(currentLine);
        }
      }
    }
    fileWriter.close();
  }
}
