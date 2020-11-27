export const ADD_SEARCH_TERM = "ADD_SEARCH_TERM";
export const SEARCHING = "SEARCHING";

export const addSearchTerm = (value) => ({
  type: ADD_SEARCH_TERM,
  payload: value,
});

export const toggleSearching = (value) => ({
  type: SEARCHING,
  payload: value,
});
