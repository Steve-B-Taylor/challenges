// import Person from "./Person.js";

class Conference {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.attendees = [];
    this.sessions = [];
    this.summary = "";
  }
  register(person) {
    let isAttending = this.attendees.find((attendee) => {
      return attendee.email === person.email;
    });
    if (!isAttending && this.attendees.length < this.capacity) {
      this.attendees.push(person);
      // console.log(`Welcome to ${this.name}, ${person.fullName()}!`);
      return true;
    } else {
      // console.log(`Sorry, the conference is full  :-(`);
      return false;
    }
  }
  addSession(session) {
    if (this.sessions.push(session)) {
      return true;
    } else {
      return false;
    }
  }
  printSummary() {
    let summary = `Conference Name: ${this.name}\n`;
    summary += `Number attending: ${this.attendees.length}\n`;
    summary += "Attendees:\n";
    this.attendees.forEach((attendee) => {
      summary += `${attendee.firstName} ${attendee.lastName}\n`;
    });
    return summary;
  }
  printSessionSummary() {
    let summary = `Number of sessions: ${this.sessions.length}\n`;
    summary += "Session Titles:\n";
    this.sessions.forEach((session) => {
      summary += `${session.title} lead by ${session.facilitator.fullName()}\n`;
    });
    console.log(summary);
    return summary;
  }
  printRegistrationState() {
    let summary = "";
    if (this.attendees.length < this.capacity) {
      summary = "Registration is open";
    } else {
      summary = "Registration is closed";
    }
    return summary;
  }
}

export default Conference;
