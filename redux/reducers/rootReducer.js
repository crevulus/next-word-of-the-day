import { combineReducers } from "redux";
import choicesReducer from "./choicesReducers";

const rootReducer = combineReducers({
  choice: choicesReducer,
});

export default rootReducer;
