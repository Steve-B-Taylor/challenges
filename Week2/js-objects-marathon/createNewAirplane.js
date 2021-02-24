let createNewAirplane = (make, model, capacity) => {
  let plane = {
    make,
    model,
    capacity,
    flights: [],
    scheduleFlight(flight) {
      this.flights.push(flight);
    },
  };
  return plane;
};

export default createNewAirplane;
