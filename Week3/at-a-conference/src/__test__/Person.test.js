import Person from "../Person.js";

describe("A Person", () => {
  let person;

  beforeEach(() => {
    person = new Person("Jon", "Doe", "jon@doe.com");
  });

  it("defines a person", () => {
    console.log(person);
    expect(person).toBeInstanceOf(Person);
  });
});
