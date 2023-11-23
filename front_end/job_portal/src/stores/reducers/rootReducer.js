import { combineReducers } from "redux";
import jobReducer from "./jobReducer";

const reducers = combineReducers({
  categoryReducer: categoryReducer,
  jobReducer: jobReducer,
});

export default reducers;
