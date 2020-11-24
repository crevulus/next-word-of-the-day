import { TOGGLE_EXPLICIT, TOGGLE_NICHE } from "../actions/choicesActions";

const choicesReducer = (state = { explicit: false, niche: false }, action) => {
  switch (action.type) {
    case TOGGLE_EXPLICIT:
      return {
        ...state,
        explicit: action.payload,
      };
    case TOGGLE_NICHE:
      return {
        ...state,
        niche: action.payload,
      };
    default:
      return { ...state };
  }
};

export default choicesReducer;
