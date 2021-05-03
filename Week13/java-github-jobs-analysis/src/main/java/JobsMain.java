import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class JobsMain {

  public static void main(String[] args) throws IOException {
    File positionsJson = new File("prettyPositions.json");
    ObjectMapper mapper = new ObjectMapper();
    List<HashMap<String, String>> positionsList = new ArrayList<HashMap<String, String>>();

    try {
      positionsList = mapper.readValue(positionsJson, ArrayList.class);
      List<Job> jobList = new ArrayList<Job>();

      for (Map<String, String> position: positionsList) {
        Job newJob = new Job(position.get("id"), position.get("type"), position.get("url"), position.get("created_at"), position.get("company"), position.get("company_url"), position.get("location"), position.get("title"), position.get("description"), position.get("how_to_apply"), position.get("company_logo"));
        jobList.add(newJob);
      }

      System.out.println("Jobs available per location:");
      calculateJobPostingsPerCompany(jobList);
      System.out.println("\n");
      writeGHJob(jobList);
      System.out.println("\nNumber of jobs available per location:");
      calculateNumJobsPerLocation(jobList);

    } catch(IOException exception) {
      System.out.println(exception.getMessage());
    }

  }

  private static void calculateNumJobsPerLocation(List<Job> jobList) {
    Map<String, Integer> locationTotals = new HashMap<String, Integer>();
    for (Job jobs : jobList) {
      if (locationTotals.containsKey(jobs.getLocation())) {
        String loc = jobs.getLocation();
        locationTotals.put(loc, locationTotals.get(loc) + 1);
      } else {
        locationTotals.put(jobs.getLocation(), 1);
      }
    }

    ArrayList<Map.Entry<String, Integer>> unsortedMap = new ArrayList<Map.Entry<String, Integer>>();
    for (Map.Entry<String, Integer> loc : locationTotals.entrySet()) {
      unsortedMap.add(loc);
    }

    Comparator<Map.Entry<String, Integer>> locCompare = new Comparator<Entry<String, Integer>>() {
      @Override
      public int compare(Map.Entry<String, Integer> e1, Map.Entry<String, Integer> e2) {
        Integer v1 = e1.getValue();
        Integer v2 = e2.getValue();
        return v2.compareTo(v1);
      }
    };

    Collections.sort(unsortedMap, locCompare);

    for (Map.Entry<String, Integer> e : unsortedMap) {
      System.out.println(e.getKey() + " " + locationTotals.get(e.getKey()));
    }
  }

  private static void writeGHJob(List<Job> jobList) throws IOException {
    Scanner scan = new Scanner(System.in);
    File newJob = new File("job.json");
    ObjectMapper mapper = new ObjectMapper();

    System.out.println("Would you like to post a job? (Y/N)");
    String response = scan.nextLine();
    if (response.equalsIgnoreCase("y")) {
      System.out.println("Enter a job type:");
      String type = scan.nextLine();
      System.out.println("Enter a URL:");
      String url = scan.nextLine();
      System.out.println("Enter a title:");
      String title = scan.nextLine();
      System.out.println("Enter a description:");
      String description = scan.nextLine();

      Job jobToAdd = new Job (type, url, title, description);
      mapper.writeValue(newJob, jobToAdd);
    } else {
      System.out.println("Goodbye");
    }
  }

  private static void calculateJobPostingsPerCompany(List<Job> jobList) {
    Map<String, Integer> jobPostingsMap = new HashMap<String, Integer>();

    for (Job job : jobList) {
      String companyName = job.getCompany();
      if (jobPostingsMap.containsKey(companyName)) {
        jobPostingsMap.put(companyName, jobPostingsMap.get(companyName) + 1);
      } else {
        jobPostingsMap.put(companyName, 1);
      }
    }
    for (Map.Entry<String, Integer> displayJob : jobPostingsMap.entrySet()) {
      System.out.println("Company: " + displayJob.getKey() + " Number of postings: " + displayJob.getValue());
    }
  }
}
