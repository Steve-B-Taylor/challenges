import Grade from "./Grade.js";
import SystemCheck from "./SystemCheck.js";

class SystemCheckSubmission {
  constructor(solution, student) {
    this.solution = solution;
    this.student = student;
    this.gradeSheet = [];
  }
  assignGrade(grade) {
    if (
      grade > Grade.exceedsExpectations ||
      grade < Grade.doesNotMeetExpectations
    ) {
      return "Invalid Grade Error!";
    }
    this.gradeSheet.push(this.solution, this.student, grade);

    return grade;
  }
}

export default SystemCheckSubmission;
