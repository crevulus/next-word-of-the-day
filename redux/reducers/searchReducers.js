import { ADD_SEARCH_TERM, SEARCHING } from "../actions/searchActions";

const searchReducer = (state = { searching: false, value: "" }, action) => {
  switch (action.type) {
    case ADD_SEARCH_TERM:
      return { ...state, value: action.payload };
    case SEARCHING:
      return { ...state, searching: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
