export default (state = null, action) => {
  if (action.type === 'LOADING_START') {
    return true;
  } else if (action.type === 'LOADING_STOP') {
    return false;
  }
  return state;
};
