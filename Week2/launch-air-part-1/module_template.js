let functionName = (arg1, arg2, arg3) => {
  let object = {
    arg1,
    arg2,
    arg3,
    object_array: [],
    method(arg) {
      this.object_array.push(arg);
    },
  };
  return object;
};

export default functionName;
