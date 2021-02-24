const createNewCrewMember = (argName) => {
  let newCrew = {
    argName,
    trained: false,
  };
  return newCrew;
};

export default createNewCrewMember;
