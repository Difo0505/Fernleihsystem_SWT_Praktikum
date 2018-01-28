export default (state = null, action) => {
  if (action.type === "CHANGE_STEP") {
    return action.payload;
  }
  if (action.type === "GET_STEP") {
    return action.payload;
  }
  return state;
};
