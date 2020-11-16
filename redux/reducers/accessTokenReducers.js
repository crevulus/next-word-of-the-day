import { ADD_ACCESS_TOKEN } from "../actions/accessTokenActions";

const accessTokenReducer = (state, action) => {
  switch (action.type) {
    case ADD_ACCESS_TOKEN:
      return { ...state, value: action.payload };
    default:
      return { ...state };
  }
};

export default accessTokenReducer;
