const createNewSpaceship = (name) => {
  let newShipObject = {
    name,
    crew: [],
    propulsion: null,
    loadCrew(crewArray) {
      crewArray.forEach((member) => {
        this.crew.push(member);
        console.log(`${member.name} has joined the crew!`);
      });
    },
    captain() {
      let num = Math.floor(Math.random() * this.crew.length);
      return this.crew[num];
    },
    mountPropulsion(rocketObject) {
      this.propulsion = rocketObject;
      console.log("Propulsion has been mounted");
    },
    takeOff() {
      if (this.propulsion.fuel > 0) {
        this.propulsion.fire();
        console.log("Away we go!");
      } else {
        console.log("Not enough fuel");
      }
    },
  };
  return newShipObject;
};

export default createNewSpaceship;
