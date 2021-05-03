import static org.fusesource.jansi.Ansi.ansi;
import static org.fusesource.jansi.Ansi.Color.*;

import org.fusesource.jansi.AnsiConsole;

public class HelloWorld {

  public static void main(String[] args) {
    AnsiConsole.systemInstall();

    System.out.println(ansi().fg(GREEN).a("Welcome to the ship."));
    System.out.println(ansi().fg(RED).a("RED ALERT"));
  }
}