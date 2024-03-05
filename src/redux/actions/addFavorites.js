import { ADD_TO_FAVORITES, REMOVE_FAVORITES } from "./constants";

export const addToFavorites = (payload) => {
  return {
    type: ADD_TO_FAVORITES,
    payload,
  };
};

export const removeFavorites = (payload) => {
  return {
    type: REMOVE_FAVORITES,
    payload,
  };
};
