import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";

const reducers = combineReducers({
  categoryReducer: categoryReducer,
  productReducer: productReducer,
});

export default reducers;
