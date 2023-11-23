import {
  SET_ERROR,
  SET_JOBS,
  SET_LOADING,
  SET_JOBS_DETAIL,
} from "../actionTypes";

const initialState = {
  jobs: [],
  detail: [],
  isLoading: true,
  error: null,
};

function taskReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_JOBS:
      return { ...state, jobs: payload };
    case SET_JOBS_DETAIL:
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
