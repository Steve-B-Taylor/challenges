import greet from "../greet.js"

describe("greet function", () => {
  it("says Hi to Scott", () => {
    expect(greet("Scott")).toEqual("Hi, Scott")
  })
})
