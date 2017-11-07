export default (state = null, action) => {
  if (action.type === "FETCH_BOOK") {
    return action.payload;
  }
  return state;
};
