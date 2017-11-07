import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import korbReducer from './korbReducer';
export default combineReducers({
  book: bookReducer,
  korb: korbReducer
});
