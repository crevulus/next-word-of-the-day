import { TOGGLE_CHOICE } from "../actions/choicesActions";

const choicesReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_CHOICE:
      return { ...state, value: action.payload };
    default:
      return { ...state };
  }
};

export default choicesReducer;
