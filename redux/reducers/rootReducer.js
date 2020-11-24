import { combineReducers } from "redux";
import choicesReducer from "./choicesReducers";

const rootReducer = combineReducers({
  choices: choicesReducer,
});

export default rootReducer;
