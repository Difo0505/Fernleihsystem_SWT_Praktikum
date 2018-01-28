import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import korbReducer from "./korbReducer";
import searchReducer from "./searchReducer";
import selectedSearch from "./selectedSearchReducer";
import userInfos from "./userInfosReducer";
import steps from "./stepsReducer";
import ordersReducer from "./orderReducer";
export default combineReducers({
  book: bookReducer,
  korb: korbReducer,
  search: searchReducer,
  selectedSearch: selectedSearch,
  userInfos: userInfos,
  step: steps,
  orders: ordersReducer
});
