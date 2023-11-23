import {
  SET_ERROR,
  SET_PRODUCTS,
  SET_LOADING,
  SET_PRODUCTS_DETAIL,
} from "../actionTypes";

const initialState = {
  products: [],
  detail: [],
  isLoading: true,
  error: null,
};

function taskReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
    case SET_PRODUCTS_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}

export default taskReducer;
