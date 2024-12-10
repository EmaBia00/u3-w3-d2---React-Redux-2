import { SET_SEARCH_RESULTS, SET_LOADING } from "../actions/types";

const initialState = {
  results: [],
  loading: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default searchReducer;
