import { SET_CATEGORY, CREATE_CATEGORY } from "../actionTypes";

const initialState = {
  category: [],
};

export default function categoryReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case SET_CATEGORY:
      return { ...state, category: payload };
    case CREATE_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
}
