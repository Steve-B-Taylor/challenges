let createNewFlight = (date, takeoffTime, landingTime, origin, destination) => {
  let flights = {
    date,
    takeoffTime,
    landingTime,
    origin,
    destination,
  };
  return flights;
};

export default createNewFlight;
