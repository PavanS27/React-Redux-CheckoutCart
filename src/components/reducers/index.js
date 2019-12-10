import { combineReducers } from "redux";

import promoreducer from "./PromocodeReducer";

export default combineReducers({
  promoCode: promoreducer
});
