public class TenInTheBed {

  public static void main(String[] args) {
    int startingNumber = 10;
    String tense = "were ";
    String littleOneSaid = "Roll over! Roll over!";
    String closingPhrase = ", and one fell out.";
    while (startingNumber > 0) {
      if (startingNumber == 1) {
        tense = "was ";
        littleOneSaid = "Good Night!";
        closingPhrase = ", and went to sleep.";

      }
      System.out.println("There "+ tense + startingNumber + " in the bed, and the little one said,");
      System.out.println(littleOneSaid);
      System.out.println("So they all rolled over" + closingPhrase);
      startingNumber--;
    }
  }
}
