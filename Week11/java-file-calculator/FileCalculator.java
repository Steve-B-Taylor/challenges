import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.regex.Pattern;

public class FileCalculator {

  public static final String PROBLEM_FILE = "./problem.txt";
  public static final String RESULTS_FILE = "./results.txt";
  public static final String PROBLEMS_FILE = "./problems.txt";

  public static void main(String[] args) throws IOException {
    File problemList = new File(PROBLEM_FILE);
    File resultFile = new File(RESULTS_FILE);
    resultFile.createNewFile();
    String problem = new Scanner(problemList).useDelimiter("\\z").next();

    String[] equation = problem.split("\n");
//      for (String e : equation) {
//        System.out.println(e);
//      }
    int answer = 0;
    String operator = equation[0].toString();
    String addition = "+";
    String multiplication = "*";
    if (operator.equals(addition)) {
      System.out.print(Integer.parseInt(equation[1]) + "+" + Integer.parseInt(equation[2]) + "=");
      answer = Integer.parseInt(equation[1]) + Integer.parseInt(equation[2]);
      System.out.println(answer);
    } else if (equation[0].equals('*')) {
      System.out.print(Integer.parseInt(equation[1]) + "*" + Integer.parseInt(equation[2]) + "=");
      answer = Integer.parseInt(equation[1]) * Integer.parseInt(equation[2]);
    }

    String answerToString = Integer.toString(answer);

    FileWriter fileWriter = new FileWriter(resultFile);
    fileWriter.write(answerToString);
    fileWriter.close();
    String printAnswer = new Scanner(resultFile).useDelimiter("\\z").next();

  }
}
