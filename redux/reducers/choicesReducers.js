import {
  TOGGLE_EXPLICIT,
  TOGGLE_NICHE,
  CHOOSE_COUNTRY,
} from "../actions/choicesActions";

const choicesReducer = (
  state = { explicit: false, niche: false, country: null },
  action
) => {
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
    case CHOOSE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    default:
      return { ...state };
  }
};

export default choicesReducer;
