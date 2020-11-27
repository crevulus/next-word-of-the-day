import { combineReducers } from "redux";
import choicesReducer from "./choicesReducers";
import searchReducer from "./searchReducers";

const rootReducer = combineReducers({
  choices: choicesReducer,
  search: searchReducer,
});

export default rootReducer;
