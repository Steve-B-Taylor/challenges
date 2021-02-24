import Session from "../Session.js";

describe("A Session", () => {
  let session;

  beforeEach(() => {
    session = new Session("Asteroid Prospecting", person);
  });

  it("defines a session", () => {
    console.log(session);
    expect(session).toBeInstanceOf(Session);
  });
});
