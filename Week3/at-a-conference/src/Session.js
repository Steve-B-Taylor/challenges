class Session {
  constructor(title, facilitator) {
    this.title = title;
    this.facilitator = facilitator;
  }
  facilitator() {
    return this.facilitator.fullName();
  }
}

export default Session;
