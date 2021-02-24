import Conference from "../Conference.js";
import Person from "../Person.js";
import Session from "../Session.js";

describe("A conference", () => {
  let conference;
  let person1;
  let person2;
  let person3;
  let session1;
  let session2;
  let session3;

  beforeEach(() => {
    conference = new Conference("Space Con", 2);
    person1 = new Person("Jon", "Smith", "jon@smith.com");
    person2 = new Person("Jane", "Doe", "jane@doe.com");
    person3 = new Person("Marvin", "Martian", "marvin@mars.com");
    session1 = new Session("Asteroid Prospecting", person1);
    session2 = new Session("Zero-G Square Dancing", person2);
    session3 = new Session("Moon Landing 101", person3);
  });

  it("defines a conference", () => {
    expect(conference).toBeInstanceOf(Conference);
  });

  // A conference has a name defined when it is created
  it("Initializes with a name", () => {
    expect(conference.name).toBe("Space Con");
  });

  // A conference has a maximum number of registrants defined when it is created
  it("checks number of attendees", () => {
    // console.log(conference);
    expect(conference.capacity).toEqual(2);
  });

  // A conference starts with a blank list of attendees
  it("checks for blank list of attendees", () => {
    expect(conference).toHaveProperty("attendees", []);
  });

  // A conference starts with a blank list of sessions
  it("checks for blank list of sessions", () => {
    expect(conference).toHaveProperty("sessions", []);
  });

  describe("#register", () => {
    it("can register an attendee", () => {
      expect(conference.attendees.length).toEqual(0);
      conference.register(person1);
      expect(conference.attendees.length).toEqual(1);
    });
    it("The register method returns true if I've successfully registered", () => {
      expect(conference.register(person1)).toEqual(true);
    });
    it("returns false if a person registers a second time", () => {
      conference.register(person1);
      conference.register(person1);
      expect(conference.register(person1)).toEqual(false);
    });
    it("do not register if the Conference is full and return false", () => {
      conference.register(person1);
      conference.register(person2);
      expect(expect(conference.attendees.length).toEqual(2));
      conference.register(person3);
      expect(conference.attendees.length).toEqual(2);
      expect(conference.register(person3)).toEqual(false);
    });
  });

  describe("#addSession", () => {
    it("can add a new session", () => {
      expect(conference.addSession(session1)).toEqual(true);
      // console.log(conference.sessions);
    });

    it("returns false if a person registers a second time", () => {
      conference.register(person1);
      conference.register(person1);
      expect(conference.register(person1)).toEqual(false);
    });

    it.only("A session must be created with a title, and a Person instance who will serve as the facilitator of the session", () => {
      conference.addSession(session1);
      // conference.addSession(session2);
      // conference.addSession(session3);
    });
  });

  describe("#printSummary", () => {
    // The summary should include the conference name,
    // the number of registrants,
    // and each of their first name and last name
    it("can print a summary", () => {
      conference.register(person1);
      conference.register(person2);
      conference.addSession(session1);

      expect(conference.printSummary()).toEqual(
        "Conference Name: Space Con\nNumber attending: 2\nAttendees:\nJon Smith\nJane Doe\n"
      );
    });

    // The summary should include the number of sessions,
    // their titles,
    // and each of their facilitator's names
    it("can print a session summary", () => {
      conference.register(person1);
      conference.register(person2);
      conference.addSession(session1);
      conference.addSession(session2);

      expect(conference.printSessionSummary()).toEqual(
        "Number of sessions: 2\nSession Titles:\nAsteroid Prospecting lead by Jon Smith\nZero-G Square Dancing lead by Jane Doe\n"
      );
    });

    // The summary should indicate if registration is still open
    // - registration is open if the conference still has available seats
    // (the maximum number of registrants have not been reached).
    // If the conference is at capacity, registration is closed.
    it("indicate a session is open if not full", () => {
      conference.register(person1);
      expect(conference.printRegistrationState()).toEqual(
        "Registration is open"
      );
    });
    it("indicate a session is closed if full", () => {
      conference.register(person1);
      conference.register(person2);
      expect(conference.printRegistrationState()).toEqual(
        "Registration is closed"
      );
    });
  });
});
