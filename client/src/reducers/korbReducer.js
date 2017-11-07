const initialState = { arr: [] };
export default (state = initialState, action) => {
  if (action.type === 'POST_BOOK_TO_KORB') {
    console.log(state.arr.length);
    return {
      ...state,
      arr: state.arr.concat(action.payload)
    };
  }
  if (action.type === 'DELETE_FROM_KORB') {
    var index = state.arr.indexOf(action.payload);
    state.arr.splice(index, 1);
    console.log(state.arr);
    return { ...state };
  }

  return state;
};
