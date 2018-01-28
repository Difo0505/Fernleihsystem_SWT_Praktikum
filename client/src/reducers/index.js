import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import korbReducer from './korbReducer';
import searchReducer from './searchReducer';
import selectedSearch from './selectedSearchReducer';
import userInfos from './userInfosReducer';
import steps from './stepsReducer';
import ordersReducer from './orderReducer';
import orderStateReducer from './orderStateReducer';
import loadingReducer from './loaderReducer';
export default combineReducers({
  book: bookReducer,
  korb: korbReducer,
  search: searchReducer,
  selectedSearch: selectedSearch,
  userInfos: userInfos,
  step: steps,
  orders: ordersReducer,
  orderState: orderStateReducer,
  loading: loadingReducer
});
