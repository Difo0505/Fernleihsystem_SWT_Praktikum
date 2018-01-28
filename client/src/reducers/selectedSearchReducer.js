export default (state = null, action) => {
  if (action.type === "SELECTED_SEARCH") {
    return action.payload;
  }
  return state;
};
