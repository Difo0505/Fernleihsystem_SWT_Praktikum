export default (state = null, action) => {
  if (action.type === 'GET_ORDER_STATE') {
    return action.payload;
  }
  return state;
};
