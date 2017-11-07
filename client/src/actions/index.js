import axios from "axios";
export const FetchBook = () => async dispatch => {
  const res = await axios.get("/api/getBook");
  console.log(res.data);
  dispatch({
    type: "FETCH_BOOK",
    payload: res.data
  });
};
