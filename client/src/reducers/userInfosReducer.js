export default (state = null, action) => {
  if (action.type === "SAVE_USER_INFOS") {
    return action.payload;
  }
  return state;
};
