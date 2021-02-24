import SystemCheckSubmission from "./SystemCheckSubmission.js";

class SystemCheck {
  constructor(name, dueDate) {
    this.name = name;
    this.dueDate = dueDate;
    this.submissions = [];
  }
  addSubmission(submission) {
    this.submissions.push(submission);
  }
  averageGrade() {
    console.log(gradeSheet);
  }
}

export default SystemCheck;
