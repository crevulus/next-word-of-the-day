import { ADD_SEARCH_TERM } from "../actions/searchActions";

const searchReducer = (state, action) => {
  switch (action.type) {
    case ADD_SEARCH_TERM:
      return { ...state, value: action.payload };
    default:
      return { ...state };
  }
};

export default searchReducer;
