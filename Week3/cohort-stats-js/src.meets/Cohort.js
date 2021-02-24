class Cohort {
  constructor(title, startDate, endDate) {
    this.title = title;
    this.startDate = startDate;
    this.endDate = endDate;
    this.students = [];
    this.systemChecks = [];
  }
  enroll(student) {
    if (this.students < 1) this.students.push(student);

    this.students.forEach((entry) => {
      if (student.name.indexOf(entry.name) != -1) {
        return;
      }
      this.students.push(student);
    });
    // console.log(this.students);
  }
  assign(systemCheck) {
    this.systemChecks.push(systemCheck);
  }
  roster() {
    let rString = "";
    rString += `Cohort: ${this.title}\n--------------------\n`;
    this.students.forEach((entry) => {
      rString += `${entry.name} ${entry.email}\n`;
    });
    // console.log(rString);
    return rString;
  }
}

export default Cohort;
