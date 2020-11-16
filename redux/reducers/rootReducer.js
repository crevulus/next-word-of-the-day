import { combineReducers } from "redux";
import accessTokenReducer from "./accessTokenReducers";

const rootReducer = combineReducers({
  accessToken: accessTokenReducer,
});

export default rootReducer;
