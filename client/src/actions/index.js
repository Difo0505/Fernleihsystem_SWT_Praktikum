import axios from 'axios';

//fetch all books from db
export const FetchBook = () => async dispatch => {
  const res = await axios.get('/api/getBook');
  console.log(res.data);
  dispatch({
    type: 'FETCH_BOOK',
    payload: res.data
  });
};
//post book to korb
export const PostToKorb = data => dispatch => {
  // console.log(data);
  dispatch({
    type: 'POST_BOOK_TO_KORB',
    payload: data
  });
};

//delete from korb
export const DeleteFromKorb = data => dispatch => {
  dispatch({
    type: 'DELETE_FROM_KORB',
    payload: data
  });
};
