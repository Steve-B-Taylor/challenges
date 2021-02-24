let createNewSpaceship = (name) => {
  let ourShip = {
    name,
    crew: [],
    loadCrew(newCrewMember) {
      this.crew.push(newCrewMember);
      console.log(`${newCrewMember.name} is now aboard the ${this.name}`);
    },
    captain() {
      let random = Math.floor(Math.random() * this.crew.length);
      let crewCaptain = this.crew[random].name;
      return crewCaptain;
    },
    propulsion: null,
    mountPropulsion(rocketObject) {
      this.propulsion = rocketObject;
      console.log("Propulsion mounted!");
    },
    takeoff() {
      if (this.propulsion.fire()) {
        console.log("Woooooooooooooooooosh!");
      } else {
        console.log("Rut-roh!  The engines failed to fire!  :-(");
      }
    },
    countdown(num) {
      setTimeout(() => {
        if (num === 0) {
          console.log("Blast off!");
          this.takeoff();
        } else {
          console.log(num);
          this.countdown(num - 1);
        }
      }, 1000);
    },
  };
  return ourShip;
};

export default createNewSpaceship;
