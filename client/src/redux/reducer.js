import { GET_SEARCH, GET_DETAIL, CLEAR_DETAIL, POST_BOOKS, GET_ALL_BOOKS, GET_REVIEWS, GET_GENRE } from "./actions";

const initialState = {
  books: [],
  genres: [],
  book: [],
  detail: [],
  reviews: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
          ...state,
          books: action.payload
      }
    case GET_SEARCH:
      return { ...state, books: action.payload };

    case GET_DETAIL:
      return { ...state, detail: action.payload };

    case GET_REVIEWS:
      return { ...state, reviews: action.payload };

    case CLEAR_DETAIL:
      return{ ...state, detail: [] };
    
    case GET_GENRE:
      return{ ...state, genres: action.payload}
    case POST_BOOKS:
      return {...state}
    default:
      return { ...state };
  }
}
