import { ADD_TO_FAVORITES, REMOVE_FAVORITES } from "../actions/constants";

const initialState = {
  favorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload],
      };
    case REMOVE_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.idMeal !== payload.idMeal),
      };
    default:
      return state;
  }
};

export default rootReducer;
