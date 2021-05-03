import java.util.ArrayList;

public class CreditReelRunner {
  public static void main(String[] args) {

    ArrayList<TeamMember> members = new ArrayList<TeamMember>();
    members.add(new CastMember("Molly", "Parker", "Maureen Robinson"));
    members.add(new CastMember("Toby", "Stephens","John Robinson"));
    members.add(new CastMember("Maxwell", "Jenkins", "Will Robinson"));
    members.add(new Producer("Neil", "Marshall"));
    members.add(new Producer("Zack", "Estrin"));

    for(TeamMember member : members) {
      //Output each team members credit line
      System.out.println(member.getCreditLine());
    }
  }

}
