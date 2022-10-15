import {
  GET_SEARCH,
  GET_DETAIL,
  CLEAR_DETAIL,
  GET_REVIEWS,
  CHANGE_FILTERS,
  GET_FILTERED,
} from "./actions";

const initialState = {
  books: [],
  genres: [],
  book: [],
  detail: [],
  reviews: [],
  filtersApplied: {
    sort: "A-Z",
    genres: "none",
    author: "none",
  },
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FILTERED:
      return { ...state, books: action.payload };

    case CHANGE_FILTERS:
      return { ...state, filtersApplied: action.payload };

    case GET_SEARCH:
      return { ...state, books: action.payload };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case GET_REVIEWS:
      return { ...state, reviews: action.payload };

    case CLEAR_DETAIL:
      return { ...state, detail: [] };

    default:
      return { ...state };
  }
}
