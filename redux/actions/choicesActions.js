export const TOGGLE_EXPLICIT = "TOGGLE_EXPLICIT";
export const TOGGLE_NICHE = "TOGGLE_NICHE";
export const CHOOSE_COUNTRY = "CHOOSE_COUNTRY";

export const toggleExplicit = (value) => ({
  type: TOGGLE_EXPLICIT,
  payload: value,
});

export const toggleNiche = (value) => ({
  type: TOGGLE_NICHE,
  payload: value,
});

export const selectCountry = (value) => ({
  type: CHOOSE_COUNTRY,
  payload: value,
});
