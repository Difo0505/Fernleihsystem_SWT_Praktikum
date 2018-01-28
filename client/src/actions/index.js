import axios from "axios";

//fetch all books from db
export const FetchBook = () => async dispatch => {
  const res = await axios.get("/api/getBook");
  console.log(res.data);
  dispatch({
    type: "FETCH_BOOK",
    payload: res.data
  });
};
//post book to korb
export const PostToKorb = data => dispatch => {
  // console.log(data);
  dispatch({
    type: "POST_BOOK_TO_KORB",
    payload: data
  });
};

//delete from korb
export const DeleteFromKorb = data => dispatch => {
  dispatch({
    type: "DELETE_FROM_KORB",
    payload: data
  });
};

//fetch book by year
export const FetchBooksYearAsc = () => async dispatch => {
  const res = await axios.get("/api/getBook/year/asc");

  dispatch({
    type: "FETCH_BOOK",
    payload: res.data
  });
};
export const FetchBooksYearDesc = () => async dispatch => {
  const res = await axios.get("/api/getBook/year/desc");

  dispatch({
    type: "FETCH_BOOK",
    payload: res.data
  });
};

//fetch search results by author
export const FetchSearchByAuthor = data => async dispatch => {
  const res = await axios.post("/api/searchBy/author", data);
  dispatch({ type: "FETCH_SEARCH", payload: res.data });
};

//fetch search results by title
export const FetchSearchByTitle = data => async dispatch => {
  const res = await axios.post("/api/searchBy/titel", data);
  console.log(res.data);
  dispatch({ type: "FETCH_SEARCH", payload: res.data });
};
//save the selected search result
export const SaveSelectedSearch = data => dispatch => {
  dispatch({ type: "SELECTED_SEARCH", payload: data });
};
export const SaveUserInfos = data => dispatch => {
  dispatch({ type: "SAVE_USER_INFOS", payload: data });
};
export const changeStep = data => dispatch => {
  console.log(data);
  dispatch({ type: "CHANGE_STEP", payload: data });
};
//Save the order in the database
export const Order = data => async dispatch => {
  const res = await axios.post("/api/postOrder", data);
};
export const getStep = data => dispatch => {
  dispatch({ type: "GET_STEP", payload: data });
};
