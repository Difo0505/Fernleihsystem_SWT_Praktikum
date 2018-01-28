const initialState = {
  array: []
};
export default (state = initialState, action) => {
  if (action.type === "ADD_ORDER") {
    return {
      ...state,
      array: state.array.concat(action.payload)
    };
  }
  if (action.type === "REMOVE_ORDER") {
    return {
      ...state,
      array: state.array.filter(item => item !== action.payload)
    };
  }
  return state;
};
