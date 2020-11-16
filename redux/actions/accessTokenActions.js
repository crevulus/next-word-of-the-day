export const ADD_ACCESS_TOKEN = "ADD_ACCESS_TOKEN";

export const addAccessToken = (value) => ({
  type: ADD_ACCESS_TOKEN,
  payload: value,
});
