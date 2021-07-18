// eslint-disable-next-line import/no-anonymous-default-export
export default (appts = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...appts, action.payload]
    default:
      return appts;
  }
};
