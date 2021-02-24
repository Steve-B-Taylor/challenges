const createNewCrewMember = (name) => {
  let crewMemberObject = {
    name,
    trained: false,
  };
  return crewMemberObject;
};

export default createNewCrewMember;
